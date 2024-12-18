/// <reference types="cypress"/>

describe('Teste de Back', () => {
  
  it("TC01 - Verificar Login sem email com Metodo POST", () => {

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      body: {
        password: 'password'
      }}).should(function(response){
        expect(response.body.responseCode).to.eq(400);
        expect(response.body.message).to.eq("Bad request, email or password parameter is missing in POST request.");
      });
  })

  it("TC02 - Get para Listar Produtos", () => {

    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/productsList',
      }).should(function(response){
        expect(response.body).to.have.length.above(1);
        expect(response.status).to.eq(200);
      });
  })

})
