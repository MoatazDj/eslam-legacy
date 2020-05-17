const connection = require ('../database/index');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    try{
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            email: req.body.email,
            gender: req.body.gender,  
            phone_number: req.body.phone_number
          }
        
          console.log('Received Signup POST request from client with ', user);
         
          const searchUserQuery = ' SELECT email FROM users WHERE email = ?'
          const addUserQuery = `INSERT INTO users(user_first_name, user_last_name, email, gender , phone_number, password) VALUES(?,?,?,?,?,?)`;

        
          connection.query(searchUserQuery, [user.email], async (searchErr, result) => {
            if (searchErr) {
              console.log("searchErr " + searchErr)
              res.json({message:"user data not received", error:searchErr});
            } else {
              if (result.length > 0) {
                res.json({
                  message: 'user exist'
                })
              } else {
                    console.log('hashing password');
                    hashedPassword = await bcrypt.hash(user.password, 10)
                    const userInfo = [user.first_name, user.last_name, user.email, user.gender, user.phone_number, hashedPassword]
                        console.log('adding new user to database');
                        connection.query(addUserQuery, userInfo, (addUserErr, addUserRes) => {
                          if (addUserErr) {
                            console.log('addUserErr : ', addUserErr);
                          }
                          else{
                                console.log('new user created successfully');
                                const {id, email} = user;
                                const token = jwt.sign({id, email}, process.env.SECRET);
                                res.status(201).json({id, email, token})
                            }

                              });
                          }
                        };
                      });
                    }
    catch(e)
        {
                res.send(e)
        }
};

exports.signin = async (req, res, next) => {
    try{
        const userData = {
            email: req.body.email,
            password: req.body.password
        }
    
        console.log('Received Signin GET request from client with ', userData);
    
        const searchUserQuery = ' SELECT * FROM users WHERE email = ?';
    
        connection.query(searchUserQuery, [userData.email], async (searchUserErr, user) => {
            if (searchUserErr) {
                console.log('searchUserErr : ', searchUserErr)
            } else {
                if (user.length) {
                    const userId = user[0].user_id;
                    console.log('User located with id : ', userId);
                    console.log(' comparing attempted pass')
                    valid = await bcrypt.compare(userData.password, user[0].password)
                    if (!valid) {
                        console.log('not valid password');
                        res.status(404).send('not valid password');
                    } else {              
                            console.log('Correct credientials');
                            const {user_id, email} = user[0];
                            const token = jwt.sign({user_id, email}, process.env.SECRET);
                            res.status(200).json({user_id, email, token})
                        } 
                    }
                }
            })
    }
    catch(e)
    {
            res.send(e)
        
    }
};