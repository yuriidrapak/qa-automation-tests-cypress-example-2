import * as registerLoginPage from '../page-objects/registerlogin-page.pages';

describe('"QA Portal Login" page - Login Error Messages', () => {

    beforeEach(() => {
        //Visit QA Portal Login
        cy.visit(Cypress.env('urlBase') + Cypress.env('pageQaPortalLogin'))
    })

    context('Check that we receive the necessary error messages', () => {
        it('Error message - Please enter your password', () => {
            //Login
            cy.loginUI({
                username: Cypress.env('loginTestUser1'),
                password: ''
            })

            //Checking Error message - Please enter your password
            cy.get(registerLoginPage.messageError).contains('Please enter your password.').should('be.visible')
        })

        it('Error message - Please enter username', () => {
            //Login
            cy.loginUI({
                username: '',
                password: Cypress.env('passwordTestUser1')
            })

            //Checking Error message - Please enter username
            cy.get(registerLoginPage.messageError).contains('Please enter username.').should('be.visible')
        })

        it('Error message - No account found with that username', () => {
            //Login
            cy.loginUI({
                username: Cypress.env('loginTestUser1'),
                password: Cypress.env('passwordTestUser1')
            })

            //Checking Error message - No account found with that username
            cy.get(registerLoginPage.messageError).contains('No account found with that username.').should('be.visible')
        })
    })
})