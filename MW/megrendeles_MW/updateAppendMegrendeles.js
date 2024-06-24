// updateing a megrendeles that already existed
// appending a megrendeles that was created

module.exports = function(db){
    if(!db || !db['Megrendelesmodel']){
        throw new TypeError('No Megrendelesmodel type!');
    }
    
    const model = db['Megrendelesmodel'];
    
    var exists = false;

    return function(req, res, next){


        model.findOne({_id: req.params.MID}).then( (mr) => {
            exists = mr ? true : false;
        }).then(()=>{
            if(exists){
                console.log('Updating megrendeles with _id: ' + req.params.MID);
                model.updateOne({_id: req.params.MID},{megrendelonev: req.body.megrendeloNeve,atadasido: req.body.atadasVarhatoIdeje,kivitar: req.body.kivitelezesAra,kifizetve: req.body.kifizetve}).then(()=>{console.log(req.body);return res.redirect('/');})
            }else{
                console.log('Creating new megrendeles');
                model.create({megrendelonev: req.body.megrendeloNeve,atadasido: req.body.atadasVarhatoIdeje,kivitar: req.body.kivitelezesAra,kifizetve: req.body.kifizetve}).then(()=>{console.log(req.body);return res.redirect('/');})    
            }
        });
    }
    
}