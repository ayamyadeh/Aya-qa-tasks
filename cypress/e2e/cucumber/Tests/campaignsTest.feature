Feature: Add a new campaigns functionality
    # Background: Visit the nopcommerce login page
    #         Given The user visit  the nopcommerce login page
    @focus
    Scenario: Verify that the user can add a new campaigns successfully
        Given The user visit the nopcommerce login page
        Given The user login to website
        And Click on Promotions from the dashboard
        And Click on campaigns from the menu
        And Click on Add new button
        When Enter name in name input field
        And Enter subject in Subject input field
        And Enter body in Body input field
        And Click on Save button
        Then The new campaigns should be added successfully with "The new campaign has been added successfully."

