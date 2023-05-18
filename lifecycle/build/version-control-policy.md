## Software Verion Control Policy

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)

Software development is a critical activity at 383 Project, and the management of software code repositories is essential to ensuring the quality, security, and reliability of our software products. This policy is part of the [Engineering code of conduct](https://github.com/383Project/engineering-code-of-conduct) and sets out guidelines for the version control of software code repositories using Github, with a focus on the Gitflow methodology. By following these guidelines, we can ensure that all code changes are tracked and recorded, and that the code is backed up and protected from unauthorized access or modification. This policy also establishes procedures for managing user access and security, and for ensuring compliance with relevant standards and regulations.

## 1. Purpose
The purpose of this policy is to establish guidelines for the version control of software code repositories in our organization. This policy aims to ensure that all code changes are tracked and recorded, and that the code is backed up and protected from unauthorized access or modification.

## 2. Scope
This policy applies to all software code repositories in our organization that are managed using Github.

## 3. Version Control
- 3.1 We will use Github for storing all our code repositories.
- 3.2 We will use Git as the version control system for all our code repositories internaly and behalf of our clients.
- 3.3 We will follow the [Gitflow methodology](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for code development.
- 3.4 All changes to the code will be made via branches based from the live production branch, will pull requests used for code review and approval.
- 3.5 Commits must not be made directly to the live production, staging, or QA branches. Commits must be merged in via pull requests after a successful code review.
- 3.6 Commits must include a descriptive commit message, detailing the changes made and the purpose of the changes.
- 3.7 All code changes will be tracked and recorded in Github, with each commit linked to an issue or feature.
- 3.8 Code releases will be tagged and versioned in Github, with each release linked to a milestone or sprint.
- 3.9 Branches should follow the name convention [fix|hotfix|feature|chore]/[JIRA ticket number]_sensible-branch-name.
- 3.10 Non-production environment branches (staging, and QA) are never to be merged into the live production branch. The nature of digital agency work requires User Acceptance Testing from the client and they may change their mind on something in QA going to Production.

## 4. Access and Security
- 4.1 Access to code repositories will be granted on a need-to-know basis, with least privilege access granted to all users.
- 4.2 Access to code repositories will be managed through [383 Project Organisation Github Account](https://docs.google.com/spreadsheets/d/1FMMUOr2p9ogBBPHKf4qSvZTrQyCUd1Z0cudHJ8x2KdA/edit?usp=sharing), with user access rights reviewed and updated on a regular basis.
- 4.3 Authentication for Github access will be via multi-factor authentication (MFA) to ensure the security of the code repositories.
- 4.4 All code repositories will be backed up regularly, with backups stored securely in a separate location from the primary repositories.
- 4.5 Code repositories will be protected from unauthorized access or modification by implementing security controls that is overseen by the head of engineering and the information security manager. 
- 4.6 To aquire access to a repository you will be required to put a request through to the controls administrator or your line manager to arrange the appropriate level of access. A list of areas and how to find the appropriate administrator for your request can be found [here](https://docs.google.com/spreadsheets/d/1cbUSEFtE3VcxBUt9587PltWOlWIFeKXmYr9UF9o1tf8/edit?usp=sharing). Please not this is only accessable for people with a 383 Project Email Address.

## 5. Working with Third Parties
- 5.1 When working with third parties, we will ensure that they follow our version control policy and procedures. A third party at 383 Project are limited to or include:
  - The Client
  - Package Managers
  - Agencies acting on behalf of the client
  - Deployment Services
  - Hosting Services
  - Dependencies
  - SaaS products
  - Contractor or subcontractor
- 5.2 Third-party access to code repositories will be granted on a need-to-know basis, with the level of access granted determined by our organization.
- 5.3 Third-party access to code repositories will be managed through Github, with user access rights reviewed and updated on a regular basis.
- 5.4 Third-party access to code repositories will be granted only after the completion of a security and risk assessment, and any necessary security controls will be implemented to protect our code repositories.
- 5.5 Any third-party code changes will be tracked and recorded in Github, with each commit linked to an issue or feature.
- 5.6 We will require third-party code to be released and versioned in accordance with our version control policy and procedures.
- 5.7 Third-party access will be terminated and the relevent control documents will be updated at the point the third part relationship is terminated.
- 5.8 383 Project is not responsible for the controls, security and access of external repositories provided to us that are administrated by third parties or partnering agencies.

## 6. Compliance and Audit
- 6.1 Compliance with this policy will be monitored by the Engineering department, with regular control audits conducted to ensure that the policy is being followed and the correct level of access is appropriate.
- 6.2 Any non-compliance with this policy will be reported to the Engineering department, and appropriate action will be taken to rectify the issue.
- 6.3 Non compliance with this policy can result in disciplinary action.

## 7. Policy Review
- 7.1 This policy will be reviewed and updated on a regular basis by the Engineering Team to ensure that it remains relevant and effective.

By following this policy, we can ensure that all our software code repositories are managed securely and in a controlled manner, with changes tracked and recorded in accordance with the Gitflow methodology. We can also ensure that any third-party code is managed securely and in accordance with our standards, protecting our code repositories from unauthorized access or modification.

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)
