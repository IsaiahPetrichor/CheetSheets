# Transport Layer Security

---

## What it is

    The TLS protocol is for establishing secure connections between computers. HTTPS is a form of TLS. TLS uses Asymmetric Encryption to guarantee that the only access to shared data happens between the intended endpoints.

## TLS vs SSL

    SSL or 'Secure Sockets Layer' is the predecessor to TLS. They both serve the same purpose but SSL has been fully deprecated since 2015 due to severe vulnerabilities. People still use the term SSL but you can assume they are talking about TLS or they are using some very insecure systems.

## How TLS Works

    TLS is a secure connection that requires both the client to authenticate the server, and the client and server need to send a shared secret with which to communicate.

    The general process is:
        1. Client sends a request including a 'client random'.
        2. The server responds with a TLS certificate, a chosen cipher suite, and the server random.
        3. The client uses the TLS certificate to authenticate the server.
        4. The client and server exchange a 'premaster secret' and use it in addition to the client and server secrets to create session keys.
        5. The client and server send messages using session keys to test connection.
        6. done!
