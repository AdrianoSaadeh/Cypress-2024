describe('Input Fields', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('should fill in the text field', () => {
        cy.visit('https://playground.cyskills.com.br')
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.get('nav a[href="/input-fields"]')
            .click()

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('#fullname').type('Adriano Saadeh')
        // ou pela propriedade namme abaixo
        cy.get('input[name="fullname"]')
            .clear()
            .type('Adriano Legal')
        // ou pelo placeholder
        cy.get('input[placeholder="John Doe"]')
            .clear()
            .type('Adriano Master')
    })
})