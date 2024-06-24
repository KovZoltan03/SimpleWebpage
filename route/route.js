//set renderer MW
const render = require('../MW/renderer_MW/renderer');

//set MW-s for megrendeles'
const getMegrendeles = require('../MW/megrendeles_MW/getMegrendeles');
const getAllMegrendeles = require('../MW/megrendeles_MW/getMegrendelesek');
const delMegrendeles = require('../MW/megrendeles_MW/delMegrendeles');
const updateOrAppendMegrendeles = require('../MW/megrendeles_MW/updateAppendMegrendeles');

//set MW-s for anyags
const getAnyag = require('../MW/anyagok_MW/getAnyag');
const getAllAnyag = require('../MW/anyagok_MW/getAnyagok');
const delAnyag = require('../MW/anyagok_MW/delAnyag');
const updateOrAppendAnyag = require('../MW/anyagok_MW/updateAppendAnyag');


const MegrendelesModel = require('../models/megrendeles');
const AnyagModel = require('../models/anyag');

module.exports = function(app) {
    const db = {
        Megrendelesmodel: MegrendelesModel,
        Anyagmodel: AnyagModel
    };
    
    
    app.get(
        '/megrendeles/add',
        render(db, 'uj_megrendeles')
    )
    app.post(
        '/megrendeles/add',
        updateOrAppendMegrendeles(db)
    )

    app.get(
        '/megrendeles/update/:MID',
        getMegrendeles(db),
        render(db, 'megrendeles_modositas')
    )
    app.post(
        '/megrendeles/update/:MID',
        updateOrAppendMegrendeles(db)
    )
    


    app.use(
        '/megrendeles/delete/:MID',
        getMegrendeles(db),
        delMegrendeles(db)
    )



    app.get(
        '/anyag/:MID/add',
        getMegrendeles(db),
        render(db, 'uj_anyag')
    )
    app.post(
        '/anyag/:MID/add',
        updateOrAppendAnyag(db)
    )

    app.get(
        '/anyag/:MID/update/:AID',
        getMegrendeles(db),
        getAnyag(db),
        render(db, 'anyag_modositas')
    )
    app.post(
        '/anyag/:MID/update/:AID',
        getAnyag(db),
        updateOrAppendAnyag(db)
    )


    app.use(
        '/anyag/:MID/delete/:AID',
        getMegrendeles(db),
        getAnyag(db),
        delAnyag(db)
    )
    
    app.get(
        '/anyag/:MID',
        getMegrendeles(db),
        getAllAnyag(db),
        render(db, 'anyagok')
    )

    app.get(
        '/',
        getAllMegrendeles(db),
        render(db, 'index')
    )
}