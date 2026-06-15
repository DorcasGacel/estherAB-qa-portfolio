describe("Products Automation", () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com/") //open the website
        cy.get('a[href="/products"]').click() //click on the products button
        cy.url().should('include', '/products') //verify that the URL includes '/products'

    })
    
    it('TC-PROD-001: visualizar catálogo de productos', () => {
        //Smoke test
        cy.contains("All Products").should("be.visible") //verify that the text page is visible
    })

    it('TC-PROD-002: ver detalles de un producto', () => {

        cy.get('a[href="/product_details/1"]').click() //click on the first product
        cy.url().should('include', '/product_details/1') //verify that the URL includes '/product_details/1'

        cy.get('.product-information h2')
        cy.contains('Blue Top').should("be.visible") //verify that the product name is visible
        cy.contains('Rs.').should("be.visible") //verify that the price is visible
        cy.contains('Availability').should("be.visible") //verify that the availability is visible
    })

})