Feature: Add a new affiliates  functionality

@focus 
Scenario: Verify that the user can add a new affiliates successfully
Given The user visit the nopcommerce login page 
Given The user login to website 
And Click on Promotions from the dashboard
And Click on affiliates from the menu
And Click on Add new button
When Check active option in active checkbox field
And Enter farstname in farstname input field
And Enter lastname in lastname input field
And Enter email in email input field
And Select Country from Country select field
And Enter City in City input field
And Enter Address in Address input field
And Enter Zip / postal code  in Zip / postal code input field
And Enter Phone number Phone number input field
And Click on Save button 
Then The new discount should be added successfully with "The new affiliate has been added successfully."

