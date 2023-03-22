# Infrastructure Backups and Restoration Policy

This policy document outlines the steps that our organization follows for managing the infrastructure of our web applications. One of the key elements of a robust infrastructure management system is the implementation of an effective backup and restoration policy. In this document, we will outline the various steps and processes that we follow for ensuring that our infrastructure is properly backed up and that we are able to restore it in the event of a disaster.

## 1. Backup Schedule
 - 1.1 Daily backups of critical infrastructure components, including databases, configuration files, and application code
 - 1.2 Automated backups are scheduled to run during off-peak hours to minimize the impact on system performance and user experience
 - 1.3 Manual backups are performed as needed to ensure all critical components are backed up in a timely manner
 - 1.4 Backups are performed in multiple tiers to ensure redundancy and reduce the risk of data loss. For example, we may perform a daily backup to a local server and a weekly backup to an off-site location. (Work In Progress to introduce this).
 - 1.5 Backups are performed on a rolling basis, so that a full backup of all critical components is completed over a specified time period (e.g. one week).
 - 1.6 Our backup schedule is reviewed regularly to ensure it remains up-to-date and relevant, taking into account changes in our infrastructure or business needs.
 - 1.7 We have established procedures for notifying key personnel in the event of a failed backup or other issue that could impact the integrity of our backups.

## 2. Backup Retention
 - 2.1 We retain backups for a period of 35 days to ensure that we have access to recent backups in the event of a disaster or other issue that requires data restoration.
 - 2.2 Backups that are older than 35 days are automatically deleted, unless they are required for regulatory or legal purposes.
 - 2.3 In the event that backups are required for regulatory or legal purposes, we have established procedures for storing these backups in a secure location and for ensuring that they are easily accessible if needed.
 - 2.4 Our backup retention policy is reviewed regularly to ensure that it remains up-to-date and compliant with all relevant regulations and legal requirements.

## 3. Backup Testing Process
 - 3.1 Regular tests are performed to ensure that backups can be restored in the event of a disaster or other issue that requires data restoration.
 - 3.2 Backup testing is performed on a regular basis, at least once per quarter, to ensure the reliability and accuracy of our backups.
 - 3.3 Tests are made once per year per application.
 - 3.4 Testing is performed by a Support team engineer following established procedures, and includes the restoration of data from backups to a test environment to ensure that all critical data and applications can be restored successfully.
 - 3.5 We maintain a backup testing log that tracks the status of all backup tests, including the date and time of the test, the results of the test, and any issues or errors encountered during the test. (To implement at a later date, for future review).
 - 3.6 Backup testing logs are reviewed regularly to ensure that all tests are being completed successfully and to identify any issues that may require remediation.(To implement at a later date, for future review).
 - 3.7 Our backup testing policy is reviewed regularly to ensure that it remains up-to-date and effective in ensuring the reliability and accuracy of our backups.

## 4. Backup Integrity Verification
 - 4.1 Annual integrity checks are performed to ensure that backups are free from corruption and can be relied upon in the event of a disaster or other issue that requires data restoration.
 - 4.2 Integrity checks are performed on all Web application backups we store, including those stored locally and those stored off-site, to ensure that all copies of data are accurate and complete.
 - 4.3 

## 5. Automating Backups

## 6. Manually Performing Backups

## 7. S3 Asset Versioning and Verification
- 7.1 We use Amazon S3 to store backup data and other critical assets, and enable versioning to ensure that all versions of our data are retained and can be easily restored as needed.
- 7.2 We have established procedures for verifying the integrity of S3 assets, including regular checks to ensure that all versions of data are complete and accurate.
- 7.3 We regularly review our S3 asset versioning and verification procedures to ensure that they remain effective and up-to-date, and to identify any issues that may require remediation.
- 7.4 We have established procedures for restoring S3 assets, including restoring previous versions of data and verifying the integrity of restored data.
- 7.5 We use access controls and encryption to ensure the security of S3 assets, and regularly review and update our security policies to ensure that our S3 assets remain protected.

## 8. EC2 Snapshots
- 8.1 We use Amazon EC2 snapshots to create backups of our virtual machines (VMs) and ensure that we can restore them quickly in the event of a failure.
- 8.2 We have established procedures for verifying the integrity of EC2 snapshots, including regular checks to ensure that all snapshots are complete and accurate.
- 8.3 We use access controls and encryption to ensure the security of EC2 snapshots, and regularly review and update our security policies to ensure that our EC2 snapshots remain protected.

## 9. Performing Restores

## 10. System Restart and Recovery Procedures
















Backup process to be defined as part of this documentation
 
 
 The database from database servers are currently being backed up every 24 hours, at 4am GMT, and are held for a maximum of 35 days.
The backup schedule runs every 24 hours.
The backups are stored on AWS’ RDS service managed by Amazon which are encrypted.
Backups are tested regularly by restoring the data to an isolated environment and restoring to verify integrity.

      - [backup schedule]
      - [backup frequency]
      - [where are they stored]
      - [backup testing process in an isolated environment]
      - [backup integrity varifification]
      - [S3 Asset versioning and verification]
      - [Automating backups]
      - [performing backups]
      - [performing restores]
      - [system restart and recovery percedures]
