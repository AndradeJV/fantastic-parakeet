class SignInPage {
    // Escrever email
    writeEmail(email){
        cy.get('input[id="ap_email"]').type(email)
    }

    // Escrever senha
    writePassword(password){
        cy.get('input[id="ap_password"]').type(password)
    }

    // Clicar no botão "Continuar"
    clickButtonContinue(){
        cy.get('input[id="continue"]').click()
    }

    // Clicar no botão "Criar sua conta da Amazon"
    clickButtonCreateYourAccount(){
        cy.get('a[id="createAccountSubmit"]').click()
    }

    // Clicar no botão "Fazer login"
    clickButtonLogin(){
        cy.get('input[id="signInSubmit"]').click()
    }

    // Clicar no botão para alterar email
    clickLinkUpdateEmail(){
        cy.get('a[id="ap_change_login_claim"]').click()
    }

    // Clicar no link "Esqueci a senha"
    clickLinkForgetPassword(){
        cy.get('a[id="auth-fpp-link-bottom"]').click()
    }
}


export default new SignInPage