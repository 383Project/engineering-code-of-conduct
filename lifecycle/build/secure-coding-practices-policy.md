# Secure Coding Practices Policy
At 383 Project, we recognize that secure coding practices are essential to ensure the confidentiality, integrity, and availability of our software products and protect our customers' data. This policy outlines our secure coding practices for Javascript and PHP programming languages

## 1. Purpose 
- 1.1 The purpose of this policy is to establish secure coding practices for the development of software applications at 383 Project.
- 1.2 This policy aims to ensure that all code developed by 383 Project is secure and free from vulnerabilities that could be exploited by unauthorized individuals or groups.
- 1.3 By implementing secure coding practices, 383 Project aims to protect its systems and data from malicious attacks and maintain the confidentiality, integrity, and availability of information.

## 2. Scope 
- 2.1 This policy applies to all developers, contractors, and third-party vendors who develop software applications on behalf of 383 Project.
- 2.2 This policy covers all programming languages used by 383 Project, including Javascript and PHP, and all databases, including mySQL. 
- 2.3 This policy outlines the security requirements in the design phase, secure coding guidelines for each programming language used, security checkpoints in project milestones, and the use of third-party code and outsourced development.
- 2.4  Additionally, this policy covers the security of the development environment and repositories hosted on GitHub, and the training and education program for staff to continuously improve their knowledge and skills in secure coding practices.

## 3. Secure Coding Guidelines 

 -  ### 3.1 JavaScript
    - 3.1.1 Avoid using 'eval()' or 'setTimeout()' with a string argument that contains user input. 
    - 3.1.2 Use 'encodeURIComponent()' or 'encodeURI()' to encode user input in URLs or HTTP requests.
    - 3.1.3 Use 'Content-Security-Policy' header to mitigate the risks of cross-site scripting (XSS) attacks.
    - 3.1.4 Use 'Strict Mode' to enable safer and more optimized code.
    - 3.1.5 Use built-in security features of the framework you're using (e.g., 'helmet' for Express.js).
    - 3.1.6 Use 'crypto' module for generating secure random numbers, hashing passwords, and encrypting data.
    - 3.1.7 Use 'try-catch' blocks for handling errors and prevent information leakage.

 -  ### 3.2 PHP
    - 3.2.1 Use prepared statements or PDO (PHP Data Objects) to prevent SQL injection attacks.
    - 3.2.2 Use 'password_hash()' and 'password_verify()' functions for secure password hashing and storage.
    - 3.2.3 Use 'filter_var()' or 'preg_match()' to validate user input and prevent common attacks (e.g., XSS, CSRF).
    - 3.2.4 Use session_regenerate_id() to prevent session fixation attacks.
    - 3.2.5 Use HTTPS and HSTS (HTTP Strict Transport Security) to secure the communication between the client and the server.
    - 3.2.6 Use open_basedir and disable_functions directives to restrict access to sensitive files and functions.
    - 3.2.7 Use 'error_reporting()' to hide error messages from public users and send them to logs instead.
    
 -  ### 3.3 MySQL
    - 3.3.1 Use prepared statements or stored procedures to prevent SQL injection attacks.
    - 3.3.2 Avoid using dynamic SQL queries whenever possible.
    - 3.3.3 Use strong and unique passwords for database accounts and enable secure connections with SSL/TLS.
    - 3.3.4 Restrict access to the database only to authorized users and regularly monitor and audit the database logs for suspicious activities.

 -  ### 3.4 Bash Scripting
    - 3.4.1 Use strict mode to enable safer and more predictable scripts.
    - 3.4.2 Avoid using unsafe constructs such as eval or backticks.
    - 3.4.3 Use double quotes to prevent word splitting and pathname expansion.
    - 3.4.4 Use the exit command to terminate the script when an error occurs.
    - 3.4.5 Avoid hard-coding sensitive information such as passwords or API keys.
    - 3.4.6 Use permissions to restrict access to sensitive scripts and files.

Note: These guidelines are not exhaustive and should be supplemented with specific best practices based on the project's needs and context. The Engineering teams individual departments has further expantion in this area which details can be found here:

[Frontend Engineering Code of Conduct](/)

[Backend Engineering Code of Conduct](/)

[Support Engineering Code of Conduct](/)

## 4. Security Checkpoints

- 4.1 Security checkpoints are implemented throughout the development lifecycle to ensure that security is a fundamental part of the development process. These checkpoints serve as milestones to identify and address potential security issues at each stage of the process. The check points vary for each product but as a rule happen durring the following stages:

  - 4.1.1 Manual QA Testing within a QA enviroments throughout the build cycle.
  - 4.1.2 Automated security scan across the Staging enviroment prior to feature deployment.
  - 4.1.2 Post deployment security scan. 
  - 4.1.3 Depending if the client is paying for active maintainance or a security plan we will perform the neccessary scans to the plan purchased.
  - 4.1.4 All clients are made aware of the risks that are associated without undertaking maintainance.
  - 4.1.5 Clients are free to use their own securirty providers and third parties to perform any pentesting task as long as they provide prior warning.

- 4.2 Security Requirements Analysis: Security requirements analysis must be conducted in the design phase of the development process. This analysis will identify the necessary security controls to be implemented throughout the application's lifecycle.
- 4.3 [Secure Coding Guidelines](): Secure coding guidelines must be followed by all developers during the development phase. These guidelines will ensure that the code is written securely and minimize the risk of introducing vulnerabilities or exploits. 
- 4.4 [Code Reviews and Testing](https://github.com/383Project/engineering-code-of-conduct/blob/main/lifecycle/build/code-review-policy.md): Code reviews and testing must be conducted before and after deployment to identify and address any security issues. Regular vulnerability scanning and testing must also be performed post-deployment.
- 4.5 Where applicable and a client is subscribed to 383 Projects [maintainance](https://github.com/383Project/engineering-code-of-conduct/blob/main/lifecycle/support/maintainance-policy.md) offering Ongoing Vulnerability Scanning and Testing: Regular vulnerability scanning and testing must be performed post-deployment to identify and address any security issues that may arise.

## 5. Development Environment
The following are examples of how secure coding practices that are in place however you can see the full development enviroment policy [here](https://github.com/383Project/engineering-code-of-conduct/blob/main/lifecycle/build/development-enviroments-policy.md).

- 5.1 All development environments must be secured by default and access should be granted on a need-to-know basis. Access to these enviroments will match the controls used within our Github version control document found [here](https://docs.google.com/spreadsheets/d/1FMMUOr2p9ogBBPHKf4qSvZTrQyCUd1Z0cudHJ8x2KdA)
- 5.2 All development environments must have the latest security updates and patches installed.
- 5.3 Developers must not use development environments to access or enter sensitive data.
- 5.4 All data in development environments must be protected with at a minimum a HTACCESS password. There must not be any public facing QA,Staging or development build enviroments. 
- 5.5 Developers must report any security vulnerabilities or incidents related to development environments immediately to the appropriate team.

## 6. Design Phase
- 6.1 Security requirements must be integrated into the design phase of all software development projects.
- 6.2 Design reviews should be conducted to identify potential security issues before development begins.
- 6.3 Design documentation should include security requirements and considerations, such as encryption requirements, access controls, and secure coding practices.
- 6.4 The design phase should include testing and validation of security controls before development begins.
- 6.5 Design decisions must be documented and reviewed regularly to ensure they meet the organization's security requirements.

## 7. Code Repositories
- 7.1 Code repositories should be hosted on a secure platform, such as GitHub, with appropriate access controls in place. All code managed by clients on behalf of 383 must be only stored in 383 Projects github account and the appropriate controls must be applied. The controls for github can be found [here](https://docs.google.com/spreadsheets/d/1FMMUOr2p9ogBBPHKf4qSvZTrQyCUd1Z0cudHJ8x2KdA). 
- 7.2 All code changes must be tracked through version control to maintain a clear audit trail.
- 7.3 Developers should follow secure coding practices when committing code to the repository, including avoiding hard-coded passwords or sensitive information, using parameterized queries to prevent SQL injection attacks, and avoiding the use of insecure functions or libraries.
- 7.4 Only authorized personnel should be granted access to code repositories, and access should be granted on a need-to-know basis.
- 7.5 Developers should use strong passwords and two-factor authentication when accessing code repositories to prevent unauthorized access.
- 7.6 Third-party code and libraries must be regularly reviewed if a project is in current active development or has any preventative measured maintainance package applied to it.

## 8. Secure Code Training
- 8.1 All developers must complete an initial security training course before starting any development work. This is completed upon 383 Projects onboarding process. 
- 8.2 The company will provide access to online training resources, such as Udemy, for developers to use for their ongoing security education.
- 8.3 Security training will cover topics such as secure coding practices, vulnerability detection and mitigation, and secure development lifecycles.
- 8.4 Developers are expected to apply the security best practices they learn in training to their daily work.
- 8.5 The company will encourage and support developers in obtaining relevant security certifications.
- 8.6 Developers are encouraged to share security knowledge and best practices with their colleagues, and to discuss security concerns and issues openly with their team leads or security specialists.

## 9. Outsourced Development

## 10. Third-Party Code


By following this policy, we can ensure that our software products are developed using secure coding practices and protect our customers' data from security vulnerabilities.






