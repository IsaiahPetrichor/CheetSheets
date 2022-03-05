// Sessions
{
    /*
    Session data is stored server-side and associated 
    with a session ID.

    This is roughly how a session is implemented with cookies:

    - A user goes to a site. The web server creates a session 
    and a session ID.
    - In the server’s response, it tells the browser to store a 
    cookie with the session ID (should not include any personal 
        information).
    - The session ID cookie automatically attaches to each 
    subsequent HTTP request to the server.
    - When the server reads the session ID cookie sent with the 
    next HTTP request, it returns the session data associated 
    with the ID.
    - The process continues as long as the session is active.
    - The session and session ID cookie expires after a user 
    closes out the browser, logs out, or a predetermined 
    session length (i.e. an hour) passes.

    Sessions are typically stored in three different ways:
    - In memory (this is the default storage)
    - In a database like MongoDB or MySQL
    - A memory cache like Redis or Memcached
    */

    // Use the express-session package
    const session = require('express-session');

    // create a new memory store for the session (DEV ONLY)
    const store = new session.MemoryStore();

    // configure the session
    app.use(session({
        secret: process.env.SESSION,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            secure: true,
            sameSite: "none"
        },
        resave: false,
        saveUninitialized: false,
        store,
        })
    );

    // In a login request return the session
    app.post("/login", (req, res) => {
        const { username, password } = req.body;
        db.users.findByUsername(username, (err, user) => {
          if (!user) return res.status(403).json({ msg: "No user found!" });
          if (user.password === password) {
            // Add your authenticated property below:
            req.session.authenticated = true
            // Add the user object below:
            req.session.user = {username, password}
            // Log the session below:
            console.log(req.session);
            res.redirect("/shop");
          } else {
            res.status(403).json({ msg: "Bad Credentials" });
          }
        });
      });

    // Create a middleware to check for authentication
    function ensureAuthentication(req, res, next) {
        if (req.session.authenticated) {
          return next();
        } else {
          res.status(403).json({ msg: "You're not authorized to view this page" });
        }
      }
      
}

// Cookies
{
    /*
    The first step to securing a cookie could be adding an 
    expiration date or duration so a cookie doesn’t persist 
    longer than it needs to. We can specify that information 
    through the Set-Cookie header in an HTTP response like so:

    Set-Cookie: Key=Value; expires=Saturday, 01-May-2021 
        07:30:10 GMT
    
        The 'HttpOnly' attribute for the Set-Cookie header makes 
    sure that the cookie’s data is not accessible to a script 
    running client-side. This helps prevent a Cross-Site 
    Scripting (XSS) attack that tries to steal a session 
    cookie and take over the victim’s session, which is 
    extremely common.

    Set-Cookie: Key=Value; expires=Saturday, 01-May-2021 
        07:30:10 GMT; HTTPOnly
    
    Here are some other Set-Cookie options:

    'SameSite' helps prevent Cross-Site Request Forgery (CSRF) 
    attacks.
    'Secure' makes sure cookies are only sent with a request 
    to an HTTPS page.
    */
}

// localStorage
{
    // Set a localStorage key-value pair
    localStorage.setItem('key', 'value');

    // Retrieve from localStorage
    localStorage.getItem('key');
}

// JSON Web Tokens
{
    /*
    Check ecommerce project server files for a real example

    A JWT is made up of three components:
    - Header
    - Payload
    - Signature

    A JWT header contains the type of the token we’re creating 
    and the signing algorithm that will be used.

    Type: The type of this token will always be “JWT”. The 
    Internet Assigned Numbers Authority, or IANA, coordinates 
    internet protocol resources across the globe. The “JWT” 
    type aligns with the media type “application/jwt“.

    Algorithm: The signing, or hashing, algorithm used might 
    vary. Some commonly used algorithms are HMAC-SHA256, 
    represented by "HS256", RSA with SHA-256, represented by 
    "RW256", and ECDSA with SHA-256, represented by "ES256".

    A JWT is made up of three parts:
    - an encoded header, i.e. 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    - an encoded payload, i.e. 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhhcmluZSBDb29wZXIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYyMDkyNDQ3OCwiZXhwIjoxNjIwOTM5MTg3fQ'
    - an salted hash signature, i.e. '3B-FLgPETrExxlDKW30AoU7KGE6xuZodw79TQR8_mwM'

    all together it looks like: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhhcmluZSBDb29wZXIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYyMDkyNDQ3OCwiZXhwIjoxNjIwOTM5MTg3fQ.3B-FLgPETrExxlDKW30AoU7KGE6xuZodw79TQR8_mwM'
    
    Using a JWT: 
    - The user logs into a website and their information is 
    sent to the server.

    - The server creates a JWT with a secret

    - The JWT is returned to the browser

    - The user makes another request, and the browser sends 
    the JWT back to the server in the Authorization header 
    using the Bearer schema.

    - With our newly created JWT, this would look like:
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkhhcmluZSBDb29wZXIiLCJhZG1pbiI6ZmFsc2UsImlhdCI6MTYyMDkyNDQ3OCwiZXhwIjoxNjIwOTM5MTg3fQ.3B-FLgPETrExxlDKW30AoU7KGE6xuZodw79TQR8_mwM
    
    - The server verifies the JWT signature and gets user 
    information from the JWT.

    - The server will send a response back to the browser. 
    If the JWT is valid, the browser will receive what it 
    requested, if the JWT was not valid, the browser will 
    likely receive an error message.

    Never store JWTs in localStorage
    */
}