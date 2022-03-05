/*
There are three main types of API authentication:
- HTTP Basic Auth
- API Keys
- OAuth

HTTP Basic Auth is the oldest (since 1999) and simplest method 
of authentication. It simply requires you to send your username 
and password every time you communicate with the web page. 
The reason this isn’t necessary when you use your browser is 
because of cookies. Cookies store your credentials so that you
don’t need to send them every time you click on a button.

API Keys
API Keys are similar to HTTP Basic Auth except, instead of 
a username and password, you use something called an API 
token. An API token is a unique string of letters and numbers 
generated for each user. API Keys are frequently used by 
developers to authenticate their own scripts or applications 
when interacting with another application’s API. API Keys have 
the added advantage of being long and difficult to guess.

    **Unfortunately, API Keys are too long and complex to be 
    practical for everyday users to use them to log in, and, 
    like the credentials used in HTTP Basic Auth, they are 
    vulnerable to interception when they are submitted for 
    authentication.

OAuth
Sometimes we don’t even have to create a username and 
password for a new account. Instead, we can sign in with Google, 
LinkedIn, Twitter, and more. This is possible because of 
OAuth. 

OAuth Tokens
Access Tokens
Authentication in OAuth is facilitated by the use of access 
tokens. Access tokens are used to make API requests on behalf 
of the user and represent the authorization of a specific 
application to access specific parts of a user’s data. These 
API requests are made over HTTPS connections.

Access tokens are very short-lived, and they only last 
anywhere from a few minutes to just hours. Their ephemeral 
nature limits the amount of time an attacker can use a stolen token.

Refresh tokens are longer lived than access tokens and are 
used by applications to get new access tokens without 
prompting the user. Refresh tokens can expire, like access 
tokens, but they can also be revoked by the authorization server.

OAuth 2.0 Grant Types
OAuth 2.0 grant types, also known as flows, describe multiple 
ways to obtain access tokens. Flows involve two main parts:

- Redirecting the user to the OAuth provider and obtaining an 
access token
- Using the access token to gain restricted access
Each grant type is optimized for a specific type of application 
based on complexity and severity. The grant type chosen will 
depend on whether the code can securely store a secret key 
and the trust level between a user and a client.

Client Credentials Grant
A Client Credentials Grant is used when applications request 
an application token to access their own resource. This grant 
type has a limited use case because it’s only used when the 
resource server and the authentication server are the same entity.

Authorization Code Grant
The Authorization Code Grant is the most widely used grant 
for publicly available applications. This was the grant type 
we showed earlier in this article. To use this grant type, 
the webserver must have the capability to store client 
credentials securely.

This approach uses browser redirection to communicate between 
the resource server and the authorization server. The client 
will obtain an authorization code and then exchange it for 
an access token.

Proof Key for Code Exchange (PKCE)
PKCE is an extension to the Authorization Code flow, and it 
used to prevent attacks and to securely perform the OAuth 
exchange from public clients. This extension helps prevent 
authorization code injection from malicious actors.

Device Code Grant
The Device Code Grant is used for devices that have no 
browser and/or have limited input capability to input an 
access token. Some examples of this might be smart TV apps.

Threats to OAuth
OAuth tokens are great at defending users against data 
breaches because even if websites that use OAuth to 
log in on are hacked. There are no passwords contained 
in databases, and, even if an attacker were to obtain 
the access tokens, the usually short-lived nature of the 
access tokens means an attacker would not be able to do
much with them.

However, OAuth is also vulnerable to a different sort of 
threat. Remember, OAuth both authorizes and authenticates 

Let’s assume that an attacker sets up a malicious website, 
and tells a user that they must authenticate with OAuth 
through GitHub. Instead of asking for just an email, the 
website asks for access to private repositories and secret 
gists. If the user isn’t paying attention, or has been 
socially engineered into believing that this access is 
required, they could grant access to the malicious application.

If a user grants this access to the malicious application, 
the attacker would have access to all of the user’s 
private information on Github — without ever knowing 
their password! This was the method successfully used 
by the hacking group Fancy Bear (also known as APT28 
and Pawn Storm) to attack the Democratic National 
Convention in 2016.

All methods of authorization have advantages and 
vulnerabilities and OAuth is no exception; however, 
it remains a generally secure and convenient way to 
authenticate yourself on trusted applications.
*/

const express = require('express');
const path = require('path');
const OAuth2Server = require('oauth2-server');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 4001;

const oauth = new OAuth2Server({
	model: require('./model'),
	allowBearerTokensInQueryString: true,
});

const authenticateRequest = (req, res, next) => {
	let request = new OAuth2Server.Request(req);
	let response = new OAuth2Server.Response(res);

	return oauth
		.authenticate(request, response)
		.then((token) => {
			next();
		})
		.catch((err) => {
			res.sendFile(path.join(__dirname, 'public/error.html'));
		});
};

const obtainToken = (req, res) => {
	let request = new OAuth2Server.Request(req);
	let response = new OAuth2Server.Response(res);

	return oauth
		.token(request, response)
		.then((token) => {
			res.json(token);
		})
		.catch((err) => {
			res.json(err);
		});
};

app.all('/auth', obtainToken);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/home.html'));
});
app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/public', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/allowed.html'));
});

app.get('/secret', authenticateRequest, (req, res) => {
	res.sendFile(path.join(__dirname, 'public/private.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
