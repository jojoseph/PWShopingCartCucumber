Feature: Login Functionality
  As a user
  I want to log in with valid credentials
  So that I can access the protected dashboard

  Scenario Outline: Successful Login
    Given I am on the login page
    When I enter "<username>" as username
    And I enter "<password>" as password
    And I click the login button
    Then I should be logged in successfully

  Examples:
    | username | password |
    | demo     | demo     |
    | testuser | testuser |