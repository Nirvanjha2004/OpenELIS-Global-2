class BatchOrderEntry {
  visitSetupPage() {
    cy.get("h2").should("contain.text", "Batch Order Entry Setup");
  }

  checkNextButtonDisabled() {
    cy.get(":nth-child(12) > .cds--btn").should("be.disabled");
  }

  selectForm(formTypeRoutine) {
    cy.get("#form-dropdown").select(formTypeRoutine);
  }

  selectSampleType(serumSample) {
    cy.get("#selectSampleType").should("be.visible").select(serumSample);
  }

  checkBilanPanel() {
    cy.contains("span", "Bilan Biochimique").click();
  }

  checkSerologiePanel() {
    cy.contains("span", "Serologie VIH").click();
  }

  checkDenguePCR() {
    cy.contains("span", "DENGUE PCR").click();
  }

  checkHIVViralLoad() {
    cy.contains("span", "HIV VIRAL LOAD").click();
  }

  checkCreatinine() {
    cy.contains("span", "Creatinine").click();
  }

  checkNextLabel() {
    return cy.get(":nth-child(8) > .cds--btn");
  }

  //clickSavePatientButton() {
  //cy.contains('button', 'Save').click();
  // }

  clickGenerateButton() {
    cy.get(":nth-child(2) > .cds--link").click();
  }

  selectMethod(method) {
    cy.get("#method-dropdown").select(method);
  }

  checkFacilityCheckbox() {
    cy.get("#facility-checkbox").check({ force: true });
  }

  checkPatientCheckbox() {
    cy.get("#patient-checkbox").check({ force: true });
  }

  enterSiteName(siteName) {
    cy.get("#siteName").type(siteName);
    cy.get(".suggestion-active").should("be.visible").click();
  }

  typeLabNumber(labNumber) {
    cy.get("#display_labNo").type(labNumber);
  }

  uniqueHealthIDNum(healthID) {
    cy.get("#subjectNumber").type(healthID);
  }

  nationalID(nationalID) {
    cy.get("#nationalId").type(nationalID);
  }

  firstName(firstName) {
    cy.get("#firstName").type(firstName);
  }

  lastName(lastName) {
    cy.get("#lastName").type(lastName);
  }

  typePatientYears(years) {
    cy.get("#years").type(years);
  }

  typePatientMonths(months) {
    cy.get("#months").type(months);
  }

  typePatientDays(days) {
    cy.get("#days").type(days);
  }

  selectGender() {
    cy.contains("span", "Female").click();
  }
  checkNextButtonEnabled() {
    cy.contains("button", "Next").click();
  }

  selectDNAPCRTest() {
    cy.get("#eid_dnaPCR").check({ force: true });
  }

  selectTubeSample() {
    cy.contains("span", "Dry Tube").click();
  }

  selectBloodSample() {
    cy.contains("span", "Dry Blood Spot").click();
  }

  clickNewPatientButton() {
    cy.contains("button", "New Patient").click();
  }

  clickSearchPatientButton() {
    cy.contains("button", "Search for Patient").click();
  }

  localSearchButton() {
    cy.get("#local_search").click();
  }

  checkPatientRadio() {
    cy.get("#2").check({ force: true });
  }

  visitBatchOrderEntryPage() {
    cy.get("h2").should("contain.text", "Batch Order Entry");
  }

  clickGenerateAndSaveBarcode() {
    cy.get(".cds--link > p").click();
  }

  saveOrder() {
    cy.get(":nth-child(6) > .cds--btn").click();
  }

  clickFinishButton() {
    cy.contains("button", "Finish").click();
  }
}

export default BatchOrderEntry;
