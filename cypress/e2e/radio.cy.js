describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/radio', 'Radio Buttons')
    })

    it('should selects radio button for Cypress option', () => {

        cy.contains('label', 'Cypress')
            .click()

    })

    it('should selects radio button for Selenium option', () => {

        cy.get('#selenium')
            .parent()
            .click()

    })

})