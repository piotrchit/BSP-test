Feature: Create and check numbering pattern
  Background:

  Scenario:1 Enter Administration => Numbering
    When I choose <administrationMenu>
    And I click on the <numberingPatternsMenu>
    Then <NPTitle> is visible

  # # # # ^poprawa namierzania nowych buttonów
  # Scenario: 2. Test X button
  #   When I click on the <addNewNumber>
  #   And I provide "Checking X Button" in the <NPPattern>
  #   And I click on the <XcloseNP>
  #   # # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
  #   And I choose <keepEditingButton>
  #   Then <NPPattern> should be equal "Checking X Button"
  #   When I click on the <XcloseNP>
  #   And I choose <discardChanges>
  #   Then <NPTitle> is visible

  # Scenario: 3. Cancel NP popup with no data
  #   When I click on the <addNewNumber>
  #   And I click on the <cancelNP>
  #   Then <NPTitle> is visible

  # Scenario: 4. Cancel pop-up with data
  #   When I click on the <addNewNumber>
  #   And I provide "Checking cancel button" in the <NPPattern>
  #   And I click on the <cancelNP>
  #   # Then <cancelButtonPopup> should be equal "Czy chcesz porzucić wszystkie zmiany?"
  #   And I choose <keepEditingButton>
  #   Then <NPPattern> is visible
  #   When I click on the <cancelButton>
  #   And I choose <discardChanges>
  #   And I wait for <addNewNumber> to be enable
  #   Then <addNewNumber> is active

  Scenario Outline: Adding new NP
    When I click on the <addNewNumber>
    And I click on the <NPtype>
    And I click on the <NPpartner>
    And I click on the <chooseNPPartner>
    And I click on the <NPtypeDocument>
    And I click on the <columnName>
    And I click on the <columnMark>
    And I click on the <NPdocumentType>
    And I click on the <documentTypeValue>
    And I click on the <documentTemplate>
    And I provide "<templateName>" in the <chooseDocumentTemplate>
    And I click on the <documentTemplateValue>
    And I provide "<PatternName>" in the <NPPattern>
    And I click on the <savePattern>

    Examples:
      | chooseNPPartner | documentTypeValue | documentTemplateValue | templateName | PatternName |
      # | <NPPaginas>     | <offerType>       | <ofertaPaginas>       | offer        | Paginas offer |
      # | <NPPaginas>     | <leadType>        | <leadPAGINAS>         | lead         | Paginas lead |
      # | <NPPaginas>     | <auditType>       | <auditPAGINAS>        | audit        | Paginas audit |
      # | <NPPaginas>     | <contractType>    | <umowaPAGINAS>        | paginas        | Paginas umowa |
      | <NPJulia>       | <offerType>       | <ofertaJULIA>         | offer        | Julia offer |
      | <NPJulia>       | <leadType>        | <leadJULIA>           | lead         | Julia lead |
      | <NPJulia>       | <auditType>       | <auditJULIA>          | audit        | Julia audit |
      | <NPJulia>       | <contractType>    | <umowaJULIA>          | Julia        | Julia umowa |

#  | chooseNPPartner | documentTypeValue | documentTemplateValue | templateName | PatternName |
# | <NPSunrise>     | <offerType>       | <ofertaPL>            | oferta       |[@counter|month:year]-[@day]-[@month]-[@year] Test pattern |
# | <NPSunrise>     | <leadType>        | <leadPL>              | lead         |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPSunrise>     | <auditType>       | <auditPL>             | audit        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPSunrise>     | <contractType>    | <umowaPL>             | umowa        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPHeise>       | <offerType>       | <offerDEHeise>        | offer        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPHeise>       | <auditType>       | <AuditDE>             | audit        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPHeise>       | <contractType>    | <contractDEHeise>     | contract     |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPHeise>       | <leadType>        | <leadDEHeise>         | lead         |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPRMF>         | <offerType>       | <ofertaRMF>           | oferta       |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPRMF>         | <leadType>        | <leadRMF>             | lead         |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPRMF>         | <auditType>       | <auditRMF>            | audit        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPRMF>         | <contractType>    | <umowaRMF>            | umowa        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPBauer>       | <offerType>       | <ofertaBAUER>         | offer        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPBauer>       | <leadType>        | <leadBAUER>           | lead         |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPBauer>       | <auditType>       | <auditBAUER>          | audit        |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPBauer>       | <contractType>    | <umowaBAUER>          | contract     |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPNowy>        | <offerType>       | <ofertaNOWY>          |              |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPNowy>        | <leadType>        | <leadNOWY>            |              |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPNowy>        | <auditType>       | <auditNOWY>           |              |[@counter|month:year]-[@day]-[@month]-[@year]|
# | <NPNowy>        | <contractType>    | <umowaNOWY>           |              |[@counter|month:year]-[@day]-[@month]-[@year]|

# # Scenario: Checking NP on Lead
# # Scenario: Checking NP on Offer
# # Scenario: Checking NP on Contract
# # Scenario: Checking NP on Audit