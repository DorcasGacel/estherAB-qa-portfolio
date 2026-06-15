describe("Cart Automation", () => {

    beforeEach(() => {
        cy.visit("https://automationexercise.com/") //open the website
        cy.get('a[href="/products"]').click() //click on the products button
        cy.url().should('include', '/products') //verify that the URL includes '/products'
    })

    it('TC-CART-001: Agregar un producto al carrito', () => {

        cy.get('a[data-product-id="1"]').first().click() //click on the first product

        cy.contains('Your product has been added to cart.').should("be.visible") //verify product add to cart

        cy.contains('View Cart').click() //click on the view cart button
        cy.url().should('include', '/view_cart') //verify that the URL includes '/view_cart'

        cy.get('#product-1').should('be.visible') //verify that the product is visible in the cart
        cy.contains('Blue Top').should('be.visible') //verify that the product name is visible in the cart


    })

    it('TC-CART-002: Eliminar un producto del carrito', () => {

        cy.get('a[data-product-id="1"]').first().click() //click on the first product

        cy.contains('Your product has been added to cart.').should("be.visible") //verify product add to cart

        cy.contains('View Cart').click() //click on the view cart button
        cy.url().should('include', '/view_cart') //verify that the URL includes '/view_cart'

        // Eliminar producto
        cy.get('.cart_quantity_delete').click() //click on the delete button

        cy.contains('Cart is empty! Click here to buy products.').should('be.visible') //verify that the cart is empty
    })
})