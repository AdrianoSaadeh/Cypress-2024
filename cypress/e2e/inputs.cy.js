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

        cy.get('input[type="email"]').type('adrianolegal@gmail.com')
        // ou pelo name 
        cy.get('input[name="email"]')
            .clear()
            .type('superdrico@gmail.com')

        cy.get('input[type="number"]').type('12345')
        // ou pelo name 
        cy.get('input[name="number"]')
            .clear()
            .type('66666')

        cy.get('input[type="date"]').type('2024-12-01')
    })
})