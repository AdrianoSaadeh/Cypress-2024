describe('Select', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/select', 'Select')
    })

    it('should use select component', () => {

        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Playwright')

    })

    it('should use select component for multiple choices (JS and TS)', () => {

        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        cy.contains('.option-item', new RegExp("^" + "Java" + "$"))
            .click()

        cy.contains('.option-item', 'TypeScript')
            .click()

        cy.get('.language-item')
            .should('have.length', 2)

    })

})