/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I type a first name', () => {
    cy.get('[name="first_name"]')
    .type('Joe')
})

When('I type a last name', () => {

})

When('I enter an email', () => {

})

When('I type a comment', () => {

})

When('I click on the submit button', () => {

})

Then('I should be presented with a successful contact us submission message', () => {

})

// To be filled
//2nd comment to be pulled
