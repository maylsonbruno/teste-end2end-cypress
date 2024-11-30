import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboard.locationDashboard()
  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.invalidLogin()
    
  })
})