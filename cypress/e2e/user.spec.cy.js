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
    userDateOfBirth : "[placeholder='yyyy-dd-mm']",
    userNationality: '.oxd-select-text-input',
    selectMultipleNacionality : '.oxd-select-dropdown > :nth-child(3)',
    dateCloseButton:'.--close',
    userMaritalState: '.oxd-select-text-input',
    selectMaritalState : ':nth-child(4) > span',
    userGender : '.oxd-radio-wrapper',
    submitButton: ".orangehrm-left-space"
    
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
     cy.get(selectorList.userDateOfBirth).eq(1).clear().type('2025-01-12')
     cy.get(selectorList.dateCloseButton).click()
     cy.get(selectorList.userNationality).eq(0).click()
     cy.get(selectorList.selectMultipleNacionality).click()
     cy.get(selectorList.userMaritalState).eq(1).click()
     cy.get(selectorList.selectMaritalState).click()
     cy.get(selectorList.userGender).eq(1).click()
    
    cy.get(selectorList.submitButton).eq(0).click({force:true})
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close')

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})