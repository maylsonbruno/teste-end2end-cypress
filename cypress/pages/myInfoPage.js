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

    fillFullName(firstName,lastName) {

        cy.get(this.selectorList().userFirtsName).clear().type(firstName)
        cy.get(this.selectorList().userLastName).clear().type(lastName)
    }

    fillEmployeer(employeeId,otherId,driveLicense,dataExpire,dataOfBirth){

        cy.get(this.selectorList().userEmployerId).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().userOtherId).eq(4).clear().type(otherId)
        cy.get(this.selectorList().userDriveLicense).eq(5).clear().type(driveLicense)
        cy.get(this.selectorList().userDateLicenseExpire).eq(0).clear().type(dataExpire)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().userDateOfBirth).eq(1).clear().type(dataOfBirth)
        cy.get(this.selectorList().dateCloseButton).click()
    }
    

    fillStatus(){
        cy.get(this.selectorList().userGender).eq(1).click()
        cy.get(this.selectorList().userNationality).eq(0).click()
        cy.get(this.selectorList().selectMultipleNacionality).click()
        cy.get(this.selectorList().userMaritalState).eq(1).click()
        cy.get(this.selectorList().selectMaritalState).click()
        
    }

    saveInfo() {
       
        cy.get(this.selectorList().submitButton).eq(0).click({force:true})
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default Myinfopage