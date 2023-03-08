#THESE ARE JUST NOTES AND AREAS TO BE PRODUCED TO MEET ISO 27001


Change Management

A change request may arise for many reasons including the following 

New or changed legislation
Changed business requirements
Changes to infrastructure  

Change Management is handled and controlled directly within the Jira Service desk for the following: 
An incident or problem
New software functionality
Hosting infrastructure upgrades
Retirement of service


Implemented Software changes are controlled directly within Github where a full change log can be found. Github changes are implemented through Pull Requests and appropriate reviews and labeling to categorise the change.
The following changes are considered standard and are therefore not subject to this procedure:
Anti-virus updates
Vulnerability patching, hot fixes
Software upgrades


The following categories of change will be used of a change request:
Major
Update
All infrastructure upgrades, updates and retirement change require Lead Engineer approval.
All Major and process changes require senior management approval.
Software updates are version controlled, application readme documentation is updated and old documentation is archived.
The following categories of change are labeled within GitHub code changes. 

Feature
Bug Fixes
Documentation
Styles
Code Refactoring
Performance improvements
Tests
Build
Continueous Integration Updates
Revert

All software changes made require Senior Engineer or above approval prior to being launched in a production environment.
The originator of a change request for legislation and business change requirements completes the change request form ISMS REC 12.1.1 and obtains approval for the change, taking into account the costs of the exercise, the potential benefits, etc.
All other change requests managed through Jira the change request is made via the appropriate channel where approval is required though the project manager with the oversight of the information security officer. 
Software change requests are considered standard practice and are managed via GitHub. Software changes do not require completion of the change request form.
Change requests and approvals for legislation and business change requirements are raised and stored in the “Change Request” folder on the company shared drive.
The change initiator is responsible for carrying out a risk assessment to identify potential risks, their impacts and to identify controls in line with the organisation’s risk management framework.
A testing plan, complete with clear acceptance criteria including business and technical criteria must be documented prior to commencing change testing through our Jira tickets.
A rollback plan must be documented prior to a major (feature) change being implemented. A major change is considered a refactor of code, or an addition or modification to a core feature of the site/service.
Once the change has been reviewed and is proved to be effective (working in line with the test criteria) the approver authorises its transfer to the operational environment. 
Standard changes - these are “business as usual” changes which are expected to make up the majority of the change requests that are logged and handled through the change management process as described in this document. Although not emergencies, they will be prioritised in order that resources can be allocated in as effective a manner as possible.
Major changes will be logged within the change management process but referred to the Project Stakeholders as their scope and implications will generally encompass a wider audience. They can be raised as Epic Jira ticket with their own user story and acceptance criteria in which sub tasks can be added to. However, note that a Epic may generate further change requests that may be managed within the change management process as normal changes.
Emergency changes - whilst all changes likely to be required should be foreseen and planned, there will be occasions when business requirements demand that changes be made in an emergency situation.  Such changes are those requests which impact on internal or external ‘live’ systems and require implementation in order to resolve (or prevent) a current high priority incident or problem.  In such cases a change request must be raised immediately within the Jira service desk or directly with the 383 employee who can escalate the issue and create a jira support ticket. If the full change details are not available the Lead Support Engineer must be notified.  This is to ensure that all parties are aware at the earliest opportunity.  From initial logging of the change, the principles of the normal change management process should be observed as far as is realistic, however, emergency changes may require swift approval from the Lead Support Engineer.  If an emergency change cannot be formally authorised after reasonable efforts have been made to follow the process (e.g. out of hours) a decision may be made as to whether this change will be implemented.  However, details of the change must still be recorded and the change management process followed retrospectively to ensure that records are maintained accurately and the success or failure of the change can be reviewed.

    - [An incident or problem]
      - [New software functionality]
        - [Git Commit messaging]
        - [pull request and code review]
        - [Major functionality roll back plan] 
      - [New or changed legislation]
      - [Changed business requirements]
      - [Retirement of service] 
