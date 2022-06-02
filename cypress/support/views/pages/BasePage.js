class BasePage {
    // Ir para home page
    goToHome(){
        cy.get('a[id="nav-logo-sprites"]').click()
    }

    // Pesquisar produto
    searchProduct(product){
        cy.get('input[id="twotabsearchtextbox"]').type(product).type('Cypress.io{enter}')
    }

    // Ir para o carrinho
    goToCart(){
        cy.get('a[id="nav-cart"]').click()
    }

    // Ir para devoluções pedidos
    goToReturnAndOrders(){
        cy.get('a[id="nav-orders"]').click()
    }
}


export default new BasePage