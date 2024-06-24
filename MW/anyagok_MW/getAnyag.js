
//getting a single anyag

module.exports = function(db){
    if(!db || !db['Anyagmodel']){
        throw new TypeError('No Anyagmodel type!');
    }
    
    const model = db['Anyagmodel'];
    
    return function(req, res, next){
        model.findOne({_id: req.params.AID}).then( (anyag) => {
            res.locals.anyag = anyag;
            console.log('Getting anyag with _id: ' + req.params.AID);
            return next();
        });     
    }
}