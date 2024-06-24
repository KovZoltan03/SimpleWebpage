
// updateing an anyag that already exists
// appending an anyag that was created

module.exports = function(db){
    if(!db || !db['Anyagmodel']){
        throw new TypeError('No Anyagmodel type!');
    }
    
    const model = db['Anyagmodel'];
    
    var exists = false;

    
    return function(req, res, next){
        
        model.findOne({_id: req.params.AID}).then( (anyag) => {
            exists = anyag ? true : false;
        }).then(()=>{
            if(!exists){
                console.log('Creating new anyag');
                model.create({
                    anyagnev: req.body.anyagNeve,
                    anyagmennyiseg: req.body.anyagMennyiseg,
                    anyaghely: req.body.anyagHelye,
                    anyagfelhter: req.body.felhasznalasiTerulet,
                    _epitkezes: req.params.MID
                }
            ).then(()=>{
                return res.redirect('/anyag/' + req.params.MID);
            });
        }else{
            console.log('Updating anyag with _id: ' + req.params.AID);
            model.updateOne({_id: req.params.AID}, {
                        anyagnev: req.body.anyagNeve,
                        anyagmennyiseg: req.body.anyagMennyiseg,
                        anyaghely: req.body.anyagHelye,
                        anyagfelhter: req.body.felhasznalasiTerulet,
                        _epitkezes: req.params.MID
                    }
                ).then(()=>{
                    return res.redirect('/anyag/' + req.params.MID);
                });
            }
        });
    }
}