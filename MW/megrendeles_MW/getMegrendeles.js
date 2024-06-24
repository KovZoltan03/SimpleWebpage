
//getting a single megrendeles

module.exports = function(db){
    
    
    return function(req, res, next){
        if(!db || !db['Megrendelesmodel']){
            return next('No Megrendelesmodel type!');
        }
        const model = db['Megrendelesmodel'];
        model.findOne({_id: req.params.MID}).then( (mr) => {
            if(!mr)
                return next('No such megrendeles!');
            
            res.locals.megrendeles = mr;
            console.log('Getting megrendeles with _id: ' + req.params.MID);
            return next();
        });
    }
}