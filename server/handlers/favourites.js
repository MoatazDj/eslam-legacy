const connection = require ('../database/index');

exports.getFavourite= async (req, res, next) => {
    try{
        const {id} = req.params
        console.log(req.body)
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

exports.deleteFavourite= async (req, res, next) => {
    try{
        const user_id = req.body.user_id;
        const {id}= req.params;
        var deletefromFavorites = 'DELETE FROM users_verses WHERE verse_id = ? AND user_id = ? '
        connection.query(deletefromFavorites, [id, user_id], (error, result) => {
            if (error) res.status(404).json('favorite not found')
            res.status(202).json(result)
        })
    }
    catch(e)
        {
            res.send(e) 
        }
};