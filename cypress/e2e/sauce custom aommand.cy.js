

describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.login('standard_user', 'secret_sauce');
  });
});
