const connection = require ('../database/index');

/**
 * @function {getFavourite}-will get the favorite selected by the user from the database
 * @param {req}-request recived from the client side
 * @param {res}-response that will be send to the client side after checking the database
 * @param {next}
 */

exports.getFavourite= async (req, res, next) => {
    try{
        const {id} = req.params
        console.log('get method for favorites')
        var selectUserFavories = 'SELECT * FROM verses INNER JOIN users_verses ON verses.verse_id= users_verses.verse_id AND users_verses.user_id=?'
        connection.query(selectUserFavories, id, (error, result) => {
            if (error) res.status(404).json('favorite not found')
            console.log('success')
            res.status(202).json(result)
        })
    }
    catch(e)
        {
            res.send(e)
        }
};

/**
 * @function {deleteFavourite}-will delete the favorite that the user selected from the database
 * @param {req}-request recived from the client side
 * @param {res}-response that will be send to the client side after checking the database
 * @param {next}
 */

exports.deleteFavourite= async (req, res, next) => {
    try{
        const {id}= req.params;
        console.log('deleting method')
        var deletefromFavorites = 'DELETE FROM users_verses WHERE verse_id = ?'
        connection.query(deletefromFavorites, id, (error, result) => {
            if (error) res.status(404).json('favorite not found')
            res.status(202).json(result)
        })
    }
    catch(e)
        {
            res.send(e) 
        }
};