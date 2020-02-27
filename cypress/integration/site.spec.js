context('Site', () => {
  it('has no detectable a11y violations on load', () => {
    cy.visit('http://localhost:8000')
    cy.injectAxe()
    cy.wait(500)
    cy.checkA11y()
  })
})
