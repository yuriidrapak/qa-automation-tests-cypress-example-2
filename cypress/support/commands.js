import * as registerLoginPage from '../page-objects/registerlogin-page.pages';

//Login command using UI
Cypress.Commands.add('loginUI', (user) => {
    //Visit QA Portal Login
    cy.visit(Cypress.env('urlBase') + Cypress.env('pageQaPortalLogin'))

    //Checking heading
    cy.get(registerLoginPage.pageHeading).contains('QA Portal Login').should('be.visible')

    //Input Username
    cy.get(registerLoginPage.fieldUsername)
        .then(e => {
            if (user.username !== '')
                cy.get(registerLoginPage.fieldUsername)
                .type(user.username)
                .should("have.value", user.username)
        })

    //Input Password
    cy.get(registerLoginPage.fieldPassword)
        .then(e => {
            if (user.password !== '')
                cy.get(registerLoginPage.fieldPassword)
                .type(user.password)
                .should("have.value", user.password)
        })

    //Click to Login Button
    cy.get(registerLoginPage.loginButton).contains('Login').click()
})