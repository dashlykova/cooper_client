describe('User can log in',() => {
  it('successfully',() => {
    cy.visit('http://localhost:3001');
    cy.get('#login').click();
    cy.get('#login-form').within(()=>{
      cy.get('#email').type('user@gmail.com')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
   
  })

  
})