describe('Login de acesso', () => {
  it('Acessar tela de login', () => {
    cy.visit('/')
    cy.get('h3').contains("Login")
  })
})