/* eslint-disable no-undef */

// describe("App", () => {
//   it("should connect to Metamask and display the address", () => {
//     cy.visit("/");

//     // Click the "connect" button
//     cy.get("[data-cy=connect]").click();

//     // Wait for Metamask to connect
//     cy.window().should("have.property", "ethereum");
//     cy.window().its("ethereum.selectedAddress").should("not.be.empty");

//     // Get the address and check that it is displayed on the screen
//     cy.window().then((win) => {
//       const address = win.ethereum.selectedAddress;
//       cy.get("[data-cy=address]").should("contain", address);
//     });
//   });
// });

// describe("App", () => {
//   it("should connect to Metamask and display the address", () => {
//     cy.visit("/");

//     // Click the "connect" button
//     cy.get("[data-cy=connect]").click();

//     // Wait for Metamask to connect
//     cy.window().should("have.property", "ethereum");
//     cy.window().its("ethereum.selectedAddress").should("not.be.empty");

//     // Get the address and check that it is displayed on the screen
//     cy.window().then((win) => {
//       const address = win.ethereum.selectedAddress;
//       cy.get("[data-cy=address]").should("contain", address);

//       // Switch to the Metamask window
//       cy.visit(
//         `chrome-extension://${Cypress.env("METAMASK_EXTENSION_ID")}/popup.html`
//       );

//       // Wait for the Metamask popup to load and the address to be displayed
//       cy.get("#app-content").should("contain", address);

//       // Click on the address to select it
//       cy.get(".selected-account").click();

//       // Switch back to the app window
//       cy.visit("/");
//     });
//   });
// });

describe("App", () => {
  it("should connect to Metamask and display the address", () => {
    cy.visit("/");

    // Click the "connect" button
    cy.get("[data-cy=connect]").click();

    // Wait for Metamask to connect
    cy.window().should("have.property", "ethereum");
    cy.window().its("ethereum.selectedAddress").should("not.be.empty");

    // Get the address and check that it is displayed on the screen
    cy.window().then((win) => {
      const address = win.ethereum.selectedAddress;
      cy.get("[data-cy=address]").should("contain", address);

      // Switch to the Metamask window
      cy.visit(
        `chrome-extension://${Cypress.env("METAMASK_EXTENSION_ID")}/popup.html`
      );

      // Switch back to the app window
      cy.visit("/");

      cy.get("[data-cy=address]").should("not.have.text", "-");
    });
  });
});
