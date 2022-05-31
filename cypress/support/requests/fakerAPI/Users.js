/// <reference types="cypress" />

class Users {
	getUsers() {
		return cy.request({
			method: "GET",
			url: `${Cypress.env("FakeRESTApi")}/Users`,
			failOnStatusCode: false
		})
	}

	postUsers(payload) {
		return cy.request({
			method: "POST",
			url: `${Cypress.env("FakeRESTApi")}/Users`,
			failOnStatusCode: false,
			body: payload
		})
	}

	getUsersId(id) {
		return cy.request({
			method: "GET",
			url: `${Cypress.env("FakeRESTApi")}/Users/${id}`,
			failOnStatusCode: false
		})
	}

	putUsers(id, payload) {
		return cy.request({
			method: "PUT",
			url: `${Cypress.env("FakeRESTApi")}/Users/${id}`,
			failOnStatusCode: false,
			body: payload
		})
	}

	deleteUsers(id) {
		return cy.request({
			method: "DELETE",
			url: `${Cypress.env("FakeRESTApi")}/Users/${id}`,
			failOnStatusCode: false
		})
	}
}

export default new Users