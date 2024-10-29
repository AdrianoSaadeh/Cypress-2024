describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
    })

    it('should fill the textearea', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type('Welcome to the Cypress Skills')
    })

})

