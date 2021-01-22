Feature: Fill Partner Adress
    Background:

    Scenario: Enter partner adress Section
        When I click on the <panelSettings>
        # And I choose <adresses>
        And I click on the <vievPartnerAdress>


    Scenario Outline: Choose partner and fill adress
        When I click on the <partnerList>
        And I click on the <choosePartnerValue>
        When I provide "<partnerNameValue>" in the <partnerCompanyName>
        And I provide "<streetNameValue>" in the <partnerStreet>
        And I provide "<ZIPValue>" in the <partnerZIP>
        And I provide "<cityValue>" in the <partnerCity>
        And I provide "<addInfo>" in the <partnerInfo>
        And I click on the <partnerStreetNR>
        And I provide "<numberValue>" in the <partnerStreetNR>
        And I click on the <partnerCountry>
        And I click on the <countryValue>
        And I click on the <partnerRegion>
        And I click on the <regionValue>
        And I click on the <savePartnerAdress>

        Examples:
            | choosePartnerValue | partnerNameValue | streetNameValue | numberValue | ZIPValue | cityValue | countryValue | regionValue    | addInfo |
            | <heisePartner>     | Heise Seo        | Motorowa        | 1           | 04-035   | Warszawa  | <Poland>     | <dolnoslaskie> | abc     |
# | <sunSPartner>      | Sunrise System   | Powstańców Śl. | 5           | 53-332   | Wrocław  | <Poland>     | <mazowieckie> | abc     |
# | <bauerPartner>      | Bauer   |  Jody Road  | 4227         |  19063  | Londyn  | <Poland>     | <mazowieckie> | abc     |


