# Data Transformation

## Encryption

---

    When data is securely exchanged, it is first encrypted
    by the sender, and then decrypted by the receiver
    using a special key.

### Symmetric Encryption

    This encryption is fine and is used for larger datasets, however, the encryption key must be shared with everyone who needs to decrypt it

### Asymmetric Encryption

    This encryption uses a private key and a public key the public key is the encryption key where the private key is only for decryption.

    This is slower and more complex so it is only used for smaller pieces of data.

## Hashing

---

Hashing is a one-way process that creates a unique hash of a fixed size to represent the data. you cannot retrive the original data from a hash.

Hashing algorithms need to be complex and long enough to functionally guarantee no hash collisions (two identical hashes)

using hashed passwords in your database can guarantee that in the event of a data breach, the hacker still doesn't get any of the users passwords.

The standard hashing algorithm currently is SHA-256

## Encoding

---

Encoding transforms data but doesn't really hide it, its more useful for information exchange.

Common encoding types include: - ASCII - Unicode - Base64

## Obfuscation

---

Obfuscation is less about data security and more about securing code. Developers might obfuscate their code in order to hide what their code is actually doing. Obfuscate means to hide the meaning of something by making it difficult to understand. Why would developers do this?

Developers might want to hide trade secrets or intellectual property from others who can access their code. Obfuscating their code makes it difficult for others to steal code and use it for their own purposes. Obfuscation can also make it harder for users to hack software or get around licensing requirements needed to use programs.

Malicious actors might also use obfuscation to make it hard for users or antivirus software to detect a virus they are planting on a system. If you don’t know what an application is for, be very careful before downloading or opening it.
