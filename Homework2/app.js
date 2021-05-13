const express = require('express');
const fs = require('fs');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'views'));

const pathToUsers = path.join(__dirname, 'users.json');

function getUsers(){
    return JSON.parse(fs.readFileSync(pathToUsers));
}

function setUsers(users){
    fs.writeFile(pathToUsers, JSON.stringify(users), err => {
        if (err) {
            console.error(err);
        }
    } )
}

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const users = getUsers();
    const findUser = users.find(user => user.login === req.body.login && user.password === req.body.password);
    if (findUser){
        res.redirect(`/users/${findUser.id}`);
    } else {
        res.redirect('/err');
    }
});

app.get('/registration', (req, res) => {
    res.render('registration');
});

app.post('/registration', (req, res) => {
    const users = getUsers();
    const userExists = users.some((user) => user.login === req.body.login);

    if (userExists){
        res.redirect('/err');
    } else {
        users.push({...req.body, id: users[users.length - 1].id + 1});
        setUsers(users);
        res.redirect('/users');
    }
});

app.get('/users', (req, res) => {
    const users = getUsers();
    res.render('users', {users});
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const users = getUsers();
    const user = users.find( (user) => user.id === +userId);
    res.render('user', {user});
});

app.get('/err', (req, res) => {
    res.render('err');
});

app.listen(5000, () => {
    console.log('Listen port 5000, homework 2!');
});
