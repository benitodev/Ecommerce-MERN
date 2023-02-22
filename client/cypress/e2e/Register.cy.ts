describe('register can be visibile for the users', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should appear the email and password fields after clicking sign in', () => {
    cy.contains('REGISTER').click();
    cy.get('[data-cy="login-form"]').find('[data-cy="name-input"]');
    cy.get('[data-cy="login-form"]').find('[data-cy="email-input"]');
    cy.get('[data-cy="login-form"]').find('[data-cy="password-input"]');
  });
});

describe('Schemas validators should display error messages for name, email and password fields', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('name schema error', () => {
    const name = 'p';
    const email = 'test@gmail';
    const password = 'lacontraseñasegura';
    const nameSchemaMessage = 'email must be a valid email';
    cy.get('[data-cy="login-form"]').find('[data-cy="name-input"]').type(name);

    cy.get('[data-cy="login-form"]')
      .find('[data-cy="email-input"]')
      .type(email);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="password-input"]')
      .type(password);
    cy.get('#send-login').click();
    cy.contains(nameSchemaMessage);
  });

  it('email schema error', () => {
    const name = 'lol33';
    const email = 'lol33@gmail.';
    const password = 'lolcontraseñasegura';
    const emailSchemaMessage = 'email must be a valid email';
    cy.get('[data-cy="login-form"]').find('[data-cy="name-input"]').type(name);
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
    const name = 'lol33';
    const email = 'test@gmail.com';
    const password = 'lacontras';
    const passwordSchemaMessage = 'Type 10 or more letters';
    cy.get('[data-cy="login-form"]').find('[data-cy="name-input"]').type(name);
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

describe('register page', () => {
  beforeEach(() => {
    cy.visit('/register');
    cy.request('POST', 'http://localhost:3000/testing/reset');
  });
  it('user can register', () => {
    const name = 'lol33';
    const email = 'lol@gmail.com';
    const password = 'lolcontraseñasegura';
    cy.get('[data-cy="login-form"]').find('[data-cy="name-input"]').type(name);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="email-input"]')
      .type(email);
    cy.get('[data-cy="login-form"]')
      .find('[data-cy="password-input"]')
      .type(password);
    cy.get('#send-login').click();
    cy.contains('You have successfully registered');
  });
});
export {};
