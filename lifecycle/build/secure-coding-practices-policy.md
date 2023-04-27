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

### 3.1  Treat User Input with Caution
As a developer, always follow the principle of "Never Trust User Input." Ensuring that you thoroughly sanitize user input is a critical step in preventing security vulnerabilities. To enhance the security of your applications, adhere to the following practices:

- Consistently sanitize user input to avoid potential security issues, such as Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Remote File Inclusion (RFI), or SQL Injection vulnerabilities.
- Validate user input by checking for the correct format and range before using it in your application.
- Similarly, sanitize output before sending it to a web browser, mitigating risks associated with unsanitized data.

### 3.3 Sanitize Input Early, Sanitize Output Late
As a developer, you should always remember the adage: "Sanitize input early, sanitize output late." Following this principle will enhance your application's security and usefulness. Here's how to apply it:

- Sanitize user input upon arrival: Data from user inputs, like comments, blog posts, and forms, needs to be sanitized as soon as it enters your application. This step ensures that any potential security risks are addressed before the data interacts with other parts of your system.
- Sanitize output before sharing: When displaying user-generated content to other visitors, such as comments, posts, or survey results, always sanitize the data again, even if it was already sanitized upon arrival. This practice ensures that the data remains secure throughout its lifecycle.
- Sanitize output as late as possible: By sanitizing the output just before it's sent to the web browser, you minimize the chances of modifications after the sanitization process. This approach allows you to sanitize data only once, right before it's displayed to users.

### 3.4 Handling Uncontrolled Input
As a developer, it's essential to remember that user input may not always be under your control. You might receive data from an API, a data feed, or another application, which may or may not have sanitized the data. To maintain your application's security in these situations, follow these steps:

- Re-sanitize external data when possible: Ideally, sanitize any data that enters your application, even if it's from an external source. This ensures that potential security risks are addressed, regardless of the origin of the data.
- Prioritize output sanitization: If re-sanitizing input isn't feasible due to performance reasons or the complexity of the data, always sanitize the output. This step is crucial for maintaining security, as external data might contain malicious code.
- Be vigilant with external sources: Treat data from external sources with the same level of caution as data from your own application. This mindset helps you maintain a secure environment for your application and its users.

### 3.5 Managing Output to External Applications
As a developer, you may sometimes send user data from your website to an external application, such as through a REST API. To ensure the security of your data and protect users, follow these best practices:

- Sanitize user input early: Always sanitize user input as soon as it arrives in your application. This step helps ensure that any potential security risks are addressed before the data is sent to the external application.
- Don't assume external sanitization: Never assume that developers using your API or external applications are sanitizing the data on their end. To maintain the highest level of security, sanitize user input data before sending it through the API.
- Prioritize user safety: By diligently sanitizing user input before sharing it with external applications, you contribute to a safer environment for users of your data and protect them from potential threats.

### 3.6 Sanitizing, Validating, and Escaping Input
To ensure the safety of data in your application, it's essential to understand the differences between validation, sanitization, and escaping. Here's how to implement these techniques effectively:

- Validation: Confirm that the data is of the correct type and format. For instance, use PHP's is_numeric() function to verify that a cart item count is an integer. If validation fails, return an error message to the user. Validation helps maintain data integrity and prevents errors in your application.
- Sanitization: Remove any harmful data from user input. This might involve stripping out <script> tags or removing quotes from an HTML attribute. Sanitization ensures that malicious data doesn't compromise your application's security.
- Escaping: Convert potentially harmful data into a harmless format. For example, if a user submits an input containing a <script> tag, you can escape it by converting the greater and less than signs into their respective HTML entities (< and >). Escaping prevents security vulnerabilities such as XSS attacks.
 
### 3.7 Output Vectors and Vulnerabilities
When developing applications, it's essential to comprehend the various output vectors and their associated vulnerabilities to ensure a secure environment for your users. This guideline provides a more detailed overview of common output vectors and how to mitigate their potential risks.
 
#### Visitor's Browser
The most common output vector occurs when a PHP application sends data to a user's web browser. The primary vulnerability in this scenario is Cross-Site Scripting (XSS), which can be exploited by attackers to execute malicious scripts. To address this vulnerability, it's important to validate and sanitize user input before outputting it to the browser.
 
#### Database
As data exits your application and enters the database, it becomes susceptible to SQL Injection attacks. These attacks can lead to unauthorized data access, modification, or addition. To minimize this risk, ensure that any data sent to your database is safe and secure, preventing unauthorized access or manipulation.
 
#### Files
PHP applications and plugins often write data to files, which can introduce vulnerabilities if an attacker is able to execute malicious code through unauthorized file access. To mitigate this risk, make sure the data being written to files is safe, and verify that the filenames being used are secure and non-executable.
 
#### Shell Commands
Shell commands represent another potential output vector in your application, with the associated risk of executing undesirable shell commands using user-data. Generally, it's best to avoid using shell commands in PHP web applications. Instead, opt for built-in PHP functions for tasks like directory listings or file manipulation. However, if it's absolutely necessary to use shell commands that involve external data, employ strict validation, sanitization, and escaping techniques to minimize the risk.

Note: These guidelines are not exhaustive and should be supplemented with specific best practices based on the project's needs and context. The Engineering teams individual departments has further expantion in this area which details can be found here:

[Frontend Engineering Code of Conduct](/) (Work in Progress)

[Backend Engineering Code of Conduct](/) (Work in Progress)

[Support Engineering Code of Conduct](/) (Work in Progress)

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
- 9.1 All outsourced development must follow the same secure coding practices and guidelines as internal development teams. Third parties will have access at all times to see the 383 project code of conduct to see the appropriate behaviour, methods and actions that apply when working within the team. The index for the code of conduct can be found [here](https://github.com/383Project/engineering-code-of-conduct).
- 9.2 All outsourced development teams must provide evidence of their own secure coding practices and guidelines, which should be reviewed and approved by internal development teams.
- 9.3 Outsourced development teams must provide regular updates and reports on the status of their development progress, including any security issues or vulnerabilities identified.
- 9.4 All outsourced development teams must sign a non-disclosure agreement and agree to adhere to the security policies and procedures of the organisation.
- 9.5 The organisation must perform a security risk assessment of any third-party vendors or contractors before engaging in business with them.
- 9.6 Any identified security risks or vulnerabilities with outsourced development must be reported to the organization immediately and resolved in a timely manner.
- 9.7 All outsourced development must be conducted in accordance with any relevant laws and regulations governing data protection and privacy.
- 9.8 The organization must ensure that outsourced development teams are aware of their responsibilities with respect to the security of data and the protection of privacy.

## 10. Third-Party Code
- 10.1 Third-party code should be reviewed for security vulnerabilities before being integrated into the project.
- 10.2 Only trusted and reputable third-party code should be used in the project.
- 10.3 Regular updates should be made to third-party code across projects that are actively worked across or clients who have maintainance programmes with us to ensure any security vulnerabilities are patched.
- 10.4 All third-party code should be documented, including version numbers and where it is being used in the project.
- 10.5 Third-party code should not be modified unless it is absolutely necessary, and any modifications should be thoroughly tested and reviewed for security vulnerabilities.

By following this policy, we can ensure that our software products are developed using secure coding practices and protect our customers' data from security vulnerabilities.
