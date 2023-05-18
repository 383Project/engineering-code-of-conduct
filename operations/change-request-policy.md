# Change Request Policy

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)

## 1. Policy Statement

The Change Request Policy establishes guidelines and procedures for managing and implementing software changes within the organization. This policy ensures that changes are properly evaluated, approved, documented, and tested to minimize risks and maintain the integrity of the software systems.

## 2. Change Management

- Change requests may arise for various reasons, including new or changed legislation, changed business requirements, changes to infrastructure, incidents or problems, new software functionality, hosting infrastructure upgrades, and retirement of services.
- Change management is handled and controlled directly within the Jira Service Desk, covering incidents, problems, new software functionality, and hosting infrastructure upgrades.
- Implemented software changes are controlled directly within GitHub, using pull requests, code reviews, and appropriate labeling to categorize the changes.
- Standard changes, such as anti-virus updates, vulnerability patching, hot fixes, and software upgrades, are exempt from this procedure.

## 3. Categories of Change Requests

The following categories of change requests are used to classify and manage software changes within the organization:

- Major Update
- Feature
- Bug Fixes
- Documentation
- Styles
- Code Refactoring
- Performance improvements
- Tests
- Build
- Continuous Integration Updates
- Revert

## 4. Approval Process

- All software changes require approval from a Senior Engineer or above before being deployed to the production environment.
- Major updates and process changes also require approval from senior management.
- Legislation and business change requirements follow the ISMS REC 12.1.1 change request form, which includes approval and consideration of costs, benefits, and potential impacts.
- Change requests for incidents, problems, new software functionality, and hosting infrastructure upgrades are made through the appropriate Jira channel, with approval obtained from the project manager under the oversight of the information security officer.
- Change requests for software changes managed via GitHub do not require completion of the change request form.

## 5. Testing and Rollback

- A testing plan with clear acceptance criteria, including business and technical criteria, must be documented before commencing change testing.
- A rollback plan must be documented for major (feature) changes, which involve refactoring code or modifying core features.
- After review and successful testing, the approver authorizes the transfer of the change to the operational environment.

## 6. Standard, Major, and Emergency Changes

- Standard changes, categorized as "business as usual," are expected to make up the majority of change requests. They follow the normal change management process.
- Major changes, encompassing a wider audience, are logged within the change management process and referred to project stakeholders as Epic Jira tickets.
- Emergency changes may be required to address high-priority incidents or problems. They follow the change management process, but with swift approval from the Lead Support Engineer. If formal authorization is not possible, the change is still recorded, and the change management process is followed retrospectively.

Please note that this policy should be reviewed and customized to fit your organization's specific context, legal requirements, and compliance obligations. It is important to seek legal advice and consult with relevant stakeholders to ensure the policy aligns with your organization's needs and industry regulations.

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)
