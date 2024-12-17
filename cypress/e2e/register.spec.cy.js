describe('Teste de Registro de Usuario', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it("TC01 - Registrar Usuario com sucesso", () => {
    const firstName = "Bruno";
    const lastName = "Rodrigues";
    const email = "fidbruno@hotmail.com";
    const password = "password";
    const address = "Rua Silvino Chaves";

    cy.get('[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(firstName);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get(".title b").should('contain', 'Enter Account Information');
    cy.get('[value="Mr"]').check();
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select("19");
    cy.get('[data-qa="months"]').select("11");
    cy.get('[data-qa="years"]').select("1996");
    cy.get('#first_name').type(firstName);
    cy.get('#last_name').type(lastName);
    cy.get('#address1').type(address);
    cy.get('#country').select("Canada");
    cy.get('#state').type("Ontario");
    cy.get('#city').type("Toronto");
    cy.get('#zipcode').type("58038420");
    cy.get('#mobile_number').type("83999901337");
    cy.get('button[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should('have.text',"Account Created!");
    cy.get('[data-qa="continue-button"]').click();
  })


  it("TC02 - Registrar com Email ja existente", () => {
    const firstName = "Bruno";
    const email = "example@email.com";

    cy.get('[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(firstName);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':first-child p').should('contain', "Email Address already exist!");
    
  })
})
