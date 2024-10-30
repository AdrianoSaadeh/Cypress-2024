describe('Tables', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/tables', 'Tables')
    })

    it('should validate the github option', () => {
        cy.contains('table tbody tr', '1004')
            .should('be.visible')
            .and('contain', 'Github')
            .and('contain', 'papitodev')
            .and('contain', 'Ativo')
    })

    it('should remove a social media', () => {

        const name = 'Facebook'

        cy.contains('table tbody tr', '1002')
            .find('.remove-item')
            .click()

        cy.contains('button', 'Excluir')
            .click()

        cy.get('table tbody')
            .should('not.contain', name)
    })

    it('should keep a social media when it canceled', () => {

        const name = 'Youtube'

        cy.contains('table tbody tr', '1005')
            .find('.remove-item')
            .click()

        cy.contains('button', 'Cancelar')
            .click()

        cy.get('table tbody')
            .should('contain', name)
    })
})