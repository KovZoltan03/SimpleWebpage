
//rendering the view

module.exports = function(db, view){
    return function(req, res, next){
        console.log('Rendering view with name: ' + view);
        res.render(view);
    };
}