Handling of Information Policy

## Policy Statement

Handling of Information Policy outlines guidelines and procedures for the proper processing, handling, and protection of sensitive information by the engineering team. This policy emphasizes the importance of confidentiality, integrity, and availability of information and aims to ensure compliance with applicable laws, regulations, and industry standards.

## Applicable Regulations and Standards

Handling of Information Policy outlines guidelines and procedures for the proper processing, handling, and protection of sensitive information by the engineering team. This policy emphasizes the importance of confidentiality, integrity, and availability of information and aims to ensure compliance with applicable laws, regulations, and industry standards, including but not limited to:

- General Data Protection Regulation (GDPR)
- Health Insurance Portability and Accountability Act (HIPAA)
- Payment Card Industry Data Security Standard (PCI-DSS)

## Roles and Responsibilities

1. Engineering Team Members:
   - Understand and comply with the policies and procedures outlined in the Handling of Information Policy.
   - Process and handle sensitive information in accordance with the defined guidelines and procedures.
   - Report any suspected security incidents or breaches to the designated security officer or relevant authority.

2. Engineering Managers:
   - Promote and enforce compliance with the Handling of Information Policy within the engineering team.
   - Provide necessary resources and training to ensure understanding and implementation of information handling practices.
   - Support incident response and coordinate necessary actions in the event of a security incident or data breach.

3. Security Officer:
   - Oversee the implementation and compliance of information handling practices within the engineering team.
   - Conduct regular audits and assessments to ensure adherence to the policy.
   - Provide guidance, training, and support for secure handling of information.

## Confidentiality and Access Control

1. Protect confidential information from unauthorized access or disclosure:
   - Limit access to sensitive information on a need-to-know basis.
   - Use strong authentication mechanisms to control access to systems and data.
   - Implement role-based access control to ensure appropriate access rights.
   - Encrypt sensitive information during storage and transmission, as required by regulations and policies.

2. Ensure the proper storage and disposal of confidential information:
   - Securely store physical documents containing sensitive information.
   - Dispose of information in a manner that prevents unauthorized retrieval or reconstruction.

3. Protect access credentials:
   - Use unique, complex passwords or passphrase for authentication.
   - Use two factor authentication where available.
   - Avoid sharing or storing passwords in plain text and use 1 Password Vaults to securely store these.
   - Regularly update passwords and credentials, especially in case of personnel changes.

## Specific Handling of Information Practices

- The use of production databases:
  - The use of production databases is strictly prohibited when building new functionality or features in a long-term development environment.
  - Development teams must utilize separate development or QA databases for testing and development purposes.
  - Production databases should only be accessed for specific security patching or debugging purposes where data is likely to be the cause. This requires the presence of 2 engineers, one of which needs to be a mid-level engineer or higher, for validation and verifcation of the processes before action is taken.
  - When accessing production databases for these purposes, every effort should be made to avoid accessing or exposing sensitive data.
  - When working on copies of production database data, all personally identifiable data must be anonymised before importing it into a local development database.
  - Once the debugging or security patching is complete and a fix is in place, any personally identifiable data accessed from the production database must be immediately removed from the developer's local computer or anonymised making it unidentifiable.

- Access to GitHub:
  - Access to GitHub repositories is granted on a need-to-know basis.
  - Only team members who require access for their specific roles and responsibilities are granted permission to GitHub repositories.
  - Access to GitHub repositories must be requested and approved by the Head of Engineering or the Lead Support Engineer.
  - Team members granted access to GitHub repositories are responsible for adhering to the organization's code of conduct and security practices when interacting with the repositories.

- Protection of Confidential Data:
  - Under no circumstances should confidential data be held in a publicly accessible environment.
  - Confidential data should be stored in secure, restricted-access systems and environments, following the organization's data protection guidelines.
  - Data transmission involving confidential information should be encrypted using approved encryption protocols and methods.
  - Any accidental exposure or unauthorized disclosure of confidential data must be reported immediately to the designated security officer or incident response team for appropriate action.

- Secure Coding Practices:
  - See our secure coding policy here.

- Data Privacy and Consent:
  - Respect user privacy and obtain appropriate consent for collecting, processing, and storing personal data in compliance with applicable privacy laws and regulations.
  - Minimize the collection and storage of personally identifiable information (PII) to only what is necessary for the intended purpose.

- Secure Development Environment:
  - See our secure development environment policy here.

- Test Data Management:
  - Use anonymized or synthetic test data instead of real production data whenever possible to minimize the exposure of sensitive information during development and testing.
  - Ensure that test data containing sensitive or personally identifiable information is securely stored, protected, and removed after its intended use.

- Third-Party Libraries and Dependencies
  - Vet and assess the security and privacy practices of third-party libraries, frameworks, and dependencies before integrating them into the codebase.
  - Regularly update and patch third-party components to address known security vulnerabilities.
 



