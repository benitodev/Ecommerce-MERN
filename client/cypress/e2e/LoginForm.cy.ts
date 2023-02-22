describe('Form can be visibile for the users', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should appear the email and password fields after clicking sign in', () => {
    cy.contains('SIGN IN').click();
    cy.get('[data-cy="login-form"]').find('[data-cy="email-input"]');
    cy.get('[data-cy="login-form"]').find('[data-cy="password-input"]');
  });
});

describe('Schemas validators should display error messages for email and password fields', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('email schema error', () => {
    const email = 'test@gmail';
    const password = 'lacontraseñasegura';
    const emailSchemaMessage = 'email must be a valid email';
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="email-input"]')
      .type(email);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="password-input"]')
      .type(password);
    cy.get('#send-login').click();
    cy.contains(emailSchemaMessage);
  });

  it('password schema error', () => {
    const email = 'test@gmail.com';
    const password = 'lacontraseña';
    const passwordSchemaMessage = 'error invalid password';
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="email-input"]')
      .type(email);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="password-input"]')
      .type(password);
    cy.get('#send-login').click();
    cy.contains(passwordSchemaMessage);
  });
});

describe('login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('user can login', () => {
    const email = 'test@gmail.com';
    const password = 'lacontraseñasegura';
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="email-input"]')
      .type(email);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="password-input"]')
      .type(password);
    cy.get('#send-login').click();
    cy.contains('You have successfully logged in!');
  });

  it('Wrong email display an error message', () => {
    const email = 'wrong@gmail.com';
    const password = 'lacontraseñasegura';
    const emailErrorMessage = 'error checking email';
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="email-input"]')
      .type(email);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="password-input"]')
      .type(password);
    cy.get('#send-login').click();
    cy.contains(emailErrorMessage);
  });

  it('Wrong password display an error message', () => {
    const email = 'test@gmail.com';
    const password = 'lacontraseñasegurr23';
    const passwordErrorMessage = 'error invalid password';
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="email-input"]')
      .type(email);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="password-input"]')
      .type(password);
    cy.get('#send-login').click();
    cy.contains(passwordErrorMessage);
  });
});
export {};
