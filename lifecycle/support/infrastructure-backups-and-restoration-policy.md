# Infrastructure Backups and Restoration Policy

This policy document outlines the steps that our organization follows for managing the infrastructure of our web applications. One of the key elements of a robust infrastructure management system is the implementation of an effective backup and restoration policy. In this document, we will outline the various steps and processes that we follow for ensuring that our infrastructure is properly backed up and that we are able to restore it in the event of a disaster.

## 1. Backup Schedule
 - 1.1 The schedule of backups of critical infrastructure components, including databases, configuration files, and application code is to be performed daily.
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
 - 5.1 We use automated backup software to ensure that backups are performed consistently and on a regular basis.
 - 5.2 Our automated backup software is configured to perform backups at regular intervals, as defined by our backup schedule.
 - 5.3 We use a variety of backup software tools, including open-source and commercial software, to ensure that we can meet the needs of our diverse range of web applications.
 - 5.4 Our automated backup software is configured to perform differential or incremental backups, which allow us to minimize the amount of data that needs to be backed up and to reduce the time required to perform backups.
 - 5.5 We have established procedures for monitoring and maintaining our automated backup software, including regular software updates and patches to ensure that it remains up-to-date and effective.
 - 5.6 We maintain a log of all automated backups, including the date and time of the backup, the size of the backup file, and any issues or errors encountered during the backup.
 - 5.7 Our automated backup policy is reviewed regularly to ensure that it remains up-to-date and effective in ensuring the reliability and accuracy of our backups.

## 6. Manually Performing Backups
 - 6.1 In addition to automated backups, we also perform manual backups on a regular basis to ensure that critical data and applications are backed up in a timely manner.
 - 6.2 Manual backups are performed by trained personnel following established procedures, and are typically performed in situations where automated backups may not be sufficient, such as when there are changes to critical data or applications.
 - 6.3 We maintain a log of all manual backups, including the date and time of the backup, the size of the backup file, and any issues or errors encountered during the backup.
 - 6.4 Manual backups are performed using a variety of methods, including file system backups, database backups, and server snapshots.
 - 6.5 We have established procedures for monitoring and maintaining our manual backup procedures, including regular reviews to ensure that backups are being performed effectively and to identify any issues that may require remediation.
 - 6.6 Our manual backup policy is reviewed regularly to ensure that it remains up-to-date and effective in ensuring the reliability and accuracy of our backups.
 - 6.7 The following is the process of performing a manual Backup of an EC2 Instance.
   - 6.7.1 Connect to the EC2 instance using an SSH client or remote desktop tool.
   - 6.7.2 Stop any applications or services that could cause data consistency issues during the backup process.
   - 6.7.3 Determine the location and size of any data and configuration files that need to be backed up.
   - 6.7.4 Use a backup tool, such as rsync or tar, to create a backup of the necessary files and directories.
   - 6.7.5 Verify the integrity of the backup by comparing it to the original data and checking for any errors or inconsistencies.
   - 6.7.6 Transfer the backup to a secure and reliable storage location, such as S3 or an on-premises backup server.
   - 6.7.7 Regularly test the backup by restoring it to a test environment or secondary instance to ensure that it is properly capturing all necessary data and configurations.
   - 6.7.8 Update any backup documentation or policies to reflect the manual backup process and schedule.
   - 6.7.9 Note that the manual backup process may vary depending on the specific application and data being backed up. It's important to carefully review and test your manual backup process to ensure that it is properly capturing all necessary data and configurations, and to regularly review and update your backup policies and procedures to reflect any changes or updates to your infrastructure. Additionally, it's recommended to also use automated backup solutions, such as EC2 snapshots, in conjunction with manual backups to provide additional layers of protection and redundancy.
- 6.8 A manual backup of a MYSQL Database should be taken by performing a MYSQL Dump. As the backup may contain sensitve production data is it is only to be stored in a secure access controlled location. 
- 6.9 A manual code backup can be completed by cloning a version from the gitHub repository.











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
- 8.4 The Process for setting up an EC2 Snapshot is as follows:
  - 8.4.1 Log in to the AWS Management Console.
  - 8.4.2 Navigate to the EC2 Dashboard.
  - 8.4.3 Select the instance you want to create a snapshot of.
  - 8.4.4 Click on the "Actions" button and select "Create Snapshot".
  - 8.4.5 Enter a descriptive name for the snapshot in the "Snapshot Name" field.
  - 8.4.6 Review the snapshot configuration settings, such as the "Description" and "Tags", and modify them as needed.
  - 8.4.7 Click on the "Create Snapshot" button to start the snapshot creation process.
  - 8.4.8 Monitor the snapshot creation process in the "Snapshots" section of the EC2 Dashboard.
  - 8.4.9 Once the snapshot has been created, verify its status and properties, such as the size and creation date.
  - 8.4.10 Use the snapshot to restore the instance to a previous state, or to create a new instance from the snapshot.
  - 8.4.11 Regularly review your snapshot schedule and retention policies to ensure that you are properly backing up your EC2 instances.
  - 8.4.12 Note that the exact process may vary depending on the AWS region, instance type, and configuration settings. It's important to review the AWS documentation and best practices for EC2 snapshots to ensure that you are properly configuring and managing your EC2 instances.

## 9. Performing Restores
 - 9.1 Restores are the process of retrieving and applying backed-up data and applications to a production environment, typically after a failure or disaster has occurred.
 - 9.2 Our restore process involves identifying the cause of the failure or disaster, identifying the appropriate backup to restore, and applying the backup to the production environment in a controlled and tested manner.
 - 9.3 We have established procedures for performing restores, including prioritizing critical systems and data, identifying dependencies between systems and data, and ensuring that all necessary components are restored in the correct order.
 - 9.4 We regularly test our restore procedures to ensure that they are effective and efficient, and to identify any issues that may require remediation.
 - 9.5 We maintain a log of all restore activities, including the date and time of the restore, the size and type of data being restored, and any issues or errors encountered during the restore process.
 - 9.6 Our restore policy includes procedures for verifying the integrity of restored data, including validating checksums and performing data consistency checks.
 - 9.7 We use access controls and encryption to ensure the security of restored data, and regularly review and update our security policies to ensure that our restored data remains protected.
 - 9.8 Our restore policy includes procedures for communicating with stakeholders and customers in the event of a significant restore event, including providing regular updates on progress and expected restoration times.

## 10. System Restart and Recovery Procedures
- 10.1 System restart and recovery procedures are the processes and procedures used to restart and recover our web application infrastructure after a failure or disaster has occurred.
- 10.2 Our system restart and recovery procedures include identifying the cause of the failure, assessing the impact of the failure, and determining the appropriate actions to restore the system to a fully functional state.
- 10.3 We maintain a detailed system inventory that includes information on all hardware, software, and network components, as well as their dependencies and configurations.
- 10.4 We regularly test our system restart and recovery procedures to ensure that they are effective and efficient, and to identify any issues that may require remediation.
- 10.5 Our system restart and recovery procedures include identifying the critical systems and data that must be restored first, and prioritizing these systems and data for restoration.
- 10.6 We have established procedures for restarting and recovering our systems, including testing backups, rebuilding configurations, and restoring data from backups.
- 10.7 We maintain a log of all system restart and recovery activities, including the date and time of the event, the cause of the failure, and the actions taken to restore the system to a fully functional state.
- 10.8 Our system restart and recovery procedures include procedures for communicating with stakeholders and customers in the event of a significant system outage, including providing regular updates on progress and expected restoration times.
- 10.9 We use access controls and encryption to ensure the security of our systems and data during the restart and recovery process, and regularly review and update our security policies to ensure that our systems remain protected.





NOTES OF THINGS TO PUT INTO THIS DOCUMENT

Testing the Integrity of an EC2 Snapshot:

Log in to the AWS Management Console.
Navigate to the EC2 Dashboard.
Select the snapshot you want to test.
Click on the "Actions" button and select "Create Volume".
Enter the desired configuration settings, such as the "Volume Type" and "Size".
Select the appropriate availability zone for the volume.
Click on the "Create Volume" button to start the volume creation process.
Once the volume has been created, select it in the Volumes section of the EC2 Dashboard.
Click on the "Actions" button and select "Attach Volume".
Select the appropriate instance and device for the volume.
Connect to the instance and verify that the volume is properly attached and functioning.
Verify the integrity of the data on the volume, such as by running file system checks or comparing it to the original instance.
If the data on the volume is consistent with the original instance, the integrity of the snapshot is confirmed.
Detach and delete the volume once testing is complete.
Regularly test the integrity of your EC2 snapshots to ensure that they are properly backing up your data and applications.
Note that the exact process may vary depending on the AWS region, instance type, and configuration settings. It's important to review the AWS documentation and best practices for EC2 snapshots to ensure that you are properly testing and verifying the integrity of your snapshots.

















