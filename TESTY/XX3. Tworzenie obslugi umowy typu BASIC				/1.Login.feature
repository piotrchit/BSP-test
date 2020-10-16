Feature: Logowanie się do BSP
    Background: Open Page and load content
       
    Scenario Outline: 0. BSP Login
    Given I open the Partner 1 TEST page
        When I provide "<loginInputValue>" in the <loginInput>
        And I click on the <nextPageButton>
        And I provide "<passInputValue>" in the <passInput>
        And I click on the <loginButton>
        Then <logoImage> is visible

        Examples:
            | loginInputValue             | passInputValue |
            | bsp.ext.test4@spis-firm.biz | 1Ib7yI;1BML^   |

    Scenario: Enter Task Subject menu
        When I click on the <administrationMenu>
        And I click on the <tasksAdministration>
        And I click on the <tasksSubjects>
        Then <addSubjectGroup> is visible

#     Scenario Outline: Create Task Subjects
#         When I click on the <addSubjectGroup>
#         And I provide "<taskSubjectGroupValue>" in the <subjectKey>
#         And I provide "<EngValue>" in the <SubjectENG>
#         And I provide "<PlValue>" in the <SubjectPL>
#         And I provide "<GerValue>" in the <SubjectGER>
#         And I provide "<FrValue>" in the <SubjectFR>
# # And I select "tasks" from autocmplete <chooseModule>
# # And I click <saveSubject>
# # Then 

#         Examples:
#             | taskSubjectGroupValue        | EngValue        | PlValue       | GerValue    | FrValue      |
#             | TASK_SUBJECT_GROUP_ANALYSIS  | Analysis        | ANALIZA       | Analyse     | Une analyse  |
#             # | TASK_SUBJECT_GROUP_IMPLEMENT | IMPLEMENTATIONS | WDROŻENIA     | UMSETZUNGEN | MISE EN ŒUVRE|
#             # | TASK_SUBJECT_GROUP_COPY      | COPYWRITING     | COPYWRITING   | COPYWRITING | COPYWRITING  |
#             # | TASK_SUBJECT_GROUP_REPORT    | REPORT          | RAPORT        | BERICHT     | RAPPORT      |
#             # | TASK_SUBJECT_GROUP_ LINKS    | LINKS           | LINKI         | LINKS       | LIENS        |
#             # | TASK_SUBJECT_GROUP_OPTI      | OPTIMIZATION    | OPTYMALIZACJA | OPTIMIERUNG | OPTIMISATION |
#             # | TASK_SUBJECT_GROUP_OTHER     | OTHER           | INNE          | SONSTIGES   | AUTRE        |

