
//getting all megrendeles'


module.exports = function(db){

    if(!db || !db['Megrendelesmodel']){
        throw new TypeError('No Megrendelesmodel type!');
    }
    
    const model = db['Megrendelesmodel'];
    
    return function(req, res, next){
        
        model.find({}).then( (mr) => {
            res.locals.megrendelesek = mr;
            console.log('Getting all megrendeleses');
            return next();
        });
        
                
    }


}