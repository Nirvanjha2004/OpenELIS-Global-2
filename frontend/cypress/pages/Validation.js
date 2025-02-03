class Validation {
  checkForHeading() {
    cy.get("section > h3").should("contain.text", "Validation");
  }

  selectTestUnit(unitType) {
    cy.get("#unitType").select(unitType);
  }

  validateTestUnit(unitType) {
    cy.get("[data-testid='sampleInfo']").should("contain.text", unitType);
  }

  enterLabNumberAndSearch(labNo) {
    cy.get("#accessionNumber").type(labNo);
    cy.get("[data-testid='Search-btn']").click();
    cy.get("[data-testid='LabNo']").should("contain.text", labNo);
  }

  saveResults(note) {
    cy.get("#cell-save-0 > .cds--form-item > .cds--checkbox-label").click();
    cy.get("#resultList0\\.note").type(note);
    cy.get("[data-testis='Save-btn']").click();
  }
}

export default Validation;

