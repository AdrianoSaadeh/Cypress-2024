describe('Date Picker', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('should be able to add dob', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Janeiro')

        cy.get('input[aria-label="Year"]')
            .type('1986')

        cy.get('span[aria-label="Janeiro 9, 1986"]')
            .click()
    })
})