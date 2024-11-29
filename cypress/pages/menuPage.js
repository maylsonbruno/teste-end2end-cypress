class MenuPage {
    
    select() {
      const selector = {
          myInfoButton : '[href="/web/index.php/pim/viewMyDetails"]'
      }
      return selector
    }
  

  accessMenuInfo(){
    cy.get(this.select().myInfoButton).click()
  }
 
}
export default MenuPage