describe('Teste de Pesquisa de Produtos', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it("TC01 - Pesquisar produto existente", () => {
    const product = "Blue Top";

    cy.get('[href="/products"]').click();
    cy.get(".title").should('contain', 'All Products');
    cy.get("#search_product").type(product);
    cy.get("#submit_search").click();
    cy.get(".productinfo p").should('contain', product);
  })


  it("TC02 - Pesquisar por produto não existente", () => {
    const product = "Carro";

    cy.get('[href="/products"]').click();
    cy.get(".title").should('contain', 'All Products');
    cy.get("#search_product").type(product);
    cy.get("#submit_search").click();
    cy.get(".productinfo").should('not.exist');
  })
})
