# Engineering Code Of Conduct

Welcome to this comprehensive document that covers all critical processes within Engineering development. As you read through, you will find a detailed description of the engineering processes of the engineering development lifecycle. This document outlines the essential steps that are involved in the development of engineering projects, ensuring that you have a clear understanding of each phase.

We have also included an in-depth explanation of risk process assessments, highlighting their importance in mitigating potential project risks. Additionally, we provide you with a thorough understanding of the basic operating procedures for engineering, ensuring that you have a solid foundation for successful project completion.

Furthermore, we have included information on the best secure coding practices that are essential in maintaining the security and integrity of your engineering projects. This document is designed to provide you with a complete understanding of all the critical processes involved in engineering development, ensuring that you have the knowledge and skills needed to successfully complete your engineering projects.

## Table of contents

- ### The Development Lifecycle
  The engineering lifecycle refers to the series of processes and activities that an engineering project undergoes from its conceptualization and design to its development, testing, deployment, and maintenance.    

  - #### Discovery
    Discovery in the engineering lifecycle refers to the initial phase of the project where requirements are gathered, the problem is defined, and the feasibility of the project is assessed to determine whether it is worth pursuing. The following information for discovery is for a guide purpose only as not every project requires these documents this varies to a project complexity and needs. 
    
    - [Process of creating a formal estimation](/)
    - [Process of creating a formal infrastructure quote](/)
    - [Creation of Software requirements specification](/)
      - [security requirements in the design phase] 
    - [Creation of Network Diagrams](/)
    - [Creation of Flow Diagrams](/)
  
  - #### Build
    Build in the engineering lifecycle refers to the phase where the design and development of the project take place, including the creation of prototypes and the implementation of software and hardware.
    
    - [Version Control Policy](/)
      - [secure repositories] 
    - [Code Review Policy](/)
    - [Secure Coding Practices Policy](/)
      - [secure coding guidelines for each programming language]
      - [security checkpoints in project milestones]
      - [ensuring developers are capable of avoiding, finding and resolving vulnerabilities]
    - [Error handling and exceptions Policy](/) 
    - [Development Environments Policy](/)
      - [the security of the development environment]
      - [security in the software development methodology]
    - [Recording Technical Debt Policy](/)
    - [Documentation creation Policy](/)
    
    As this document covers the minimum global requirements of the whole engineering team futher processes and operation information can be seen an a granular level in the following areas:
    
    - [Backend Engineering Team Operation Policy](/)
    - [Frontend Engineering Team Operation Policy](/)
  
  - #### Quality Control
    Quality Control in the engineering lifecycle refers to the process of ensuring that the final product or solution meets the expected standards, specifications, and requirements through various testing and inspection methods.
    
    - [Test Strategy Policy](/)
    - [Compatability testing Policy](/)
    - [Resgression testing Policy](/)
    - [Defect Creation Policy](/)
    - [User Acceptance testing Policy](/)
    
     As this document covers the minimum global requirements of the whole engineering team futher processes and operation information can be seen an a granular level in the following areas:
    - [Quality Assurance Team Operation Policy](/)

  - #### Deployment
    Deployment in the engineering lifecycle refers to the phase where the final product or solution is released, installed, and made available for use by the end-users, including the necessary training, documentation, and support to ensure a successful adoption.
    
    - [Prelaunch Checklist Policy](/)
    - [Infrastructure Logging Policy]
      - [90 days of logs for servers, what todo for serverless]
      - [protection of Log documents]
      - [where do we store all our logs for 90 days] 
    - [Deployment Policy](/)
    
    As this document covers the minimum global requirements of the whole engineering team futher processes and operation information can be seen an a granular level in the following areas:
    - [Support Team Operation Policy](/)
  
  - #### Support
    Support in the engineering lifecycle refers to the ongoing maintenance and enhancement of the product or solution, including bug fixes, upgrades, and additional features, to ensure that it continues to meet the changing needs and requirements of the end-users.
    
    - [Maintainance Policy](/)
      - [server maintainance procedures]
    - [Security and Compliance Policy](/)
      - [Intrusion detection]
      - [Server Clock on servers]
      - [Vulnerabilities]
        - [Logging Vulnerabilities - Document to register them in]
          - [Description of the issue]
          - [Date, time, and location of the issue.]
          - [Person who discovered the issue.]
          - [How the issue was discovered.]
          - [Known evidence of the issue.]
          - [The affected system(s).]
          - [Affected number of users.]
        - [Timelines are defined to react to notification]
      - [required application security knowledge]
    - [Infrastructure Creation Policy](/)
      - [installation and configuration of systems]
      - [IT infrastructure upgrades]
    - [Infrastructure backups and restoration Policy](/)
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
    - [Infrastructure monitoring Policy](/)
      - [Monitoring Procedures]  
    - [Handling of information Policy](/)
      - [processing and handling of information]
      - [Stripping Sensitive data on QA Servers]
      - [IP Restrictions around access Staging and QA Servers to  protect content] 
    - [Infrastructure scheduling policy](/)
      - [scheduling requirements] 
      - [SLA Coverage and issue scoring]
    - [Auditing Policy](/)
      - Audit Trails for System access to sensitive data
    
    As this document covers the minimum global requirements of the whole engineering team futher processes and operation information can be seen an a granular level in the following areas:
    - [Support Team Operation Policy](/)

- ### General Engineering Operation Procedures

  - [Engineering Communication Policy](/)
    - [Issue Tracking]
    - [Jira Commenting and linking]
    - [Pull Requests]
    - [Slack]
    - [Email]
  - [Contractor and Third Parties Policy](/)
    - [the use of outsourced development and a requirement for equivalent security to be addressed in agreements with third party developers] 
  - [Engineering Change Request Policy](/)
    - [An incident or problem]
      - [New software functionality]
        - [Git Commit messaging]
        - [pull request and code review]
        - [Major functionality roll back plan] 
      - [New or changed legislation]
      - [Changed business requirements]
      - [Retirement of service] 
  - [Engineering Risk Assessment Policy](/)
    - [Development Process Risk Assessment]
      - [User Authentication]
      - [Access types]
      - [Informing users on process]
      - [Informing users on responsibility]
      - [Requirements derived from buisness processes such as transaction logging, monitoring, non-repudiation requirements.]
      - [Requirements mandated by other security controls, e.g. interfaces to logging and monitoring or data leakage detection systems. ]
