const express = require('express');
const path = require('path');

const port = 8081;
const app = express();

let users = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // console.log(users);
    return res.render('index', { users });
});

app.post('/user', (req, res) => {
    // console.log(req.body);
    users.push(req.body)
    return res.redirect(req.get('Referrer') || '/');
})

// delete user data

app.get('/user/:id', (req, res) => {
    let id = req.params.id;
    users = users.filter(user => user.id !== id);
    // return res.json({'message':'Deleted user data'});
    return res.redirect(req.get('Referrer') || '/');
});

// edit data 
app.get('/user/edit/:id', (req, res) => {

    let { id } = req.params;

    let user = users.filter(user => user.id === id)[0];
    // console.log(user[0]);

    return res.render('edit', { user });

    // return res.redirect(req.get('Referrer') || '/');
})

app.post('/user/edit/:id', (req, res) => {
    // console.log(req.body);

    users = users.map((user) => {

        if (user.id === req.params.id) {
            user = req.body;
            req.body.id = req.params.id;
        }

        return user;
    })
    console.log(req.body);
    return res.redirect('/');
})


app.listen(port, (err) => {
    if (!err) {
        console.log("server start.");
        console.log("http://localhost:" + port);
    }
});

//{ username : "", password : "" }