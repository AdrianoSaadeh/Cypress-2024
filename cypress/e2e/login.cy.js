describe('login spec', () => {

  beforeEach(() => {
    cy.goHome()
  })

  it('should log in successfully', () => {

    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('do not should log in when password is invalid', () => {

    cy.login('papito@cyskills.com.br', 'abc123456')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('do not should log in email is not registered', () => {

    cy.login('404@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('do not should log in email incorrect', () => {

    cy.login('www.cyskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')

  })

  it('do not should login when email is not informed', () => {

    cy.login('', 'showtime')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')

  })

  it('do not should login when email is not informed', () => {

    cy.login('papito@cyskills.com.br', '')
    cy.noticeHave('Por favor, digite sua senha para continuar.')

  })

  it('do not should login when email and password are not informed', () => {

    cy.login('', '')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')

  })

})

