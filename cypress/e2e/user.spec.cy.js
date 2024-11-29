import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

   const selectorList = {
    usernameField:"[name='username']",
    passwordField: "[name='password']",
    loginButton : "[type='submit']",
    sectionTitleTopBar : ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid : ".orangehrm-dashboard-grid",
    wrongCredentialAlert : "[role='alert']",
    myInfoButton : '[href="/web/index.php/pim/viewMyDetails"]',
    userFirtsName : "[name='firstName']",
    userLastName : "[name='lastName']",
    userEmployerId: ".oxd-input--active",
    userOtherId : ".oxd-input--active",
    userDriveLicense : ".oxd-input--active",
    userDateLicenseExpire: "[placeholder='yyyy-dd-mm']",
    userNationality: "[tabindex='0']",
    dateCloseButton:'.--close'
    
   }

  

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.userFirtsName).clear().type("NAVAL")
    cy.get(selectorList.userLastName).clear().type("LAST")
    cy.get(selectorList.userEmployerId).eq(3).clear().type('Employer')
    cy.get(selectorList.userOtherId).eq(4).clear().type('Other')
    cy.get(selectorList.userDriveLicense).eq(5).clear().type('Drive')
     cy.get(selectorList.userDateLicenseExpire).eq(0).clear().type('2025-01-12')
     cy.get(selectorList.dateCloseButton).click()
     cy.get(selectorList.userNationality).eq(0).type(':nth-child(3) > span')
     

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})