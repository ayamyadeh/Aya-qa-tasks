Feature: Add a new discount functionality
     

Scenario: Verify that the user can add a new discount successfully
Given The user visit the nopcommerce login page 
Given The user login to website 
And Click on Promotions from the dashboard
And Click on discount from the menu
And Click on Add new button
When Enter name in name input field
And Select discount type from discount type select field
And Check use percentage option in Use percentage checkbox field
And Enter discount amount in Discount amount input field
And Click on Save button 
Then The new discount should be added successfully with "The new discount has been added successfully."

