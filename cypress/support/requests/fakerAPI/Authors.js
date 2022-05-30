/// <reference types="cypress" />

class Authors {
	getAuthors() {
		return cy.request({
			method: 'GET',
			url: `${Cypress.env('FakeRESTApi')}/Authors`,
			failOnStatusCode: false
		})
	}

	postAuthors(payload) {
		return cy.request({
			method: 'POST',
			url: `${Cypress.env('FakeRESTApi')}/Authors`,
			failOnStatusCode: false,
			body: payload
		})
	}

	getAuthorsIdBook(idBook) {
		return cy.request({
			method: 'GET',
			url: `${Cypress.env('FakeRESTApi')}/Authors/authors/books/${idBook}`,
			failOnStatusCode: false
		})
	}

	getAuthorsId(id) {
		return cy.request({
			method: 'GET',
			url: `${Cypress.env('FakeRESTApi')}/Authors/${id}`,
			failOnStatusCode: false
		})
	}

	putAuthorsId(payload, id) {
		return cy.request({
			method: 'PUT',
			url: `${Cypress.env('FakeRESTApi')}/Authors/${id}`,
			failOnStatusCode: false,
			body: payload
		})
	}

	deleteAuthorsId(id) {
		return cy.request({
			method: 'DELETE',
			url: `${Cypress.env('FakeRESTApi')}/Authors/${id}`,
			failOnStatusCode: false
		})
	}
}

export default new Authors