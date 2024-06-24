
//deleting a megrendeles

module.exports = function(db){
    if(!db || !db['Megrendelesmodel']){
        throw new TypeError('No Megrendelesmodel type!');
    }
    
    const model = db['Megrendelesmodel'];
    
    return function(req, res, next){
        model.deleteOne({_id: req.params.MID}).then( ()=> {
            console.log('Deleting megrendeles with _id: ' + req.params.MID);
            return res.redirect('/');
        });
    }
}