class ModifyOrderPage {
  constructor() {}

  visit() {
    cy.visit("/FindOrder");
  }

  enterAccessionNo(accessionNo) {
    cy.enterText("#labNumber", accessionNo);
  }

  clickSubmitButton() {
    return cy
      .getElement(
        "div[class='cds--lg:col-span-2 cds--css-grid-column'] button[type='submit']",
      )
      .should("be.visible")
      .click();
  }

  clickFinalSubmitButton() {
    return cy.get("[data-cy='submit-button']").should("be.visible").click({force: true});
  }

  clickNextButton() {
     return cy.get(".forwardButton").should("be.visible").click();
     
  }


  checkProgramButton() {
    return cy.get("#additionalQuestionsSelect").should("be.disabled");
  }

  assignValues() {
    // Wait for table to be visible first
    cy.get('table').should('be.visible');
    // Then find the checkbox within table cells
    cy.get('table input[type="checkbox"][name="add"]').first().click({force: true});
  }

  clickPrintBarcodeButton() {
    return cy.get("[data-cy='printBarCode']").click();

  }
  clickSearchPatientButton() {
    return cy.get("[data-cy='searchPatientButton']").click({ force: true });
  }

  clickRespectivePatient() {
    return cy
      .get("tbody tr")
      .first()
      .find(".cds--radio-button__appearance")
      .click();
  }
}

export default ModifyOrderPage;
