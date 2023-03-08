 #Backup process to be defined as part of this documentation
 
 
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
