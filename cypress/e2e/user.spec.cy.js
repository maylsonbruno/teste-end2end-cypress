import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import Myinfopage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuInfo = new MenuPage()
const myInfo = new Myinfopage()


describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {

       loginPage.acessLoginPage()
       loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
       dashboard.locationDashboard()
       menuInfo.accessMenuInfo()
        myInfo.fillFieldMyInfo()
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})