describe('Checkbox', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/checkbox', 'Checkbox')
    })

    it('should selects checkboxes python, JS and TS options', () => {

        //estrategia para um elemento hidden por conta da estilização
        cy.get('input[value=1]')
            .click({ force: true })

        //pegando pelo pai/div
        cy.get('input[value=5]')
            .parent('')
            .click()

        //pegando pela label
        cy.get('label[for="python"]')
            .click()

        // cy.get('input[type="checkbox" name="javascript"]')
        //     .select()

    })

    it('should selects all options', () => {

        const langs = ['javascript', 'python', 'rust', 'go', 'typescript']
        langs.forEach(lang => {
            cy.get(`label[for=${lang}]`)
                .click()
        })
    })

})