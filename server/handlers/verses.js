const connection = require ('../database/index');

/**
 * @function {getVerses}-will get the verses from the database based on the state that the user selected
 * @param {req}-request recived from the client side
 * @param {res}-response that will be send to the client side after checking the database
 * @param {next}
 */

exports.getVerses= async (req, res, next) => {
    try{
        const {state} = req.params;
        console.log('Verses GET request received with state :', state);

        connection.query('select * from verses v inner join ' +
        'states_verses sv  on sv.verse_id = v.verse_id inner join ' +
        'emotional_states es on sv.emotional_state_id = es.emotional_state_id where emotional_state =\'' + state + '\';', (err, results) => {
            console.log(results);
            // console.log(results[0].verse_number)
            res.json(results);
        });
    }
    catch(e)
        {
            res.send(e)
            
        }
};

/**
 * @function {insertFavorite}-will insert and sava the favorites that the user selectes in the table favorites in the database
 * @param {req}-request recived from the client side
 * @param {res}-response that will be send to the client side after checking the database
 * @param {next}
 */


exports.insertFavorite= async (req, res, next) => {
    try{
        const {
            verse_id,
            user_id
        } = req.body;

        var insertFavorites = 'INSERT INTO users_verses  (user_id, verse_id) VALUES (?,?)'
        connection.query(insertFavorites, [user_id, verse_id], (error, result) => {
        console.log(`verse ${verse_id} added successfully`)
        res.status(201).json(result)
    })
    }
    catch(e)
        {                                                                                                                                                                                                                                                                                                                         
            res.send(e)
            
        }
};                                                                                                                                                                                                                                                                                                                                                          