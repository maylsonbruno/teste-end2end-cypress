import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import Myinfopage from '../pages/myInfoPage.js'


const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuInfo = new MenuPage()
const myInfo = new Myinfopage()


describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {

       loginPage.acessLoginPage()

       loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

       dashboard.locationDashboard()

       menuInfo.accessMenuInfo()

       myInfo.fillFullName(chance.first(),chance.last())

       myInfo.fillEmployeer('testeEmpId','Testeotherid','driveLicense','2025-02-10','2026-05-15')

       myInfo.fillStatus()

       myInfo.saveInfo()
      
  })
})