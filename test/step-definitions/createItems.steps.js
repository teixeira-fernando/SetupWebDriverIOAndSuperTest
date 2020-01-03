import { Given, Then, When, After } from 'cucumber';
import todoListPage from "../pages/todoListPage";
import allureReporter from '@wdio/allure-reporter'

Given(/^I am on the list items page$/, function () {
    todoListPage.open();
    assert.equal(browser.getUrl(), browser.options.baseUrl);
});

When(/^I create 1 new item named "([^"]*)"$/, function (itemTitle) {
    allureReporter.addArgument('TestParameter', itemTitle);
    todoListPage.createNewTodoItem(itemTitle);
});

When(/^I try to create a new item with a repeated name$/, function () {
    todoListPage.createNewTodoItem("Repeated Item");
    todoListPage.createNewTodoItem("Repeated Item");
});

When(/^I try to create a new item with no title$/, function () {
    todoListPage.createNewTodoItem("");
});

Then(/^this new item will be added to my list with the name "([^"]*)"$/, function (itemTitle) {
    assert.equal(todoListPage.textFromItemAtPosition(0), itemTitle)
});

Then(/^this repeated item will be added to my list$/, function () {
    assert.equal(todoListPage.textFromItemAtPosition((todoListPage.lastItemIndex - 1)), "Repeated Item")
});

Then(/^no items will be added to my list$/, function () {
    assert.equal(todoListPage.lastItemIndex, 0)
});

After((scenario)=>{
    if(scenario.result.status === "failed"){
        todoListPage.saveScreenshot()
        console.log('Scenario Failed. Screenshot taken!!');
    }
});
