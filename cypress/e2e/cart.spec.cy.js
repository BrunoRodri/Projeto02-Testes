describe('Teste de Adição de Itens ao Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it("TC01 - Adicionar Itens ao Carrinho pela Tela de Detalhe de Produto", () => {

    cy.get('[href="/product_details/1"]').click();
    cy.get("h2").should('contain', 'Blue Top');
    cy.get("#quantity").clear().type("2");
    cy.get('button[type="button"]').click();
    cy.get('.modal [href="/view_cart"]').click();
    cy.get(".cart_description").should('contain', "Blue Top");
    cy.get(".disabled").should('contain', "2");
  })


  it("TC02 - Agregar itens adicionados ao carrinho iguais", () => {
    
    cy.get('[href="/product_details/1"]').click();
    cy.get("h2").should('contain', 'Blue Top');
    cy.get('button[type="button"]').click();
    cy.get('.close-modal').click();
    cy.get('button[type="button"]').click();
    cy.get('.modal [href="/view_cart"]').click();
    cy.get(".cart_description").should('contain', "Blue Top");
    cy.get(".disabled").should('contain', "2");
  })
})
