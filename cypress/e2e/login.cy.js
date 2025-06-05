/// <reference types="cypress" />

describe("Login functionality", () => {
  it("logs in successfully with valid credentials", () => {
    cy.visit("/auth/login/");

    cy.get("#login-email").type("test150492@stud.noroff.no");
    cy.get("#login-password").type("test150492");
    cy.get("form").submit();

    cy.url().should("include", "/");
  });

  it("shows an error on failed login", () => {
    cy.visit("/auth/login/");

    cy.get("#login-email").type("wrong@stud.noroff.no");
    cy.get("#login-password").type("wrongpass");
    cy.get("form").submit();

    cy.get("#login-email").should("have.class", "border-salmonRed");
    cy.get("#login-password").should("have.class", "border-salmonRed");
  });
});
