// include page generation  //

const generateHTML = require('./src/generateHTML');

// include Staff profiles //

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// include node packages //

const fs = require('fs'); 
const inquirer = require('inquirer');
  