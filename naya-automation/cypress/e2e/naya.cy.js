import NayaPage from "../pageObjects/NayaPage";

const nayaPage = new NayaPage();

const time = Date.now()

let sketchName = "test"+time

describe('Naya Automation', () => {
  before(()=>{
    cy.visit('http://localhost:3000/')
  })

  it('Login and verify landing page', () => {
    nayaPage.nayaLogo.should('be.visible')
    nayaPage.usernameField.clear().type('Test')
    nayaPage.passwordField.clear().type('Test')
    nayaPage.colorBtn.click()
    nayaPage.colorPointer.click()
    nayaPage.overlay.click({force:true})
    nayaPage.loginBtn.click()
    cy.url().should('include', 'explore')
    nayaPage.createSketchBtn.should('be.visible')
  })
  it('should view project', function () {
    nayaPage.cards.should('be.visible')
    nayaPage.editBtn.first().click()
    cy.url().should('include', 'edit')
    nayaPage.saveBtn.click()
  });
  it('should create project and verify', function () {
    cy.intercept(
        {
          method: 'POST',
          url: 'http://localhost:8080/api/metaData',
        }
    ).as('addSketch')
    nayaPage.createSketchBtn.click()
    nayaPage.collabText.should('be.visible')
        .and('contain.text', 'Collaboration Board')
    nayaPage.collabBoard.should('be.visible')
    nayaPage.sketchNameField.clear().type(sketchName)
    nayaPage.textField.clear().type(sketchName)
    nayaPage.addTextBtn.click()
    nayaPage.saveBtn.click()
    cy.wait('@addSketch').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body['base64']).to.not.be.null
    })
    nayaPage.cardName.contains(sketchName).should('be.visible')
  });
  it('should logout', function () {
    nayaPage.logoutBtn.click()
    cy.url().should('not.include', 'explore')
  });
})