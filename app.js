'use strict'
console.log("Starting server...");
const startTime = new Date().getTime();
const UserManagementRouteHandler = require("./api/user-management/userManagementRouteHandler");
const RolesRouteHandler = require("./api/roles/rolesManagementRouteHandler")
const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require("body-parser");
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.listen(3100);
app.use('/users',UserManagementRouteHandler.getRouter());
app.use('/roles',RolesRouteHandler.getRouter())
const endTime = new Date().getTime();
console.log(`Server started in ${endTime-startTime} ms on ${new Date()}`);