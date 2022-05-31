/// <reference types="cypress" />

class Accounts {
	postAccountsAuthorized(payload) {
		return cy.request({
			method: 'POST',
			url: `${Cypress.env("BookStoreAPI")}/Authorized`,
			failOnStatusCode: false,
			body: payload
		})
	}

	postAccountsToken(payload) {
		return cy.request({
			method: 'POST',
			url: `${Cypress.env("BookStoreAPI")}/GenerateToken`,
			failOnStatusCode: false,
			body: payload
		})
	}

	postAccountsUser(payload) {
		return cy.request({
			method: 'POST',
			url: `${Cypress.env("BookStoreAPI")}/User`,
			failOnStatusCode: false,
			body: payload
		})
	}

	deleteAccounts(userId) {
		return cy.request({
			method: 'DELETE',
			url: `${Cypress.env("BookStoreAPI")}/User/${userId}`,
			failOnStatusCode: false
		})
	}

	getAccounts(userId) {
		return cy.request({
			method: 'GET',
			url: `${Cypress.env("BookStoreAPI")}/User/${userId}`,
			failOnStatusCode: false
		})
	}
}

export default new Accounts