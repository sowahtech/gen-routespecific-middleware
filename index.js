//importing express package
const express = require('express');

//defining request handlers

const handleGetLoginRequest = (req, res) => {
    res.send("<h1>Welcome! Login Sucessful! Enjoy your stay!</h1>");
}

const handlePostSignUpRequest = (req, res) => {
    res.send("<h1>Voila! SignUp Sucessful! You are now a member of this site!</h1>");
}

const handlePatchProfileRequest = (req, res) => {
    res.send("<h1>Congrats! Your profile is updated successfully!</h1>");
}

const handleDeleteProfileRequest = (req, res) => {
    res.send("<h1>Your profile deleted successfully! We are sorry to see you go :( </h1>");
}
//creating express server
const server = express();

//MIDDLEWARE
//-----------------------------------------------------
//general middleware

/* const handleAllRequest = (req, res, next) => {
    res.send('<h1>this is a general middleware</h1>');
    next();
} */

//route specific middleware

const handleLoginRequest = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handleGetLoginRequest request handler for the login route');
    next();
}

const handlePostRequest = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handlePostSignUpRequest request handler for the signup route');
    next();
}

const handlePatchRequest = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handlePatchProfileRequest request handler for the profile route');
    next();
}

const handledeleteRequest = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handleDeleteProfileRequest request handler to delete the profile on the profile route');
    next();
}

// server.use(handleAllRequest);

//routes
server.get('/login', handleLoginRequest, handleGetLoginRequest);
server.post('/signup', handlePostRequest, handlePostSignUpRequest);
server.patch('/profile', handlePatchRequest, handlePatchProfileRequest);
server.delete('/profile', handledeleteRequest, handleDeleteProfileRequest);

//starting the server
server.listen(3000, () => console.log('server is up and running'))
