# Data Security

---

## Transport Layer Security

---

### What it is

    The TLS protocol is for establishing secure connections between computers. HTTPS is a form of TLS. TLS uses Asymmetric Encryption to guarantee that the only access to shared data happens between the intended endpoints.

### TLS vs SSL

    SSL or 'Secure Sockets Layer' is the predecessor to TLS. They both serve the same purpose but SSL has been fully deprecated since 2015 due to severe vulnerabilities. People still use the term SSL but you can assume they are talking about TLS or they are using some very insecure systems.

### How TLS Works

    TLS is a secure connection that requires both the client to authenticate the server, and the client and server need to send a shared secret with which to communicate.

    The general process is:
        1. Client sends a request including a 'client random'.
        2. The server responds with a TLS certificate, a chosen cipher suite, and the server random.
        3. The client uses the TLS certificate to authenticate the server.
        4. The client and server exchange a 'premaster secret' and use it in addition to the client and server secrets to create session keys.
        5. The client and server send messages using session keys to test connection.
        6. done!

## Role-Based Access Control

---

### Roles

    Roles are designed to give permissions to them instead of directly to users. This is exactly what it sounds like, it works the same way roles work in, for example, Video Game servers, Discord servers, and basically any other server with certain features/data that need to be restricted to certain users. Users can have multiple roles.

    **The Principle of Least Privilege**
    This principle basically means you intentionally give only the permissions that are absolutely neccessary to complete a task to a user and nothing more.
