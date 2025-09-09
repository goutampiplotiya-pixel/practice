import { faker } from '@faker-js/faker';
describe('orangehrm Login Automation', () => {
  
  it('should login with valid credentials', () => {
  let firstName = faker.person.firstName();
  let contact = faker.phone.number('##########');
  let email = faker.internet.email();
  let company = faker.company.name();
  let country = faker.location.country();
   
    cy.visit('http://orangehrm.com/en/book-a-free-demo')
  
    cy.get('#CybotCookiebotDialogBodyButtonDecline').click()
    
    cy.get('#Form_getForm_FullName').type(firstName)
    cy.get('#Form_getForm_Contact').type(contact)
    cy.get('#Form_getForm_Email_Holder').type(email)
    cy.get('#Form_getForm_CompanyName_Holder').type(company)
      cy.get('select#Form_getForm_Country')
      .find('option')
      .then(($options) => {
        // Filter out the "Country" placeholder
        const availableOptions = $options.filter((index, el) => Cypress.$(el).val() !== '');
        const randomOption = Cypress._.sample(availableOptions);
        const randomValue = Cypress.$(randomOption).val();
        cy.get('#Form_getForm_Country').select(randomValue);
      });
   
   cy.get('select#Form_getForm_NoOfEmployees')
  .find('option')
  .then(($options) => {
   
    const availableOptions = $options.slice(1);
    const randomOption = Cypress._.sample(availableOptions);
    const randomValue = Cypress.$(randomOption).val();
    cy.get('#Form_getForm_NoOfEmployees').select(randomValue);
  });

    //cy.get('button[name="login"]').click()
    // cy.get('button[name=""]').click() 
    cy.get('#Form_getForm_action_submitForm').click();  
})
  
})