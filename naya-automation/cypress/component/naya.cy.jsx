import Login from '../../../naya-web/src/Login/login'
import NayaPage from "../pageObjects/NayaPage";

const nayaPage = new NayaPage();

describe('naya.cy.jsx', () => {
  it('test Login component', () => {
    cy.intercept(
        {
          method: 'POST',
          url: 'http://localhost:8080/api/login',
        }
    ).as('login')
    cy.mount(<Login/>)
    nayaPage.nayaLogo.should('be.visible')
    nayaPage.usernameField.clear().type('Test')
    nayaPage.passwordField.clear().type('Test')
    nayaPage.colorBtn.click()
    nayaPage.colorPointer.click()
    nayaPage.overlay.click({force:true})
    nayaPage.loginBtn.click()
    cy.wait('@login').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
  })
})