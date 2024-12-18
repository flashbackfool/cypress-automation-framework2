/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I type a first name', () => {
    cy.get('[name="first_name"]')
    .type('Joe')
})

When('I type a last name', () => {
    cy.get('[name="last_name"]')
    .type('Blogs')
})

When('I enter an email', () => {
    cy.get('[name="email"]')
    .type("joe_blogs123@mail.com")
})

When('I type a comment', () => {
    cy.get('textarea[name="message"]')
    .type("Hello World!")
})

When('I click on the submit button', () => {
    cy.get('[type="submit"]')
    .click()
})

Then('I should be presented with a successful contact us submission message', () => {
    cy.get('h1')
    .should('contain.text', 'Thank You for your Message!')
})

//Deleted comments as well bro
