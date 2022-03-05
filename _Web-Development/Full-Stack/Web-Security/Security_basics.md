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

## Public-Key Infrastructure & HTTPS
    **PKI is a system that designates trusted authorities who verify that you’re interacting with who you think you are.**
    
    > HTTPS is the standard system used by web browsers to implement a PKI. Without HTTPS your website is vulnerable to both transit data exposure as well as website spoofing.

## HTTP Security Headers
    > HTTP responses can contain headers with extra information that tells the client (browser) how to behave. Security-related headers are added in server-to-client responses to reflect a policy that the website wants to implement, like enforcing HTTPS communications over HTTP, or limiting whether a browser is allowed to render the current webpage in an iframe on another site.

    Common headers include:
    - "Strict-Transport-Security: max-age=31536000; includeSubDomains"
        - 'includeSubDomains' tells the browser that the site and all sub domains are HTTPS only.
        - 'max-age' tells the browser to remember this header for the next year (31536000 seconds).
    - "Content-Security-Policy: script-src 'self';"
        - 'script-src' restricts what resources can load JavaScript.
        - 'self' tells the browser that the resources loading JS have to be from the current domain.
    - "X-Frame-Options" is a header that prevents your entire page from being rendered in an <iframe>
        - 'X-Frame-Options: DENY' means the page cannot be in an iframe anywhere
        - 'X-Frame-Options: SAMEORIGIN' only allows the page to be in an iframe on your own domain
        - 'X-Frame-Options: ALLOW-FROM (url)' allows you to list certain sites where it can be used in an iframe

    *More resources on OWASP: http://owasp.org/www-project-secure-header | and MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security *