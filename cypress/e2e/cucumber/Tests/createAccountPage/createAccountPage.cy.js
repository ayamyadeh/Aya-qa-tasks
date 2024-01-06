import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import createAccountPageActions from "../../../../pageObjects/createAccountPage/actions.cy";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import createAccountAssertions from "../../../../pageObjects/createAccountPage/assertions.cy";
import sharedAssertions from "../../../../pageObjects/shared/asssertions.cy";
const firstName = "Razan";
const lastName = "user";
const email = "razanUsser" + Math.floor(Math.random() * 100) + "@gmail.com";
const password = "test@123%6";
const confirmPassword = "test@123%6";

const createAccountAction = new createAccountPageActions();
const createAccountAssertion = new createAccountAssertions();
const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();

Given("The user navigated to create account page", () => {
    sharedAction.openMagentoWebsite(
        "https://magento.softwaretestingboard.com/customer/account/create/"
    );
});

When("Type {string} in the field", (fieldName) => {
    switch (fieldName) {
        case "firstName":
            createAccountAction.typeInFirstNamelInputField(firstName);
            break;
        case "lastName":
            createAccountAction.typeInLastNameInputField(lastName);
            break;
        case "email":
            createAccountAction.typeInEmailInputField(email);
            break;
        case "password":
            createAccountAction.typeInPasswordInputField(password);
            break;
        case "confirmPassword":
            createAccountAction.typeInPasswordConfirmationInputField(confirmPassword);
            break;
    }
});

When("Clicks on Create an account button", () => {
    createAccountAction.clicksOnCreateAnAccountButton();
});

Then("The Account should be created successfully", () => {
    sharedAssertion.checkUrlEqualValue("https://magento.softwaretestingboard.com/customer/account/")
    createAccountAssertion.checkPageTitleContainValue("My Account")
});

Then("{string} message will be shown", (msg) => {
    sharedAssertion.checkAlertMessageContainValue(msg);
});