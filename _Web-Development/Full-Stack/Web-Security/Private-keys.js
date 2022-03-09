// import the dotenv node package
import dotenv from 'dotenv';
// initialize with a call to .config() the parameters are optional.
dotenv.config();

// access the variables from process.env
console.log(process.env.VAR_NAME);

/*
Use the .gitignore file to prevent secret files from being 
uploaded to a public view.

.gitignore takes plaintext routes to your files
ex.
    .env
    folder/file.js
    folder/
*/

// use an example.env file to show others
// how to use your application with env variables.