Feature: ebayTest



  Scenario: 
    Given Login to ebay
    When Search and select product
      | abc |
      | def |
    Then Remove the first from card
