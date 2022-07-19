import Login from '../../src/pages/Login';
const inputEmail = '[id=email]';
const inputPassword = '[id=password]';
const btnLogar = '[id=logar]';

describe('Login.cy.js', () => {
  it('playground', () => {
    cy.mount(<Login />);
    cy.get(inputEmail).click();
    cy.get(inputEmail).type("admin@admin.com.br");
    cy.get(inputPassword).click();
    cy.get(inputPassword).type("123456");
    cy.get(btnLogar).click();
  })
})