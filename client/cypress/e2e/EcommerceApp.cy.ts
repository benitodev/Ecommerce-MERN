describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Frontpage can be opened', () => {
    cy.contains('SUMMER SALE');
  });

  it('Carousel can change when the button is clicked', () => {
    cy.get('#nextButton').click();
  });
});

export {};
