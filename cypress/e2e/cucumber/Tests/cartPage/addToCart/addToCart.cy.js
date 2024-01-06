import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import addToCartAssrtions from "../../../../../pageObjects/cartPage/addToCart/assertions.cy";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import addToCartActions from "../../../../../pageObjects/cartPage/addToCart/actions.cy";
import sharedAssertions from "../../../../../pageObjects/shared/asssertions.cy";

const addToCartAction = new addToCartActions();
const addToCartAssrtion = new addToCartAssrtions();
const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();
Given("The user navigated to magento website", () => {
    sharedAction.openMagentoWebsite("https://magento.softwaretestingboard.com");
});

Given("The user search for shirt product ", () => {
    addToCartAction.SearchForProducts("shirt {enter}");
});

When("The user choose the product X", () => {
    addToCartAction.ChooseTheProduct();
});

When("The user choose the size {string} and color {string} for product X",
    (size, colorIndex) => {
        addToCartAction.chooseSizeAndColor(size, colorIndex);
    }
);

When("The user click on Add to cart button", () => {
    addToCartAction.clickOnButton();
});

Then("The product should be added to the cart successfully with {string}",
    (message) => {
        sharedAssertion.checkAlertMessageContainValue(message);
    }
);

Then("The counter of the cart should be visible", () => {
    addToCartAssrtion.checkCounterOfTheCartIsVisible();
});