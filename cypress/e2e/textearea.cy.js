describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('should fill the textearea', () => {

        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type('Welcome to the Cypress Skills')
    })

})

