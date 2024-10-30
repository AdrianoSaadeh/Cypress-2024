describe('Tags', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/tags', 'Tags')
    })

    it('should be able to add tags', () => {
        const tags = ['cypress', 'JS', 'Nodejs']
        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{enter}`)
                .should('have.value', '')
            cy.wait(500) // think time
        })
        tags.forEach(t => {
            cy.get('.tag-input')
                .should('contain', t)
        })
    })
})