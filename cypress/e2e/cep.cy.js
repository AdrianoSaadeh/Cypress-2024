describe('CEP', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('should be able to add a new address via Correios API', () => {

        cy.get('input[name="cep"]')
            .type('92010300')
        cy.contains('button', 'Cadastrar')
            .click()

        cy.get('input[name="logradouro"]', { timeout: 7000 })
            .should('have.value', 'Rua Quinze de Janeiro')
        cy.get('input[name="cidade"]', { timeout: 7000 })
            .should('have.value', 'Canoas')
        cy.get('input[name="estado"]', { timeout: 7000 })
            .should('have.value', 'RS')
    })

    it('should be able to add a new address via Correios API using Intercpet', () => {

        const address = {
            cep: '92999999',
            logradouro: 'Rua Santo Antonio',
            localidade: 'São Leopoldo',
            uf: 'RS'
        }

        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address
        }).as('getCEP')

        cy.get('input[name="cep"]')
            .type(address.cep)
        cy.contains('button', 'Cadastrar')
            .click()

        cy.wait('@getCEP')

        cy.get('input[name="logradouro"]', { timeout: 7000 })
            .should('have.value', address.logradouro)
        cy.get('input[name="cidade"]', { timeout: 7000 })
            .should('have.value', address.localidade)
        cy.get('input[name="estado"]', { timeout: 7000 })
            .should('have.value', address.uf)
    })
})