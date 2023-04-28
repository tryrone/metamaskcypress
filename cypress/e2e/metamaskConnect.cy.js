/* eslint-disable no-undef */
// import { cy } from "cypress";

describe("MetaMaskConnect component", () => {
  it("connects to MetaMask and displays the user address", () => {
    cy.visit("/");

    cy.get("button").contains("Connect MetaMask").click();

    cy.wait(5000).then(() => {
      // do something after waiting
    }); // Wait for MetaMask to connect

    cy.get("p")
      .contains(/^Connected address: /)
      .should("exist");
  });
});
