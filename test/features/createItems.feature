Feature: Create Todo Items
 In order to fill my list with my activities to do
 As a user
 I want to create new items
 So that I can organize and prioritize my activities
 
Scenario Outline: Create 1 new item
   Given I am on the list items page
   When I create 1 new item named <itemTitle>
   Then this new item will be added to my list with the name <itemTitle>

   Examples:
    |itemTitle| 
    |"New Item"|
    |"123"|
    |"!@#$"|

Scenario: Create a new item with empty name
   Given I am on the list items page
   When I try to create a new item with no title
   Then no items will be added to my list

Scenario: Create a new item with the same name
   Given I am on the list items page
   When I try to create a new item with a repeated name
   Then this repeated item will be added to my list
  