describe('Teste de Finalização de Compras', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it("TC01 - Finalizar Compra estando logado", () => {
    const firstName = "Bruno";
    const lastName = "Rodrigues";
    const fullName = `${firstName} ${lastName}`;
    const email = "fidbruno@gmail.com";
    const password = "password";
    const address = "Rua Silvino Chaves";
    const textFull = "teste teste teste teste teste teste teste" + " teste teste teste teste teste teste"

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
    cy.get('.product-overlay [data-product-id="1"]').click({force:true});
    cy.get('.modal [href="/view_cart"]').click();
    cy.get(".cart_description").should('contain', "Blue Top");
    cy.get('.check_out').click();
    cy.get(".form-control").type(textFull, {delay: 0});
    cy.get('[href="/payment"]').click();
    cy.get('.heading').should('contain', "Payment");
    cy.get('[name="name_on_card"]').type(fullName);
    cy.get('[name="card_number"]').type("4111111111111111");
    cy.get('[name="cvc"]').type("123");
    cy.get('[name="expiry_month"]').type("12");
    cy.get('[name="expiry_year"]').type("2025");
    cy.get('#submit').click()
    cy.get('[data-qa="order-placed"]').should('have.text',"Order Placed!");
    cy.get('[data-qa="continue-button"]').click();
  })


  it("TC02 - Finalizar Compra sem estar logado", () => {
    const fullName = "Bruno Rodrigues";
    const email = "fidbruno@gmail.com";
    const password = "password";
    const textFull = "teste teste teste teste teste teste teste" + " teste teste teste teste teste teste"

    cy.get('.product-overlay [data-product-id="1"]').click({force:true});
    cy.get('.modal [href="/view_cart"]').click();
    cy.get(".cart_description").should('contain', "Blue Top");
    cy.get(".disabled").should('contain', "1");
    cy.get('.check_out').click();
    cy.get('.modal-body [href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
    cy.get('.nav [href="/view_cart"]').click();
    cy.get(".cart_description").should('contain', "Blue Top");
    cy.get('.check_out').click();
    cy.get(".form-control").type(textFull, {delay: 0});
    cy.get('[href="/payment"]').click();
    cy.get('.heading').should('contain', "Payment");
    cy.get('[name="name_on_card"]').type(fullName);
    cy.get('[name="card_number"]').type("4111111111111111");
    cy.get('[name="cvc"]').type("123");
    cy.get('[name="expiry_month"]').type("12");
    cy.get('[name="expiry_year"]').type("2025");
    cy.get('#submit').click()
    cy.get('[data-qa="order-placed"]').should('have.text',"Order Placed!");
    cy.get('[data-qa="continue-button"]').click();
  })
})
