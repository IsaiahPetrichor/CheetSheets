const express = require('express');
const session = require('express-session');

const PORT = process.env.PORT || 4001;
const app = express();

app.use(express.static("public"));

// Common Attacks on the web and how to prevent them

// Cross-Site Scripting (XSS)
{
    // Stored XSS
    /*
        The most dangerous XSS attack, this attack involves front end 
        form input not being sanitized and being saved to the back end
        before being sent to other users from the websites server. this
        can result in some seriously malicious code being executed.
    */

    // Reflected XSS
    /*
        This attack happens when malicious code is immediately returned
        most of the time it involves the attacker sending a link to 
        the victim and executing the code alongside the legitimate 
        website in order to steal credentials, etc.
    */

    // DOM-Based XSS
    /*
        This is a client side attack only, it usually requires an 
        interaction directly with the victim to work. Malicious code
        is added to the DOM of the victim and is executed after a 
        request to the server, usually sending credentials or private
        information to the attacker.
    */

    // Identifying XSS Vulnerabilities
    /*
        As with any vulnerability, it is important that we investigate 
        any potential input areas. When looking at the application, 
        consider all possible fields. Comments, usernames, custom 
        settings, and parameters all provide great starting points.

        Once we have identified a potential injection point, we can 
        begin testing various inputs to create a proof-of-concept 
        payload (POC). A POC payload will demonstrate that an issue 
        exists, without causing damage. The most basic POC payload is 
        shown below.

        <script>alert(1);</script>
        If a web server is not properly sanitizing user input, this 
        will return a pop-up box.
    */

    // to stop XSS attacks you need to sanitize input and 
    // only send cookies over https, in this example using express-session
    app.use(session({
        secret: "superSecretValue",
        resave: true,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: true
        }
    }))

    // for an easy way to sanitize input effectively, import sanitize-html
    import sanitize from 'sanitize-html';

    // Another quality package for security is helmet.js
    import helmet from 'helmet';
    app.use(helmet());

    // validate and sanitize using express-validator
    // use the check() method to validate formatting
    import {check} from 'express-validator';
    // use as middleware with a method
    check('email').isEmail()
    check('password').isLength({min: 5})

    // in the browser use element.textContent instead of element.innerHTML
    Document.getElementById('main-heading').textContent = 'Hello Nerd!';
}

// Cross-Site Request Forgery (CSRF)

// SQL Injection

// General defensive coding