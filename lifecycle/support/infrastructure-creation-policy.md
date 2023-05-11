# Infrastructure Creation Policy

## Purpose

The purpose of this Infrastructure Creation Policy is to establish guidelines and procedures for the creation and setup of infrastructure within our organization. This policy ensures that infrastructure components are designed, provisioned, and secured in a consistent and reliable manner.

## Scope

This policy applies to all team members involved in the creation and setup of infrastructure within our organization, including developers, engineers, administrators, and security personnel. The policy covers the following technologies and services:

- AWS for EC2, RDS, S3 Storage, CloudFront CDN, and Route 53 for domain management.
- CircleCI and GitHub for deployment management.
- LoadBalancer.IO for stress testing.
- Detectify for scanning OWASP security issues.
- AWS Shield for DDoS attack protection.
- Zoonu for performing pentests.
- Manual Pre-Launch Checklist.

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

3. Security Personnel:
   - Collaborate with the Lead Support Engineer and his team to identify and address security concerns during the infrastructure creation process.
   - Review the infrastructure design and provide recommendations for implementing appropriate security measures.
   - Ensure compliance with security policies and industry standards.

## Infrastructure Creation Process

1. Design and Configuration:
   - Lead Support Engineer and his team design the infrastructure components, considering scalability, availability, and security.
   - Select appropriate AWS services, such as EC2, RDS, S3 Storage, CloudFront CDN, and Route 53, based on project requirements.
   - Document the infrastructure design, including architecture diagrams, configurations, and network layouts.

2. Provisioning:
   - Infrastructure team provisions the infrastructure using AWS services, following the documented design and configuration.
   - Ensure that resources are appropriately provisioned, including compute instances, databases, storage, and networking components.
   - Verify that the infrastructure setup aligns with the design and meets project requirements.

3. Deployment and Testing:
   - Developers use CircleCI and GitHub for managing deployments, following the defined deployment processes and workflows.
   - Perform comprehensive testing of the infrastructure to ensure functionality, compatibility, and adherence to project requirements.
   - Use LoadBalancer.IO to stress test the infrastructure, identifying potential bottlenecks and performance issues.

4. Security and Compliance:
   - Use Detectify to scan for OWASP security issues, performing regular security scans on the infrastructure.
   - Ensure that AWS Shield is set up and active across all EC2 servers to provide protection against DDoS attacks.
   - Utilize third-party provider Zoonu for pentesting services, when appropriate and requested by clients.
   - Collaborate with security personnel to address and resolve any security concerns or vulnerabilities.

5. Pre-Launch Checklist:
   - Before launching the infrastructure, perform a manual pre-launch checklist to ensure all necessary configurations and checks are completed.
   - Review the infrastructure setup, security measures, backup and recovery procedures, and monitoring capabilities.
   - Verify compliance with industry regulations and internal policies.

## Non-Compliance and Consequences

Non-compliance with this Infrastructure Creation Policy may result in inconsistent, insecure,
