describe('Facebook Login Automation', () => {
  it('should log in to Facebook with valid credentials', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('#email').type('your_email@example.com')
    cy.get('#pass').type('your_password')
    cy.get('button[name="login"]').click()
    cy.url().should('include', '/home.php')
    cy.get('div[role="banner"]').should('be.visible')
  })  


  it('should handle invalid login credentials', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('#email').type('@gmail.com')
    cy.get('#pass').type('wrong_password')
    cy.get('button[name="login"]').click()
    cy.get('div._9ay7').should('be.visible')
      .and('contain', 'The email or mobile number you entered isn’t connected to an account')
  })
})