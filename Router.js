const bcrypt = require('bcrypt');

class Router{
    constructor(app, db) {
        this.login(app, db);
        this.register(app,db);
        this.logout(app, db);
        this.isLoggedIn(app, db);
        this.updateBlack(app,db);
        this.updateWhite(app, db);
    }

    updateBlack(app, db){
        app.post('/updateBlack', (req,res) => {
            let username = req.session.username;
            console.log(username);
            db.query('UPDATE user SET black = black +1 WHERE username = ? LIMIT 1 ', username,(err) =>{
                if (err){
                    res.json({
                        success: false,
                        msg: "error"
                    });
                }
                else {
                    res.json({
                        success: true
                    })
                }
            })
        })
    }

    updateWhite(app, db){
        app.post('/updateWhite', (req,res) => {
            let username = req.session.username;
            console.log(username);
            db.query('UPDATE user SET white = white +1 WHERE username = ? LIMIT 1 ', username,(err) =>{
                if (err){
                    res.json({
                        success: false,
                        msg: "error"
                    });
                }
                else {
                    res.json({
                        success: true
                    })
                }
            })
        })
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

            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data) =>{

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
                    db.query('INSERT INTO user (username, password) VALUES (?, ?)', [cols, aa], (err) =>{
                        if (err) {
                            res.json({
                                success: false,
                                msg: 'An error occured at insert'
                            });
                            return;
                        } else {
                            req.session.userID = 101;
                            req.session.username = username;
                                res.json({
                                    black : 0,
                                    white : 0,
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
            username = username.toLowerCase();

            if (username.length > 12 || password.length > 12){
                res.json({
                    success: false,
                    msg: 'username or password must be under 12 character'
                })
                return;
            }
            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1', cols, (err, data) =>{

                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occured'
                    })
                    return;
                }

                if (data && data.length === 1){

                    bcrypt.compare(password, data[0].password, (bcryptErr, verified) => {

                        if (verified){
                            req.session.userID = data[0].id;
                            req.session.black = data[0].black;
                            req.session.username = username;
                            req.session.white = data[0].white;
                            res.json({
                                success: true,
                                black : data[0].black,
                                white : data[0].white,
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
                db.query('SELECT * FROM user WHERE id = ? LIMIT 1', (err, data) => {

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

