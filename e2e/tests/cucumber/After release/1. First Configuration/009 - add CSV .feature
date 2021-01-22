Feature: Add static pages to partner
  Background:

  Scenario: 1. Enter Menu Static Pages
    When I click on the <panelSettings>
    And I click on the <staticPages>
    Then <cookiePolicy> is visible
    And <cookiePolicy> is visible
    And <contactCSV> is visible
    And <privacyPolicy> is visible
    And <termsAndConditions> is visible
    And <privacyPolicyClient> is visible
    And <termsAndConditionsClient> is visible

  Scenario: 2. Enter Cookie Policy
    When I click on the <cookiePolicy>
    Then <cookieTitleName> is visible

  Scenario Outline: 2a. Add Cookie policy to Sunrise
    When I click on the <partnerList>
    And I click on the <sunSPartner>
    And I click on the <cookieLanguage>
    Then <cookieTitleName> is visible
    When I click on the <cookieTitleName>
    And I provide "<CookieTitleValue>" in the <cookieTitleName>
    And I provide "<coockieContentValue>" in the <cookieContent>
    And I click on the <saveCookie>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | cookieLanguage    | CookieTitleValue               | coockieContentValue                                                                                                 |
      | <englishLanguage> | Cookie Policy                  | Policy on cookies and similar technologies of September 1, 2020. Sunrise System sp. z o.o. sp. k.                   |
      | <polishLanguage>  | Polityka Cookie                | Polityka dotycząca plików cookies i podobnych technologii z dnia 1 września 2020 r. Sunrise System Sp. zoo . sp. k. |
      | <germanLanguage>  | Richtlinie zu Cookies          | Richtlinie zu Cookies und ähnlichen Technologien vom 1. September 2020. Sunrise System sp. z o.o. sp. k.            |
      | <frenchLanguage>  | Politique relative aux cookies | Politique sur les cookies et technologies similaires du 1er septembre 2020. Sunrise System sp. zoo. sp. k.          |

  Scenario Outline: 2b. Add Cookie policy to Heisee
    When I click on the <partnerList>
    And I click on the <heisePartner>
    When I click on the <cookieLanguage>
    Then <cookieTitleName> is visible
    When I click on the <cookieTitleName>
    And I provide "<CookieTitleValue>" in the <cookieTitleName>
    And I provide "<coockieContentValue>" in the <cookieContent>
    And I click on the <saveCookie>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | cookieLanguage    | CookieTitleValue               | coockieContentValue                                                                                                 |
      | <polishLanguage>  | Polityka Cookie                | Polityka dotycząca plików cookies i podobnych technologii z dnia 1 września 2020 r. Sunrise System Sp. zoo . sp. k. |
      | <germanLanguage>  | Richtlinie zu Cookies          | Richtlinie zu Cookies und ähnlichen Technologien vom 1. September 2020. Sunrise System sp. z o.o. sp. k.            |
      | <frenchLanguage>  | Politique relative aux cookies | Politique sur les cookies et technologies similaires du 1er septembre 2020. Sunrise System sp. zoo. sp. k.          |
      | <englishLanguage> | Cookie Policy                  | Policy on cookies and similar technologies of September 1, 2020. Sunrise System sp. z o.o. sp. k.                   |

  Scenario Outline: 2c . Add Cookie policy to RMF
    When I click on the <partnerList>
    And I click on the <grupaRMFPartner>
    When I click on the <cookieLanguage>
    Then <cookieTitleName> is visible
    When I click on the <cookieTitleName>
    And I provide "<CookieTitleValue>" in the <cookieTitleName>
    And I provide "<coockieContentValue>" in the <cookieContent>
    And I click on the <saveCookie>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | cookieLanguage    | CookieTitleValue               | coockieContentValue                                                                                                 |
      | <polishLanguage>  | Polityka Cookie                | Polityka dotycząca plików cookies i podobnych technologii z dnia 1 września 2020 r. Sunrise System Sp. zoo . sp. k. |
      | <germanLanguage>  | Richtlinie zu Cookies          | Richtlinie zu Cookies und ähnlichen Technologien vom 1. September 2020. Sunrise System sp. z o.o. sp. k.            |
      | <frenchLanguage>  | Politique relative aux cookies | Politique sur les cookies et technologies similaires du 1er septembre 2020. Sunrise System sp. zoo. sp. k.          |
      | <englishLanguage> | Cookie Policy                  | Policy on cookies and similar technologies of September 1, 2020. Sunrise System sp. z o.o. sp. k.                   |

  Scenario Outline: 2d. Add Cookie policy to Bauer
    When I click on the <partnerList>
    And I click on the <bauerPartner>
    When I click on the <cookieLanguage>
    Then <cookieTitleName> is visible
    When I click on the <cookieTitleName>
    And I provide "<CookieTitleValue>" in the <cookieTitleName>
    And I provide "<coockieContentValue>" in the <cookieContent>
    And I click on the <saveCookie>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | cookieLanguage    | CookieTitleValue               | coockieContentValue                                                                                          |
      | <polishLanguage>  | Polityka Cookie                | Polityka dotycząca plików cookies i podobnych technologii z dnia 1 września 2020 r. Bauer Consumer Media Ltd |
      | <germanLanguage>  | Richtlinie zu Cookies          | Richtlinie zu Cookies und ähnlichen Technologien vom 1. September 2020. Bauer Consumer Media Ltd             |
      | <frenchLanguage>  | Politique relative aux cookies | Politique sur les cookies et technologies similaires du 1er septembre 2020. Bauer Consumer Media Ltd         |
      | <englishLanguage> | Cookie Policy                  | Policy on cookies and similar technologies of September 1, 2020. Bauer Consumer Media Ltd                    |

  Scenario: 2e. Back to the CSV List Menu
    And I click on the <backToCSVList>
    Then <cookiePolicy> is visible
    And <contactCSV> is visible
    And <privacyPolicy> is visible
    And <termsAndConditions> is visible
    And <privacyPolicyClient> is visible
    And <termsAndConditionsClient> is visible

  Scenario: 3 Enter Contact Menu
    When I click on the <staticPages>
    And I click on the <contactCSV>
    Then <contactTitleName> is editable

  Scenario Outline: 3a. Add Contact to Partner Sunrise
    When I click on the <partnerList>
    And I click on the <sunSPartner>
    When I click on the <contactLanguage>
    Then <contactTitleName> is visible
    When I click on the <contactTitleName>
    And I provide "<ContactTitleValue>" in the <contactTitleName>
    And I provide "<coockieContentValue>" in the <contactContent>
    And I click on the <saveContact>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>


    Examples:
      | contactLanguage   | ContactTitleValue                        | coockieContentValue                                                                                                  |
      | <polishLanguage>  | Kontakt do spółki Sunrise System         | Sunrise System sp. z o.o. sp. k. Adres: Powstańców Śląskich 5, 53-332 Wrocław Telefon: 71 758 32 00 sunrisesystem.pl |
      | <germanLanguage>  | Kontakt zum Unternehmen Sunrise System   | Sunrise System sp. z o.o. sp. k. Adres: Powstańców Śląskich 5, 53-332 Wrocław Telefon: 71 758 32 00 sunrisesystem.pl |
      | <frenchLanguage>  | Contact avec l'entreprise Sunrise System | Sunrise System sp. z o.o. sp. k. Adres: Powstańców Śląskich 5, 53-332 Wrocław Telefon: 71 758 32 00 sunrisesystem.pl |
      | <englishLanguage> | Contact to the company Sunrise System    | Sunrise System sp. z o.o. sp. k. Adres: Powstańców Śląskich 5, 53-332 Wrocław Telefon: 71 758 32 00 sunrisesystem.pl |

  Scenario Outline: 3b. Add Contact to Partner Heisee
    When I click on the <partnerList>
    And I click on the <heisePartner>
    When I click on the <contactLanguage>
    Then <contactTitleName> is visible
    When I click on the <contactTitleName>
    And I provide "<ContactTitleValue>" in the <contactTitleName>
    And I provide "<coockieContentValue>" in the <contactContent>
    And I click on the <saveContact>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>


    Examples:
      | contactLanguage   | ContactTitleValue                        | coockieContentValue                                                                                                                                      |
      | <polishLanguage>  | Kontakt do spółki Sunrise System         | Heise Media Service GmbH & Co. KG (Heise RegioConcept) Adres: Karl-Wiechert-Allee 10, 30625 Hannover, NiemcyTelefon: +49 511 53520 heise-regioconcept.de |
      | <germanLanguage>  | Kontakt zum Unternehmen Sunrise System   | Heise Media Service GmbH & Co. KG (Heise RegioConcept) Adres: Karl-Wiechert-Allee 10, 30625 Hannover, NiemcyTelefon: +49 511 53520 heise-regioconcept.de |
      | <frenchLanguage>  | Contact avec l'entreprise Sunrise System | Heise Media Service GmbH & Co. KG (Heise RegioConcept) Adres: Karl-Wiechert-Allee 10, 30625 Hannover, NiemcyTelefon: +49 511 53520 heise-regioconcept.de |
      | <englishLanguage> | Contact to the company Sunrise System    | Heise Media Service GmbH & Co. KG (Heise RegioConcept) Adres: Karl-Wiechert-Allee 10, 30625 Hannover, NiemcyTelefon: +49 511 53520 heise-regioconcept.de |

  Scenario Outline: 3c. Add Contact to Partner RMF
    When I click on the <partnerList>
    And I click on the <grupaRMFPartner>
    When I click on the <contactLanguage>
    Then <contactTitleName> is visible
    When I click on the <contactTitleName>
    And I provide "<ContactTitleValue>" in the <contactTitleName>
    And I provide "<coockieContentValue>" in the <contactContent>
    And I click on the <saveContact>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>


    Examples:
      | contactLanguage   | ContactTitleValue                   | coockieContentValue                                            |
      | <polishLanguage>  | Kontakt do spółki Grupa RMF         | Grupa RMF Adres: al. Stanów Zjednoczonych 61A; 04-028 Warszawa |
      | <germanLanguage>  | Kontakt zum Unternehmen Grupa RMF   | Grupa RMF Adres: al. Stanów Zjednoczonych 61A; 04-028 Warszawa |
      | <frenchLanguage>  | Contact avec l'entreprise Grupa RMF | Grupa RMF Adres: al. Stanów Zjednoczonych 61A; 04-028 Warszawa |
      | <englishLanguage> | Contact to the company Grupa RMF    | Grupa RMF Adres: al. Stanów Zjednoczonych 61A; 04-028 Warszawa |

  Scenario Outline: 3d. Add Contact to Partner Bauer
    When I click on the <partnerList>
    And I click on the <bauerPartner>
    When I click on the <contactLanguage>
    Then <contactTitleName> is visible
    When I click on the <contactTitleName>
    And I provide "<ContactTitleValue>" in the <contactTitleName>
    And I provide "<contactContentValue>" in the <contactContent>
    And I click on the <saveContact>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>


    Examples:
      | contactLanguage   | ContactTitleValue                         | contactContentValue                                               |
      | <polishLanguage>  | Kontakt do spółki Grupa Bauer SEO         | BauerSEO Adres: Motorowa 1, 04-035 Warszawa Telefon: 22 100 27 66 |
      | <germanLanguage>  | Kontakt zum Unternehmen Grupa Bauer SEO   | BauerSEO Adres: Motorowa 1, 04-035 Warszawa Telefon: 22 100 27 66 |
      | <frenchLanguage>  | Contact avec l'entreprise Grupa Bauer SEO | BauerSEO Adres: Motorowa 1, 04-035 Warszawa Telefon: 22 100 27 66 |
      | <englishLanguage> | Contact to the company Grupa Bauer SEO    | BauerSEO Adres: Motorowa 1, 04-035 Warszawa Telefon: 22 100 27 66 |

  Scenario: 3e. Back to the CSV List Menu
    And I click on the <backToCSVList>
    Then <cookiePolicy> is visible
    And <contactCSV> is visible
    And <privacyPolicy> is visible
    And <termsAndConditions> is visible
    And <privacyPolicyClient> is visible
    And <termsAndConditionsClient> is visible

  Scenario: 4 Enter Privacy Policy PARTNER
    When I click on the <staticPages>
    And I click on the <privacyPolicy>
    Then <privacyPolicyTitleName> is editable

  Scenario Outline: 4a. Add  privacyPolicy to Partner Suns
    When I click on the <partnerList>
    And I click on the <sunSPartner>
    When I click on the <privacyPolicyLanguage>
    Then <privacyPolicyTitleName> is visible
    When I click on the <privacyPolicyTitleName>
    And I provide "<PPTitleValue>" in the <privacyPolicyTitleName>
    And I provide "<privacyPolicyContentValue>" in the <privacyPolicyContent>
    And I provide "<GDPRPolicyText>" in the <GDPRPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <saveprivacyPolicy>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>


    Examples:
      | privacyPolicyLanguage | PPTitleValue                                | privacyPolicyContentValue                                                                       | GDPRPolicyText                               |
      | <polishLanguage>      | Polityka Prywatności Sunrise System         | Privacy Policy at Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin Suns[/LINK]       |
      | <germanLanguage>      | Datenschutzerklärung Sunrise System         | Privacy Policy at Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] Suns Terms [/ LINK]        |
      | <frenchLanguage>      | Politique de confidentialité Sunrise System | Privacy Policy at Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions Suns [/ LINK] |
      | <englishLanguage>     | Privacy Policy Sunrise System               | Privacy Policy at Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin Suns[/LINK]           |

  Scenario Outline: 4b. Add  privacyPolicy to Partner Heisee
    When I click on the <partnerList>
    And I click on the <heisePartner>
    When I click on the <privacyPolicyLanguage>
    Then <privacyPolicyTitleName> is visible
    When I click on the <privacyPolicyTitleName>
    And I provide "<PPTitleValue>" in the <privacyPolicyTitleName>
    And I provide "<privacyPolicyContentValue>" in the <privacyPolicyContent>
    And I provide "<GDPRPolicyText>" in the <GDPRPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <saveprivacyPolicy>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | privacyPolicyLanguage | PPTitleValue                                | privacyPolicyContentValue                                                                       | GDPRPolicyText                                 |
      | <polishLanguage>      | Polityka Prywatności Partner Heisee         | Privacy Policy at Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin Heisee[/LINK]       |
      | <germanLanguage>      | Datenschutzerklärung Partner Heisee         | Privacy Policy at Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] Heisee Terms [/ LINK]        |
      | <frenchLanguage>      | Politique de confidentialité Partner Heisee | Privacy Policy at Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions Heisee [/ LINK] |
      | <englishLanguage>     | Privacy Policy Partner Heisee               | Privacy Policy at Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin Heisee[/LINK]           |


  Scenario Outline: 4c. Add  privacyPolicy to Partner RMF
    When I click on the <partnerList>
    And I click on the <grupaRMFPartner>
    When I click on the <privacyPolicyLanguage>
    Then <privacyPolicyTitleName> is visible
    When I click on the <privacyPolicyTitleName>
    And I provide "<PPTitleValue>" in the <privacyPolicyTitleName>
    And I provide "<privacyPolicyContentValue>" in the <privacyPolicyContent>
    And I provide "<GDPRPolicyText>" in the <GDPRPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <saveprivacyPolicy>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>


    Examples:
      | privacyPolicyLanguage | PPTitleValue                           | privacyPolicyContentValue                                                                  | GDPRPolicyText                              |
      | <polishLanguage>      | Polityka Prywatności Grupa RMF         | Privacy Policy at Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin RMF[/LINK]       |
      | <germanLanguage>      | Datenschutzerklärung Grupa RMF         | Privacy Policy at Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] RMF Terms [/ LINK]        |
      | <frenchLanguage>      | Politique de confidentialité Grupa RMF | Privacy Policy at Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions RMF [/ LINK] |
      | <englishLanguage>     | Privacy Policy Grupa RMF               | Privacy Policy at Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin RMF [/LINK]          |

  Scenario Outline: 4d. Add  privacyPolicy to Partner Bauer
    When I click on the <partnerList>
    And I click on the <bauerPartner>
    When I click on the <privacyPolicyLanguage>
    Then <privacyPolicyTitleName> is visible
    When I click on the <privacyPolicyTitleName>
    And I provide "<PPTitleValue>" in the <privacyPolicyTitleName>
    And I provide "<privacyPolicyContentValue>" in the <privacyPolicyContent>
    And I provide "<GDPRPolicyText>" in the <GDPRPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <saveprivacyPolicy>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>



    Examples:
      | privacyPolicyLanguage | PPTitleValue               | privacyPolicyContentValue                                                              | GDPRPolicyText                   |
      | <polishLanguage>      | Polityka Prywatności Bauer | Privacy Policy at Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin Bauer |
  | <germanLanguage>      | Datenschutzerklärung Bauer         | Privacy Policy at Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] Bauer Terms [/ LINK]        |
  | <frenchLanguage>      | Politique de confidentialité Bauer | Privacy Policy at Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions Bauer [/ LINK] |
  | <englishLanguage>     | Privacy Policy Bauer               | Privacy Policy at Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin Bauer                  |


  Scenario: 4e. Back to the CSV List Menu
    Then I move to <backToCSVList>
    And I click on the <backToCSVList>
    Then <cookiePolicy> is visible
    And <contactCSV> is visible
    And <privacyPolicy> is visible
    And <termsAndConditions> is visible
    And <privacyPolicyClient> is visible
    And <termsAndConditionsClient> is visible

  Scenario: 5 Enter PARTNER Terms and Conditions
    When I click on the <staticPages>
    And I click on the <termsAndConditions>
    Then <TermsTitleName> is editable

  Scenario Outline: 5a. Add  terms to Partner SUNRISE SYSTEM
    When I click on the <partnerList>
    And I click on the <sunSPartner>
    When I click on the <termsLanguage>
    Then <TermsTitleName> is visible
    When I click on the <TermsTitleName>
    And I provide "<termsTitleValue>" in the <TermsTitleName>
    And I click on the <termsContent>
    And I provide "<termsContentValue>" in the <termsContent>
    And I provide "<GDPRClientPolicyText>" in the <GDPRClientPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <savePPClient>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | termsLanguage     | termsTitleValue                             | termsContentValue                                                                                                                                              | GDPRPartnerTermsValue                                   |
      | <polishLanguage>  | Regulamin Partner SUNRISE SYSTEM            | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Zaakceptuj [LINK]Regulamin Clienta Suns[/LINK]          |
      | <germanLanguage>  | Geschäftsbedingungen Partner SUNRISE SYSTEM | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Akzeptiere [LINK] Suns Client's  Terms [/ LINK]         |
      | <frenchLanguage>  | Termes et conditions Partner SUNRISE SYSTEM | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accepter les [LINK] Conditions  Client's  Suns [/ LINK] |
      | <englishLanguage> | Privacy Policy Partner SUNRISE SYSTEM       | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accept [LINK]Regulamin Clienta Suns[/LINK]              |


  Scenario Outline: 5a. Add  terms to Partner BAUER SEO
    When I click on the <partnerList>
    And I click on the <bauerPartner>
    When I click on the <termsLanguage>
    Then <TermsTitleName> is visible
    When I click on the <TermsTitleName>
    And I provide "<termsTitleValue>" in the <TermsTitleName>
    And I click on the <termsContent>
    And I provide "<termsContentValue>" in the <termsContent>
    And I provide "<GDPRClientPolicyText>" in the <GDPRClientPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <savePPClient>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | termsLanguage     | termsTitleValue                        | termsContentValue                                                                                                                                              | GDPRPartnerTermsValue                                   |
      | <polishLanguage>  | Regulamin Partner BAUER SEO            | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Zaakceptuj [LINK]Regulamin Clienta Suns[/LINK]          |
      | <germanLanguage>  | Geschäftsbedingungen Partner BAUER SEO | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Akzeptiere [LINK] Suns Client's  Terms [/ LINK]         |
      | <frenchLanguage>  | Termes et conditions Partner BAUER SEO | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accepter les [LINK] Conditions  Client's  Suns [/ LINK] |
      | <englishLanguage> | Privacy Policy Partner BAUER SEO       | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accept [LINK]Regulamin Clienta Suns[/LINK]              |



  Scenario Outline: 5b. Add  terms to Partner HEISE
    When I click on the <partnerList>
    And I click on the <heisePartner>
    When I click on the <termsLanguage>
    Then <TermsTitleName> is visible
    When I click on the <TermsTitleName>
    And I provide "<termsTitleValue>" in the <TermsTitleName>
    And I click on the <termsContent>
    And I provide "<termsContentValue>" in the <termsContent>
    And I provide "<GDPRClientPolicyText>" in the <GDPRClientPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <savePPClient>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | termsLanguage     | termsTitleValue                    | termsContentValue                                                                                                                                              | GDPRPartnerTermsValue                                   |
      | <polishLanguage>  | Regulamin Partner HEISE            | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Zaakceptuj [LINK]Regulamin Clienta Suns[/LINK]          |
      | <germanLanguage>  | Geschäftsbedingungen Partner HEISE | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Akzeptiere [LINK] Suns Client's  Terms [/ LINK]         |
      | <frenchLanguage>  | Termes et conditions Partner HEISE | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accepter les [LINK] Conditions  Client's  Suns [/ LINK] |
      | <englishLanguage> | Privacy Policy Partner HEISE       | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accept [LINK]Regulamin Clienta Suns[/LINK]              |


  Scenario Outline: 5a. Add  terms to Partner GRUPA RMF
    When I click on the <partnerList>
    And I click on the <grupaRMFPartner>
    When I click on the <termsLanguage>
    Then <TermsTitleName> is visible
    When I click on the <TermsTitleName>
    And I provide "<termsTitleValue>" in the <TermsTitleName>
    And I click on the <termsContent>
    And I provide "<termsContentValue>" in the <termsContent>
    And I provide "<GDPRPartnerTermsValue>" in the <GDPRClientPolicy>
    And I click on the <GDPRRequiredCheckbox>
    And I click on the <savePPClient>
    Then <savedMessage> is visible
    And I move to <cookieLanguageMenu>

    Examples:
      | termsLanguage     | termsTitleValue                        | termsContentValue                                                                                                                                              | GDPRPartnerTermsValue                                   |
      | <polishLanguage>  | Regulamin Partner GRUPA RMF            | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Zaakceptuj [LINK]Regulamin Clienta Suns[/LINK]          |
      | <germanLanguage>  | Geschäftsbedingungen Partner GRUPA RMF | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Akzeptiere [LINK] Suns Client's  Terms [/ LINK]         |
      | <frenchLanguage>  | Termes et conditions Partner GRUPA RMF | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accepter les [LINK] Conditions  Client's  Suns [/ LINK] |
      | <englishLanguage> | Privacy Policy Partner GRUPA RMF       | Regulations for provision of electronic services September 1, 2020 regarding use of Partner Panel (Reseller Panel) in the SaaS model ('Software as a service') | Accept [LINK]Regulamin Clienta Suns[/LINK]              |

Scenario: 6 Enter Privacy Policy - Client
  When I click on the <staticPages>
  And I click on the <privacyPolicyClient>
  Then <privPolicyClientName> is editable

Scenario Outline: 6a.adding regulations for the partner's Sun S client
  When I click on the <partnerList>
  And I click on the <sunSPartner>
  When I click on the <privacyPolicyLanguage>
  Then <privPolicyClientName> is visible
  When I click on the <privPolicyClientName>
  And I provide "<PPTitleValue>" in the <privPolicyClientName>
  And I provide "<PPClientContentValue>" in the <privPolicyClientContent>
  And I provide "<GDPRClientPolicyText>" in the <GDPRClientPolicy>
  And I click on the <GDPRRequiredCheckbox>
  And I click on the <savePPClient>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>

  Examples:
    | privacyPolicyLanguage | PPTitleValue                                           | PPClientContentValue                                                                                      | GDPRClientPolicyText                                    |
    | <polishLanguage>      | Polityka Prywatności clients's  Sunrise System         | Privacy Policy at clients's Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin Clienta Suns[/LINK]          |
    | <germanLanguage>      | Datenschutzerklärung  clients's Sunrise System         | Privacy Policy at clients's Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] Suns Client's  Terms [/ LINK]         |
    | <frenchLanguage>      | Politique de confidentialité  clients's Sunrise System | Privacy Policy at clients's Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions  Client's  Suns [/ LINK] |
    | <englishLanguage>     | Privacy Policy clients's  Sunrise System               | Privacy Policy at clients's Sunrise System sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin Clienta Suns[/LINK]              |


Scenario Outline: 6b.adding regulations for the partner's Heisee client
  When I click on the <partnerList>
  And I click on the <heisePartner>
  When I click on the <privacyPolicyLanguage>
  Then <privPolicyClientName> is visible
  When I click on the <privPolicyClientName>
  And I provide "<PPTitleValue>" in the <privPolicyClientName>
  And I provide "<PPClientContentValue>" in the <privPolicyClientContent>
  And I provide "<GDPRClientPolicyText>" in the <GDPRClientPolicy>
  And I click on the <GDPRRequiredCheckbox>
  And I click on the <savePPClient>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>


  Examples:
    | privacyPolicyLanguage | PPTitleValue                                           | PPClientContentValue                                                                                      | GDPRClientPolicyText                                      |
    | <polishLanguage>      | Polityka Prywatności P clients's artner Heisee         | Privacy Policy at clients's Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin  Client's  Heisee[/LINK]       |
    | <germanLanguage>      | Datenschutzerklärung clients's  Partner Heisee         | Privacy Policy at clients's Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] Heisee Terms  Client's  [/ LINK]        |
    | <frenchLanguage>      | Politique de confidentialité  clients's Partner Heisee | Privacy Policy at clients's Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions Client's   Heisee [/ LINK] |
    | <englishLanguage>     | Privacy Policy  clients's Partner Heisee               | Privacy Policy at clients's Partner Heisee sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin  Client's  Heisee[/LINK]           |


Scenario Outline: 6c. adding regulations for the partner's RMF client
  When I click on the <partnerList>
  And I click on the <grupaRMFPartner>
  When I click on the <privacyPolicyLanguage>
  Then <privPolicyClientName> is visible
  When I click on the <privPolicyClientName>
  And I provide "<PPTitleValue>" in the <privPolicyClientName>
  And I provide "<PPClientContentValue>" in the <privPolicyClientContent>
  And I provide "<GDPRClientPolicyText>" in the <GDPRClientPolicy>
  And I click on the <GDPRRequiredCheckbox>
  And I click on the <savePPClient>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>

  Examples:
    | privacyPolicyLanguage | PPTitleValue                                      | PPClientContentValue                                                                                 | GDPRClientPolicyText                                   |
    | <polishLanguage>      | Polityka Prywatności  clients's Grupa RMF         | Privacy Policy at clients's Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin  Client's  RMF[/LINK]       |
    | <germanLanguage>      | Datenschutzerklärung  clients's Grupa RMF         | Privacy Policy at clients's Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] RMF  Client's  Terms [/ LINK]        |
    | <frenchLanguage>      | Politique de confidentialité clients's  Grupa RMF | Privacy Policy at clients's Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions  Client's  RMF [/ LINK] |
    | <englishLanguage>     | Privacy Policy  clients's Grupa RMF               | Privacy Policy at clients's Grupa RMF sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin Client's   RMF [/LINK]          |

Scenario Outline: 6d. adding regulations for the partner's Bauer client
  When I click on the <partnerList>
  And I click on the <bauerPartner>
  When I click on the <privacyPolicyLanguage>
  Then <privPolicyClientName> is visible
  When I click on the <privPolicyClientName>
  And I provide "<PPTitleValue>" in the <privPolicyClientName>
  And I provide "<PPClientContentValue>" in the <privPolicyClientContent>
  And I provide "<GDPRClientPolicyText>" in the <GDPRClientPolicy>
  And I click on the <GDPRRequiredCheckbox>
  And I click on the <savePPClient>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>


  Examples:
    | privacyPolicyLanguage | PPTitleValue                                  | PPClientContentValue                                                                             | GDPRClientPolicyText                                     |
    | <polishLanguage>      | Polityka Prywatności  clients's Bauer         | Privacy Policy at clients's Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Zaakceptuj [LINK]Regulamin Client's   Bauer              |
    | <germanLanguage>      | Datenschutzerklärung  clients's Bauer         | Privacy Policy at clients's Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Akzeptiere [LINK] Bauer  Client's  Terms [/ LINK]        |
    | <frenchLanguage>      | Politique de confidentialité  clients's Bauer | Privacy Policy at clients's Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accepter les [LINK] Conditions  Client's  Bauer [/ LINK] |
    | <englishLanguage>     | Privacy Policy clients's Bauer                | Privacy Policy at clients's Bauer sp. z o.o. sp. k. as the Service Provider of September 1, 2020 | Accept [LINK]Regulamin Client's  Bauer                   |

Scenario: 6e. Back to the CSV List Menu
  Then I move to <backToCSVList>
  And I click on the <backToCSVList>
  Then <cookiePolicy> is visible
  And <contactCSV> is visible
  And <privacyPolicy> is visible
  And <termsAndConditions> is visible
  And <privacyPolicyClient> is visible
  And <termsAndConditionsClient> is visible

Scenario: 7 Enter PARTNER Terms and Conditions
  When I click on the <staticPages>
  And I click on the <termsAndConditions>
  Then <TermsTitleName> is editable


Scenario Outline: 7a. Add  terms to client's Partner SUNRISE SYSTEM
  When I click on the <partnerList>
  And I click on the <sunSPartner>
  When I click on the <termsLanguage>
  Then <TermsTitleName> is visible
  When I click on the <TermsTitleName>
  And I provide "<termsTitleValue>" in the <TermsTitleName>
  And I provide "<termsContentValue>" in the <termsContent>
  And I click on the <saveTerms>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>


  Examples:
    | termsLanguage     | termsTitleValue                                       | termsContentValue                                                                                                                                                        |
    | <polishLanguage>  | Regulamin client's Partner  SUNRISE SYSTEM            | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <germanLanguage>  | Geschäftsbedingungen client's Partner  SUNRISE SYSTEM | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <frenchLanguage>  | Termes et conditions client's Partner  SUNRISE SYSTEM | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <englishLanguage> | Privacy Policy client's Partner  SUNRISE SYSTEM       | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |

Scenario Outline: 7b. Add  terms to client's Partner  HEISEE
  When I click on the <partnerList>
  And I click on the <heisePartner>
  When I click on the <termsLanguage>
  Then <TermsTitleName> is visible
  When I click on the <TermsTitleName>
  And I provide "<termsTitleValue>" in the <TermsTitleName>
  And I provide "<termsContentValue>" in the <termsContent>
  And I click on the <saveTerms>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>


  Examples:
    | termsLanguage     | termsTitleValue                               | termsContentValue                                                                                                                                                        |
    | <polishLanguage>  | Regulamin client's Partner  HEISEE            | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <germanLanguage>  | Geschäftsbedingungen client's Partner  HEISEE | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <frenchLanguage>  | Termes et conditions client's Partner  HEISEE | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <englishLanguage> | Privacy Policy client's Partner  HEISEE       | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |

Scenario Outline: 7c. Add  terms to client's Partner  GRUPA RMF
  When I click on the <partnerList>
  And I click on the <grupaRMFPartner>
  When I click on the <termsLanguage>
  Then <TermsTitleName> is visible
  When I click on the <TermsTitleName>
  And I provide "<termsTitleValue>" in the <TermsTitleName>
  And I provide "<termsContentValue>" in the <termsContent>
  And I click on the <saveTerms>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>


  Examples:
    | termsLanguage     | termsTitleValue                                  | termsContentValue                                                                                                                                                        |
    | <polishLanguage>  | Regulamin client's Partner  GRUPA RMF            | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <germanLanguage>  | Geschäftsbedingungen client's Partner  GRUPA RMF | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <frenchLanguage>  | Termes et conditions client's Partner  GRUPA RMF | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <englishLanguage> | Privacy Policy client's Partner  GRUPA RMF       | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |

Scenario Outline: 7d. Add  terms to client's Partner  BAUER SEO
  When I click on the <partnerList>
  And I click on the <bauerPartner>
  When I click on the <termsLanguage>
  Then <TermsTitleName> is visible
  When I click on the <TermsTitleName>
  And I provide "<termsTitleValue>" in the <TermsTitleName>
  And I provide "<termsContentValue>" in the <termsContent>
  And I click on the <saveTerms>
  Then <savedMessage> is visible
  And I move to <cookieLanguageMenu>

  Examples:
    | termsLanguage     | termsTitleValue                                  | termsContentValue                                                                                                                                                        |
    | <polishLanguage>  | Regulamin client's Partner  BAUER SEO            | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <germanLanguage>  | Geschäftsbedingungen client's Partner  BAUER SEO | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <frenchLanguage>  | Termes et conditions client's Partner  BAUER SEO | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |
    | <englishLanguage> | Privacy Policy client's Partner  BAUER SEO       | Regulations for provision of electronic services September 1, 2020 regarding use of client's Partner  Panel (Reseller Panel) in the SaaS model ('Software as a service') |

Scenario: 7e. Back to the CSV List Menu
  Then I move to <backToCSVList>
  And I click on the <backToCSVList>
  Then <cookiePolicy> is visible
  And <contactCSV> is visible
  And <privacyPolicy> is visible
  And <termsAndConditions> is visible
  And <privacyPolicyClient> is visible
  And <termsAndConditionsClient> is visible