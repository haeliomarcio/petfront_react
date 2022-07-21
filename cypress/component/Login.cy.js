import Login from '../../src/pages/Login';
import AuthProvider from '../../src/contexts/auth';
const inputEmail = '[id=email]';
const inputPassword = '[id=password]';
const btnLogar = '[id=logar]';

describe('Login.cy.js', () => {
  it('playground', () => {
    cy.mount(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    cy.get(inputEmail).click();
    cy.get(inputEmail).type("teste@teste.com.br");
    cy.get(inputPassword).click();
    cy.get(inputPassword).type("123123");
    cy.get(btnLogar).click();
  })
})