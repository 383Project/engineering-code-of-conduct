 #Backup process to be defined as part of this documentation
 
 
 The database from database servers are currently being backed up every 24 hours, at 4am GMT, and are held for a maximum of 35 days.
The backup schedule runs every 24 hours.
The backups are stored on AWS’ RDS service managed by Amazon which are encrypted.
Backups are tested regularly by restoring the data to an isolated environment and restoring to verify integrity.
