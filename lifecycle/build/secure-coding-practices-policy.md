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
