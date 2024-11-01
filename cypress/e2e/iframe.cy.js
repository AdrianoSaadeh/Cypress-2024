describe('Iframe', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('should be able to deal with Iframe', () => {
        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')

                cy.wrap($body)
                    .find('#fullname')
                    .type('Adriano Gruma')
            })
    })
})