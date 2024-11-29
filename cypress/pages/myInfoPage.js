class Myinfopage {

    selectorList(){

        const selectors = {

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
        return selectors
    }
     
    fillFieldMyInfo() {

        cy.get(this.selectorList().userFirtsName).clear().type("NAVAL")
        cy.get(this.selectorList().userLastName).clear().type("LAST")
        cy.get(this.selectorList().userEmployerId).eq(3).clear().type('Employer')
        cy.get(this.selectorList().userOtherId).eq(4).clear().type('Other')
        cy.get(this.selectorList().userDriveLicense).eq(5).clear().type('Drive')
        cy.get(this.selectorList().userDateLicenseExpire).eq(0).clear().type('2025-01-12')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().userDateOfBirth).eq(1).clear().type('2025-01-12')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().userNationality).eq(0).click()
        cy.get(this.selectorList().selectMultipleNacionality).click()
        cy.get(this.selectorList().userMaritalState).eq(1).click()
        cy.get(this.selectorList().selectMaritalState).click()
        cy.get(this.selectorList().userGender).eq(1).click()
        
        cy.get(this.selectorList().submitButton).eq(0).click({force:true})
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default Myinfopage