# Check the OWASP Top 10 @ https://owasp.org/www-project-top-ten/
---

## Authentication:
    **Authentication is verificatio that you are who you say you are.**

    *Authentication relies on one or more factors to verify identity, and these factors come in ==three main types==:*

    - Knowledge is something you know, like a username and password.
    - Possession is something you have, like a security card or mobile device
    - Inherence is something you are, which generally refers to biometric data such as fingerprints.
---

## Authorization:
    **Authorization is verification of your privileges.**

    > Using role or user permissions in combination with proper Auth techniques creates a system where users can only access what you want them to be able to access. without authorization, users could access and/or alter ==any part== of the application. This includes other users and even the main database or admin accounts.
---

## Encryption:
    **Encryption is the process of changing data into an unreadable format unless you have the proper private key to decrypt it.**
    
    *Encryption has two main types:* 

    - Symmetrical is using a single key to encrypt and decrypt data. 
    - Asymmetrical is using a key for encryption and a seperate key for decryption.
---