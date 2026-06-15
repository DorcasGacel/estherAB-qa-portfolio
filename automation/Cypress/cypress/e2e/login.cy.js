describe("Login Automation", () => {

    beforeEach(() => { 
        // evitar repeticiones de código
        cy.visit("https://automationexercise.com/") //open the website
        cy.get('a[href="/login"]').click() //click on the login button
        cy.url().should('include', '/login') //verify that the URL includes '/login'
    });

    it("TC-001: Successful Login", () => {

        cy.get('[data-qa="login-email"]').type("lili123@gmail.com") //enter email

        cy.get('[data-qa="login-password"]').type("123321lili") //enter password

        cy.get('[data-qa="login-button"]').click() //click on the login button

        cy.contains("Logged in as").should("be.visible") //verify that the user is logged in

    });

    it("TC-002: login with incorrect password", () => {
        
        cy.get('[data-qa="login-email"]').type("lili123@gmail.com") //enter email

        cy.get('[data-qa="login-password"]').type("incorrectpassword") //enter password

        cy.get('[data-qa="login-button"]').click() //click on the login button

        cy.contains("Your email or password is incorrect!").should("be.visible") //verify that the error message is displayed
    });

    it("TC-003: successful logout", () => {

        cy.get('[data-qa="login-email"]').type("lili123@gmail.com") //enter email

        cy.get('[data-qa="login-password"]').type("123321lili") //enter password

        cy.get('[data-qa="login-button"]').click() //click on the login button

        cy.contains("Logged in as").should("be.visible")

        cy.get('a[href="/logout"]').click() //click on the logout button

        cy.url().should('include', '/login') //verify that the URL includes '/login'

        cy.contains("Login to your account").should("be.visible") //verify that the user is logged out
    });
});