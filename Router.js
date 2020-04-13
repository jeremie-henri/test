const bcrypt = require('bcrypt');

class Router{
    constructor(app, db) {
        this.login(app, db);
        this.register(app,db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
    }

    register(app, db){
        app.post('/register', (req, res) => {

            let username = req.body.username;
            let password = req.body.password;

            username = username.toLowerCase();

            if (username.length > 12 || password.length > 12){
                res.json({
                    success: false,
                    msg: 'username or password must be under 12 character'
                })
                return;
            }
            let password_b = bcrypt.hashSync(password,9);
            let cols = [username];
            let aa = [password_b];

            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) =>{

                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occured at select'
                    });
                    return;
                }

                if (data && data.length === 1){
                    res.json({
                        success: false,
                        msg: 'Username already taken'
                    });
                    return;

                } else {
                    db.query('INSERT INTO user (username, password) VALUES (?, ?)', [cols, aa], (err, data, fields) =>{
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'An error occured at insert'
                            })
                            return;
                        } else {
                            req.session.userID = 101;
                                res.json({
                                success: true,
                                username: username,
                                msg: 'Success'
                            })
                        }
                    });
                }
            });
        });
    }

    login(app, db){
        app.post('/login', (req, res) => {

            let username = req.body.username;
            let password = req.body.password;
            console.log(username);

            username = username.toLowerCase();

            if (username.length > 12 || password.length > 12){
                res.json({
                    success: false,
                    msg: 'username or password must be under 12 character'
                })
                return;
            }
            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data, fields) =>{

                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occured'
                    })
                    return;
                }
                console.log(data);
                console.log(cols);

                if (data && data.length === 1){

                    bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {

                        if (verified){
                            req.session.userID = data[0].id;

                            res.json({
                                success: true,
                                username: data[0].username
                            })
                        }
                        else {
                            res.json({
                                success: false,
                                msg: 'Invalid password'
                            })
                        }
                    });
                } else {
                    res.json({
                        success: false,
                        msg: 'User not found, please try again'
                    })
                }
            });
       });
    }

    logout(app, db){
        app.post('/logout', (req, res) => {

            if (req.session.userID){
                req.session.destroy();
                res.json({
                    success: true
                });
                return true;
            }else{
                res.json({
                    succes: false
                });
                return false;
            }
        });

    }

    isLoggedIn(app, db){
        app.post('/isLoggedIn', (req, res) => {

            if (req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', (err, data, fields) => {

                    if (data && data.lenght === 1 ){
                        res.json({
                            success: true,
                            username: data[1].username
                        })
                        return true
                    }else{
                        res.json({
                            success: false
                        })
                    }
                });
            }
            else{
                res.json({
                    success: false
                })
            }
        });
    }

}
module.exports = Router;

