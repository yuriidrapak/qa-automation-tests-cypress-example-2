import * as registerLoginPage from '../page-objects/registerlogin-page.pages';

describe('"QA Portal Login" page - Login', () => {
    it('"QA Portal Login" page loads fine', () => {
        //Visit QA Portal Login
        cy.visit(Cypress.env('urlBase') + Cypress.env('pageQaPortalLogin'))

        //Checking heading
        cy.get(registerLoginPage.pageHeading).contains('QA Portal Login').should('be.visible')

        //Checking "Username" field
        cy.get(registerLoginPage.fieldUsername).should('have.value', '')
            .should('have.attr', 'type', 'text')
            .should('be.visible')

        //Checking "Password" field
        cy.get(registerLoginPage.fieldPassword).should('have.value', '')
            .should('have.attr', 'type', 'password')
            .should('be.visible')

        //Checking "Login" button
        cy.get(registerLoginPage.loginButton).contains('Login')
            .should('have.attr', 'type', 'submit')
            .should('be.visible')

        //Images are visible
        cy.get(registerLoginPage.imgLogoMini).should('be.visible')
    })

    it('Enter Login information', () => {
        //Login
        cy.loginUI({
            username: Cypress.env('loginTestUser1'),
            password: Cypress.env('passwordTestUser1')
        })

        //For example. The page opens - with the title "Welcome".
        cy.log('For example. The page opens - with the title "Welcome".')
        cy.get(registerLoginPage.pageHeading).contains('Welcome')
    })
})