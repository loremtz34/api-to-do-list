# TO-DO LIST
For this test i used visual studio code, for the backend: node.js, for the front-end: reactjs. (i think i tried my best!)

For the making of the api in node.js, i heavely based myself in this link, only because i don't have the knowledge of node.js or other tecnology for backend: https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2 .this doesn't mean i copy and paste exacly like it is there, i had to modify a lot of things, besides i had to make other things from scratch, you get the idea. 

For the making of the front-end i based myself in this links:
    -https://codepen.io/arshdkhn1/pen/apoWJe (in the making of To-Do)
    -https://github.com/reactjs/react-modal (in the making of modal in react)

### Requirements
  
  - First you have to make sure that you have installed node.js, MySQL and any code editor that you like.

# api-to-do-list

Sample application for Condor.

## How to install api

Clone the repo using HTTPS or SSH in a new directory and get into it.

```
git clone https://github.com/loremtz34/api-to-do-list.git
git clone git@github.com:loremtz34/api-to-do-list.git

cd api-to-do-list/
```
Install NPM and NodeJS and make sure that `node` and `npm` are available in your preferred command line (cmd, powershell, git bash, bash, etc).

Then, install all of the dependencies using npm.

```
npm install
```

## Configure

Change the MySQL connection configuration in `db.js` and `server.js` to match your database server IP or hostname, user, password and name of the database we will create later.

```
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'super-strong-password',
    database : 'to-do-list'
});
```

### Database

Connect to your database server using whichever tool you like the most, I'm using phpmyadmin. Then, create a new database called `to-do-list` and import the `to-do-list.sql` file. This will create our tables and fill them with sample data.

## Running

Finally, run the backend using `node server.js`.

## How to install front-end

Clone the repo using HTTPS or SSH in a new directory and get into it.

```
git clone https://github.com/loremtz34/To-Do-List
git clone git@github.com:loremtz34/To-Do-List.git

run the command 'npm install' to install dependencies 

## Running
Finally, run the front end using 'npm start'


