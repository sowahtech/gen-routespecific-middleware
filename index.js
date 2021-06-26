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

const middlewareFunction= (req, res, next) => {
    res.send('<h1>this is a general middleware</h1>');
    next();
}

//route specific middleware

const loginRouteSpecificMiddleware = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handleGetLoginRequest request handler for the login route');
    next();
}

const signupRouteSpecificMiddleware = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handlePostSignUpRequest request handler for the signup route');
    next();
}

const profileRouteSpecificMiddleware = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handlePatchProfileRequest request handler for the profile route');
    next();
}

const  profileRouteSpecificMiddlewareDel = (req, res, next) => {
    console.log('this is a route specific middleware that calls the handleDeleteProfileRequest request handler to delete the profile on the profile route');
    next();
}

// server.use(middlewareFunction);

//routes
server.get('/login', loginRouteSpecificMiddleware, handleGetLoginRequest);
server.post('/signup', signupRouteSpecificMiddleware, handlePostSignUpRequest);
server.patch('/profile', profileRouteSpecificMiddleware, handlePatchProfileRequest);
server.delete('/profile', profileRouteSpecificMiddlewareDel, handleDeleteProfileRequest);

//starting the server
server.listen(3000, () => console.log('server is up and running'))
