//importing express package
const express = require('express');

//defining request handlers

const handleGetLoginRequest = (req, res) => {
    res.send("Welcome! Login Sucessful! Enjoy your stay!");
}

const handlePostSignUpRequest = (req, res) => {
    res.send("Voila! SignUp Sucessful! You are now a member of this site!");
}

const handlePatchProfileRequest = (req, res) => {
    res.send("Congrats! Your profile is updated successfully!");
}

const handleDeleteProfileRequest = (req, res) => {
    res.send("Your profile deleted successfully! We are sorry to see you go :(");
}
//creating express server
const server = express();

//MIDDLEWARE
//-----------------------------------------------------
//general middleware

/* const handleAllRequest = (req, res, next) => {
    res.send('this is a general middleware');
    next();
} */

//route specific middleware

const handleLoginRequest = (req, res, next) => {
    console.log('this is a route specific request for the login route');
    next();
}

//server.use(handleAllRequest);

//routes
server.get('/login', handleLoginRequest, handleGetLoginRequest);
server.post('/signup', handlePostSignUpRequest);
server.patch('/profile', handlePatchProfileRequest);
server.delete('/profile', handleDeleteProfileRequest);

//starting the server
server.listen(3000, () => console.log('server is up and running'))
