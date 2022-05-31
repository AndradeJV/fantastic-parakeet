/// <reference types="cypress" />

class BookStore {
	getBooks() {
		return cy.request({
			method: 'GET',
			url: `${Cypress.env("BookStoreAPI")}/Books`,
			failOnStatusCode: false
		})
	}

	postBookStore(payload) {
		return cy.request({
			method: 'POST',
			url: `${Cypress.env("BookStoreAPI")}/Books`,
			failOnStatusCode: false,
			body: payload
		})
	}

	deleteBookStore(userId) {
		return cy.request({
			method: 'DELETE',
			url: `${Cypress.env("BookStoreAPI")}/Books/?UserId=${userId}`,
			failOnStatusCode: false
		})
	}

	getBook(isbn) {
		return cy.request({
			method: 'GET',
			url: `${Cypress.env("BookStoreAPI")}/Books/?ISBN=${isbn}`,
			failOnStatusCode: false
		})
	}

	deleteBookStore(payload) {
		return cy.request({
			method: 'DELETE',
			url: `${Cypress.env("BookStoreAPI")}/Book`,
			failOnStatusCode: false,
			body: payload
		})
	}

	putBookStore(isbn, payload) {
		return cy.request({
			method: 'PUT',
			url: `${Cypress.env("BookStoreAPI")}/Books/${isbn}`,
			failOnStatusCode: false,
			body: payload
		})
	}
}

export default new BookStore