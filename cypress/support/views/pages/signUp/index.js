

class SignUp {

	go() {
		cy.visit('/')
		cy.get('#nav-link-accountList')
			.click()
		cy.get('#createAccountSubmit')
			.click()
		cy.contains('div h1', 'Criar conta')
			.should('be.visible')
	}

	form(customer) {
		cy.get('#ap_customer_name')
			.type(customer.nome)
		cy.get('#ap_email')
			.type(customer.email)
		cy.get('#ap_password')
			.type(customer.senha)
		cy.get('#ap_password_check')
			.type(customer.senha)
	}

	submit() {
		cy.get('#continue')
			.click()
	}
}

export default new SignUp