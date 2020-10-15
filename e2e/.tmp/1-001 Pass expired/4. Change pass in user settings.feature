# Feature: Logowanie się do BSP
#     Background:

#     Scenario Outline: 4. Change pass using user menu
#         When I click on the <userMenu>
#         And I click on the <editUser>
#         And I click on the <changePassMenu>
#         And I provide "<oldPassValue>" in the <userOldPass>
#         And I provide "<newPassValue>" in the <userNewPass>
#         And I provide "<newPassValue>" in the <userNewPass2>
#         And I click on the <saveUserPass>
#         Then <saveMessage> is visible
#         When I click on the <userMenu>
#         And I click on the <logout>
#         Then <loginInput> is visible

#         Examples:
#             | oldPassValue             | newPassValue |
#             | 1Ib7yI;1BML^1Ib7yI;1BML^ | 1Ib7yI;1BML^ |
