#Infrastructure Backups and Restoration Policy

This policy document outlines the steps that our organization follows for managing the infrastructure of our web applications. One of the key elements of a robust infrastructure management system is the implementation of an effective backup and restoration policy. In this document, we will outline the various steps and processes that we follow for ensuring that our infrastructure is properly backed up and that we are able to restore it in the event of a disaster.

## Backup Schedule

## Backup Retention

## Backup Testing Process

## Backup Integrity Verification

## Automating Backups

## Manually Performing Backups

## S3 Asset Versioning and Verification

## EC2 Snapshots

## Performing Restores

## System Restart and Recovery Procedures
















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
