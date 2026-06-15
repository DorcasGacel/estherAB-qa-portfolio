describe("Checkout Automation", () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
    })
    
    it('TC-CHK-001: Checkout con Login', () => {
        //login
        cy.get('a[href="/login"]').click() //click on the login button
        cy.contains('Login to your account').should('be.visible') //verify that the login form is visible
        cy.get('[data-qa="login-email"]').type('lili123@gmail.com') //enter email
        cy.get('[data-qa="login-password"]').type('123321lili') //enter password
        cy.get('[data-qa="login-button"]').click() //click on the login button
        cy.contains('Logged in as').should('be.visible') //verify that the user is logged in

        //agregar producto al carrito
        cy.get('a[data-product-id="1"]').first().click() //click on the first product
        cy.contains('View Cart').click() //click on the view cart button
        cy.url().should('include', '/view_cart') //verify that the URL includes '/view_cart'

        //checkout
        cy.contains('Proceed To Checkout').click() //click on the proceed to checkout button
        cy.url().should('include', '/checkout') //verify that the URL includes '/checkout'

        //validamos
        cy.contains('Address Details').should('be.visible') //verify that the address details are visible
        cy.contains('Your delivery address').should('be.visible') //verify that the delivery address is visible
        cy.contains('Review Your Order').should('be.visible') //verify that the review your order section is visible
        cy.contains('Total Amount').should('be.visible') //verify that the total amount is visible

    })
    it('TC-CHK-002: Checkout sin Login', () => {

        cy.get('a[href="/products"]').click() //click on the products button
        cy.url().should('include', '/products') //verify that the URL includes '/products'

        cy.get('a[data-product-id="1"]').first().click() //click on the first product

        cy.contains('View Cart').click() //click on the view cart button
        cy.url().should('include', '/view_cart') //verify that the URL includes '/view_cart'

        cy.contains('Proceed To Checkout').click() //click on the proceed to checkout button
        
    })
})