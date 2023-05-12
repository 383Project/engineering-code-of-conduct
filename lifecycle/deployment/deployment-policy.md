# Deployment Policy

## Purpose

The purpose of this Deployment Policy is to define guidelines and procedures for the deployment process of projects within our organization. This policy covers the use of Docker images for configuration consistency, branch configuration in Git repositories, infrastructure setup in AWS Cloud Services, Circle CI integration for build and deployment automation, approval mechanism for production deployments, access control management, maintenance of pipelines and configurations, monitoring of production sites, issue resolution, and rollbacks.

## Scope

This policy applies to all projects and team members involved in the deployment process, including the support team, senior engineers, and lead backend engineers.

## Deployment Process

The deployment process follows the steps outlined below:

1. Docker Image and Configuration:
   - All projects should have a Docker image that approximates the same configuration as the production server.
   - The support team or lead backend engineer initially sets up and configures the Docker image to ensure consistency.

2. Branch Configuration in Git:
   - Git repositories have three core branches: QA, Staging, and Production.
   - A senior engineer or the support team configures these branches at the start of a project.

3. Infrastructure Setup in AWS Cloud Services:
   - For new builds and clients, the support team configures the infrastructure based on the agreed signed-off quotation within AWS Cloud Services.
   - All projects must have their own dedicated AWS account, even if there are one or more existing accounts belonging to the same client.

4. Circle CI Integration:
   - The support team configures and integrates Circle CI into the project.
   - A build and deployment script is created in Circle CI to trigger builds when future pull requests are merged into the three branch types (QA, Staging, and Production).
   - Circle CI configurations must rely on the organization's deployment package to remove inconsistancies between deployments and allow for speedier response times from the Support Team.

5. Production Deployment Approval:
   - The Production branch is always protected with an approval mechanism within Circle CI.
   - Merging changes into the Production branch requires approval within Circle CI before the build takes place.

6. Access Control Management:
   - Access to Circle CI approvals and the pipeline is managed based on access types within Git.
   - Access control management is in place to ensure proper authorization and permissions.

7. Pipeline Maintenance:
   - The support team is responsible for the upkeep and maintenance of pipelines and configurations for all projects.
   - All projects must utlisize the lastest version of the organizastion's deployment package where possible.
   - Additional requests of the organizastion's deployment package cannot be unjustly rejected without cause.

8. Monitoring and Issue Resolution:
   - All production sites are monitored using Status Cake, which observes the website's status.
   - In the event of a failure during the build process, Status Cake alerts the support team to investigate the issue.
   - The support team is responsible for timely resolution of deployment issues.

9. Rollback and Recovery:
   - In cases where a feature causes a breakage or an urgent rollback or recovery is required, Circle CI provides the ability to handle rollbacks.
   - All developers with access to a git repository have the ability to initiate rollbacks within Circle CI, leveraging its deployment history.

## Non-Compliance

Non-compliance with this Deployment Policy may result in deployment errors, inconsistencies, or delays, impacting project timelines and quality. Non-compliant individuals may be subject to disciplinary action.

By following this Deployment Policy, we ensure a standardized and efficient deployment process, improved configuration consistency, automated build and deployment workflows, proper monitoring, and timely issue resolution and rollbacks.
