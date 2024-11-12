describe('Drag and Drop', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tasks', 'Task Board')
    })

    it('should be able to move a task on the board', () => {
        const task = 'Definir requisitos do projeto'

        const dataTransfer = new DataTransfer()

        //usando localizador especifico
        cy.get('[data-cy="1002"]')
            .trigger('dragstart', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {
                dataTransfer
            })
    })

    it('should be able to move a task on the board', () => {
        const task = 'Definir requisitos do projeto'

        const dataTransfer = new DataTransfer()

        //estrategia sem id definido
        cy.contains('div[draggable=true]', task)
            .trigger('dragstart', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .contains('div[draggable=true]', task)
            .should('be.visible')
    })

})