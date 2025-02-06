import LoginPage from "../pages/LoginPage";

let homePage = null;
let loginPage = null;
let dashboard = null;

before("login", () => {
  loginPage = new LoginPage();
  loginPage.visit();
});

describe("Pathology Dashboard", function () {
  it("User  Visits Pathology Dashboard", function () {
    homePage = loginPage.goToHomePage();
    dashboard = homePage.goToPathologyDashboard();
  });

  it("User adds a new Pathology order", function () {
    homePage.goToOrderPage();
    dashboard.searchPatientByFName();
    dashboard.searchPatient();
    cy.wait(200);
    dashboard.checkPatientRadio();
    dashboard.clickNext();
    cy.wait(200);
    dashboard.selectHistopathology();
    //dashboard.selectSpecimen();
    //dashboard.specimenType();
    //dashboard.procedurePerformed();
    dashboard.clickNext();
    cy.wait(200);
    dashboard.selectPathologySample();
    dashboard.checkPathologyPanel();
    dashboard.clickNext();
    cy.wait(200);
    dashboard.generateLabNo();
    dashboard.selectSite();
    dashboard.selectRequesting();
    cy.wait(200);
    dashboard.submitButton();
    cy.wait(300);
  });

  it("Validate Success by Printing Barcode", function () {
    dashboard.clickPrintBarCode();
  });

  it("User navigates back to pathology to confirm added order", () => {
    homePage.goToPathologyDashboard();
  });

  it("Change The Status of Order and saves it", function () {
    dashboard.selectFirstOrder();
    cy.wait(200);
    dashboard.selectTechnician();
    dashboard.selectPathologist();
    //dashboard.checkImmunoChem(); making saving impossible
    dashboard.checkReadyForRelease();
    dashboard.saveOrder();
  });

  it("Validate the Status of Order", () => {
    dashboard = homePage.goToPathologyDashboard();

    //selects complete orders
    dashboard.statusFilter();
  });
});

describe("ImmunoChemistry Dashboard", function () {
  it("User  Visits ImmunoChemistry Dashboard", function () {
    homePage = loginPage.goToHomePage();
    dashboard = homePage.goToImmunoChemistryDashboard();
  });

  it("User adds a new ImmunioChemistry order", function () {
    homePage.goToOrderPage();
    dashboard.searchPatientByFName();
    dashboard.searchPatient();
    cy.wait(200);
    dashboard.checkPatientRadio();
    dashboard.clickNext();
    cy.wait(200);
    dashboard.selectImmunoChem();
    //dashboard.selectSpecimen();
    //dashboard.specimenType();
    //dashboard.procedurePerformed();
    dashboard.clickNext();
    cy.wait(200);
    dashboard.selectImmunoChemSample();
    dashboard.checkImmunoChemTest();
    dashboard.generateLabNo();
    dashboard.selectSite();
    dashboard.selectRequesting();
    cy.wait(200);
    dashboard.submitButton();
    cy.wait(300);
  });

  it("Validate Success by Printing Barcode", function () {
    dashboard.clickPrintBarCode();
  });

  it("User navigates back to ImmunoChem to confirm added order", () => {
    homePage.goToImmunoChemistryDashboard();
  });

  it("Change The Status of Order and saves it", function () {
    dashboard.selectFirstOrder();
    cy.wait(200);
    dashboard.selectTechnician();
    dashboard.selectPathologist();
    dashboard.changeImmunoChemStatus();
    dashboard.addImmunoChemReport();
    dashboard.toggleReportParam();
    dashboard.checkReadyForRelease();
    dashboard.saveOrder();
  });

  it("Validate the Status of Order", () => {
    dashboard = homePage.goToImmunoChemistryDashboard();

    //selects complete orders
    dashboard.statusFilter();
  });
});
