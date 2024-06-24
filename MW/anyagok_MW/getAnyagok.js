
//getting all anyags

module.exports = function(db){
    if(!db || !db['Anyagmodel']){
        throw new TypeError('No Anyagmodel type!');
    }
    
    const model = db['Anyagmodel'];
    
    return function(req, res, next){
        model.find({_epitkezes: req.params.MID}).then( (anyagok) => {
            res.locals.anyagok = anyagok;
            console.log('Getting all anyags');
            return next();
        });     
    }
}