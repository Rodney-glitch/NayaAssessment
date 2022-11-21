class NayaPage{
    get nayaLogo(){
        return cy.get('.img')
    }
    get usernameField(){
        return cy.get('input[placeholder="Username"]')
    }
    get passwordField(){
        return cy.get('input[placeholder="Password"]')
    }
    get colorBtn(){
        return cy.get('div > button:first')
    }
    get colorPointer(){
        return cy.get('.saturation-white > div > div')
    }
    get overlay(){
        return cy.get('[style="position: fixed; inset: 0px;"]')
    }
    get loginBtn(){
        return cy.get('div > button:last')
    }
    get createSketchBtn(){
        return cy.get('.login-button:contains("Create")')
    }
    get collabText(){
        return cy.get('center')
    }
    get collabBoard(){
        return cy.get('.upper-canvas')
    }
    get sketchNameField(){
        return cy.get('input[placeholder]')
    }
    get textField(){
        return cy.get('[label="Text"]')
    }
    get addTextBtn(){
        return cy.get('button:contains("Add")')
    }
    get saveBtn(){
        return cy.get('.btn:contains("Save")')
    }
    get cards(){
        return cy.get('.card > .row')
    }
    get editBtn(){
        return cy.get('.login-button:contains("Edit")')
    }
    get cardName(){
        return cy.get('.card > .row > div > div')
    }
    get logoutBtn(){
        return cy.get('.login-button:first')
    }
}

export default NayaPage;