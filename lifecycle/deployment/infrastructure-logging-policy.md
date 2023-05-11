# Logging Policy for Infrastructure and Third-Party Services

## Purpose

The purpose of this logging policy is to define the guidelines and procedures for logging activities and storing log data for our infrastructure and third-party services. This policy covers logging practices for code changes, server error messages, exception messages, server logs, engineer responsibilities, audit log reports, and confidential information handling.

## Scope

This policy applies to all members of the organization who have access to our infrastructure and third-party services and are involved in logging activities and log data management.

## Logging Practices

The following logging practices are in place for our infrastructure and third-party services:

- Code Changes:
  - All logging for our third-party services can be found in the applications themselves.
  - GitHub holds a full historical record of all code changes and actions performed.
  - Engineers are expected to utilize appropriate logging mechanisms within the applications for capturing relevant information.

- Server Error Messages and Exception Messages:
  - BugSnag and Sentry are used to record samples of server error messages and activity.
  - BugSnag and Sentry hold a full historical record of exception messages.
  - Logging is implemented across production, QA, and staging servers to capture error messages and exceptions.

- Server Logs:
  - Server logs can be found on the EC2 servers directly.
  - Engineers review these logs in the event of failure or suspicious activity flagged by PagerDuty, Status Cake, or internally raised incidents.

## Engineer Responsibilities

Engineers are expected to adhere to the following responsibilities regarding logging activities:

- Engineers are prohibited from erasing or deactivating logs of their own activities.
- Engineer access to logging platforms and credentials is managed with 1Password.

## Audit Log Reports and Confidential Information Handling

The following practices are implemented for audit log reports and handling confidential information:

- Audit log reports are classified as confidential information.
- Audit log reports must be handled in line with the requirements of our Information Security Management System (ISMS) for handling confidential information.
- The Support team is responsible for the management of logs when they are retrieved.

## Non-Compliance

Non-compliance with this logging policy may result in data loss, compromised system security, or regulatory violations. Non-compliant individuals may be subject to disciplinary action.

By following this Logging Policy for Infrastructure and Third-Party Services, we ensure consistent and secure logging practices, protect log data integrity, and maintain compliance with data protection requirements.
