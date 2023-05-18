# Infrastructure Creation & Modification Policy

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)

## Purpose

The purpose of this Infrastructure Creation & Modifcation Policy is to establish guidelines and procedures for the creation, setup, and modification of infrastructure within our organization. This policy ensures that infrastructure components are designed, provisioned, and secured in a consistent and reliable manner.

## Scope

This policy applies to all team members involved in the creation, setup, and modification of infrastructure within our organization, including developers, engineers, administrators, and security personnel. The policy covers the following technologies and services:

- AWS for EC2, RDS, S3 Storage, CloudFront CDN, and Route 53 for domain management.
- CircleCI and GitHub for deployment management.
- Load.io for stress testing.
- Detectify for scanning OWASP security issues.
- AWS Shield for DDoS attack protection.
- Zoonu for performing pentests.
- Manual Pre-Launch Checklist on Confluence for new projects.

## Roles and Responsibilities

1. Lead Support Engineer and his team:
   - Responsible for all infrastructure-related activities within the organization.
   - Design and architect infrastructure components based on project requirements and best practices.
   - Ensure scalability, availability, and security of the infrastructure.
   - Collaborate with stakeholders to gather requirements and obtain approvals.
   - Document the infrastructure design and configuration.

2. Developers:
   - Test their own infrastructure configurations to ensure functionality and compatibility with the application.
   - Follow the infrastructure design guidelines provided by the Lead Support Engineer and his team.
   - Collaborate with the infrastructure team to resolve any configuration or deployment issues.
   - Facilitate communication with stakeholders for requested changes to infrastructure, including to provide difference in hosting cost estimates.

3. Security Personnel:
   - Collaborate with the Lead Support Engineer and his team to identify and address security concerns during the infrastructure creation process.
   - Review the infrastructure design and provide recommendations for implementing appropriate security measures.
   - Ensure compliance with security policies and industry standards.

## Infrastructure Creation Process

1. Design and Configuration:
   - Lead Support Engineer re-reviews the hosting estimation quote provided to the client to ascertain if the infrastructure suggested still meets the requirements of the project deliverable.
   - The Support Team design the infrastructure components, considering scalability, availability, and security.
   - Select appropriate AWS services, such as EC2, RDS, S3 Storage, CloudFront CDN, and Route 53, based on project requirements.
   - On Request: Document the infrastructure design, including architecture diagrams, configurations, and network layouts.

2. Provisioning:
   - Infrastructure team provisions the infrastructure using AWS services, following the documented hosting estimation quote.
   - Ensure that resources are appropriately provisioned, including compute instances, databases, storage, and networking components.
   - Verify that the infrastructure setup aligns with the design and meets project requirements.

3. Deployment and Testing:
   - Developers use CircleCI and GitHub for managing deployments, following the defined deployment processes and workflows.
   - Support Team manage and maintain the deployment pipeline making sure it is up to date with current organisations processes.
   - Perform comprehensive testing of the infrastructure to ensure functionality, compatibility, and adherence to project requirements.
   - Use loader.io to stress test the infrastructure, identifying potential bottlenecks and performance issues.

4. Security and Compliance:
   - Use Detectify to scan for OWASP security issues, performing regular security scans on the infrastructure.
   - Ensure that AWS Shield is set up and active across all EC2 servers to provide protection against DDoS attacks.
   - Utilize third-party provider Zoonu for pentesting services, when appropriate and requested by clients.
   - Collaborate with security personnel to address and resolve any security concerns or vulnerabilities.

5. Pre-Launch Checklist:
   - Before launching the infrastructure, perform a manual pre-launch checklist to ensure all necessary configurations and checks are completed.
   - Review the infrastructure setup, security measures, backup and recovery procedures, and monitoring capabilities.
   - Verify compliance with industry regulations and internal policies.

## Infrastructure Modification Process

1. Request:
   - Developers or stakeholders request investigation to be carried out on the current infrastructure to determine the reason behind any erronous behaviour of a website that cannot be replicated by the developers.
   - If necessary for the Support Team to carry out a change in infrastructure, both the finance team, and stakeholders must be notified.
   - If there is a cost increase to the infrastructure then approval must be given by the stakeholders.

2. Provisioning:
   - Dependent on the magnituted of the infrastructure change, the work may need to be scheduled where no developement work can be deployed to the hosting structure.
   - New infrastructure must be previsioned in parallel and transferring domain name must impact and involve the client as little as possible.

3. Testing:
   - Before finalising the change in infrastructure and retiring any old infrastructure, a comprehensive smoke test must be performed to make sure there are no issues.
   - Deployment configurations need to be modified, where applicable, and tested with the new the infrastructure to ensure development can continue.
   - If issues are discovered with the new infrastructure post transferring of domain name, the domain name must be transferred back to the old infrastructure as to not impact business.

4. Logging of Change:
   - After the change has been completed a change log entry must be added to the Infrastructure Change Log Google form to document the change for the fiance team to review.

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)
