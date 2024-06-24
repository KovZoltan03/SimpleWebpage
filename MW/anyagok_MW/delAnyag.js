
//deleting an anyag

module.exports = function(db){
    
    
    return function(req, res, next){
        if(!db || !db['Anyagmodel']){
            return next('No Anyagmodel type!');
        }
        const model = db['Anyagmodel'];
        model.deleteOne({_epitkezes: req.params.MID, _id: req.params.AID}).then( () => {
            console.log('Deleting anyag with _id: ' + req.params.AID);
            return res.redirect('/anyag/' + req.params.MID);
        });
    }
}