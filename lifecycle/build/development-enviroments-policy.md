# Development Environments Policy

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)

The purpose of this policy is to establish guidelines for the management and security of development environments to ensure that the software development process is carried out in a controlled and secure manner.

## 1. Secure Development Environments
 - 1.1 All development environments must be secured and protected from unauthorized access or modification.
 - 1.2 Access to development environments must be granted on a need-to-know basis, with least privilege access granted to all users. Credentials to accsess QA, Staging and production enviroments are manged through 1Password Controls. Code Accsess is managed via GitHub Controls.
 - 1.3 All development environments must be configured to meet the organization's security requirements and standards. Further details on the engineering security pracices as well as secure enviroment guidance can be found [here](https://github.com/383Project/engineering-code-of-conduct/blob/secure-coding-practices-policy/lifecycle/build/secure-coding-practices-policy.md).
 
 ## 2. Configuration Management
 - 2.1 All development environments must be configured identically to the production environment, including software versions, settings, and configurations. For local enviroment replication in most cases this will be handled by docker which a configuration file will be provided within the project to execute and run the enviroment.
 - 2.3 The use of a code repository is mandatory for managing the resources created through Docker, to ensure that configurations are version controlled and auditable. There should be no instances where you are running a custom docker file outside of the one supplied within the repository.
 - 2.4 Changes to the development environment must be documented and reviewed before they are applied to the production environment. This should be handled within a Jira ticket or via a Github pull request which is has been approved. For more information of Pull requests see related version control policy [here](https://github.com/383Project/engineering-code-of-conduct/blob/main/lifecycle/build/version-control-policy.md).

 ## 3. Data Management
 - 3.1 No data in the development environment should be shared outside of that environment, except for approved testing or development purposes.
 - 3.2 No personal data should be stored in the development environment, including any data covered by GDPR, HIPAA, or other data protection regulations.
 - 3.3 All data in the development environment must be protected in accordance with the organization's data protection policies and standards.

 ## 4. Access Control
 - 4.1 No direct access to the development environment from any other environment should be allowed, and vice versa.
 - 4.2 All access to the development environment must be authenticated, authorized, and audited.
 - 4.3 Access to the development environment should be limited to authorized personnel only.
 - 4.4 All access should be granted on a need-to-know basis and least privilege should be granted to all users. Controlled through 1Password credential management or Github code access controlls.

 ## 5. Security in the Software Development Methodology
 - 5.1 Security must be considered in the software development methodology, including threat modeling, secure coding practices, and security testing.
 - 5.2 All code changes must be tracked and recorded in the code repository, with each commit linked to an issue or feature.
 - 5.3 Must follow all secure coding practices found in our secure coding practices policy found [here](https://github.com/383Project/engineering-code-of-conduct/blob/secure-coding-practices-policy/lifecycle/build/secure-coding-practices-policy.md).

[<< Return to code of conduct homepage](https://github.com/383Project/engineering-code-of-conduct)
