describe('Clicar nos botoões One two e Four.', () => {
    it('acesso site Teste',() => {
        cy.visit('/')
    })
    it('Clicar nos botoes e validar', () => {
        cy.get('#btn_one').click()
        cy.get('#panel_body_one').should('not.have.text', 'One')
        cy.get('#btn_two').click()
        cy.get('#panel_body_one').should('not.have.text', 'Two')
        cy.get('#btn_link').click()
        cy.get('#panel_body_one').should('not.have.text', 'Four')
        
    })
    it('Preencher campos', () => {
        cy.visit('/')
        cy.get('#first_name').type('Alexandre')
        cy.get('#btn_one').click()
        cy.get('#opt_three')
            .should('not.be.checked')
        cy.get('#opt_two').click()
        cy.get('[alt="selenium"]').should('exist')
    })
    

})