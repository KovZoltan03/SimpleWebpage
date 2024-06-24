const expect = require('chai').expect;
const delAnyagMW = require('../MW/anyagok_MW/delAnyag');

describe('delAnyagMW tests', function() {


    it('should delete a single anyag with arbitrary ID: 14, and which is bound to megrendeles with ID: 14; after its done should redirect to /anyag/MID', function(done) {
        const mw = delAnyagMW( {
            Anyagmodel: {
                deleteOne: (param) => {
                    expect(param).to.be.eql({_epitkezes: 14,_id: 14});
                    return {then: () => { resMock.redirect(14); }}
                },
            }
        });

        const resMock = {
            locals: {},
            redirect: (param)=>{
                resMock.page = '/anyag/' + param;
                done();
            },
            page: ''
        }
        const reqMock = {
            params: {
                MID: 14,
                AID: 14
            }
        }
        mw(reqMock, resMock, (err) => {
            expect(resMock.page).to.be.eql('/anyag/14')
            expect(err).to.be.eql(undefined);
            done();
        })
    });
    

    it('should call next with error, when no Anyagmodel is found', function(done) {
        const mw = delAnyagMW( {
            Anyagmodel: undefined
        });
        
        const resMock = {
            locals: {}
        }
        const reqMock = {
            params: {
                MID: 14,
                AID: 14
            }
        }
        mw(reqMock, resMock, (err) => {
            expect(resMock.locals).to.be.eql({});
            expect(err).to.be.eql('No Anyagmodel type!');
            done();
        })
    });
    it('should call next with error, when no db is found', function(done) {
        const mw = delAnyagMW(undefined);
        
        const resMock = {
            locals: {}
        }
        const reqMock = {
            params: {
                MID: 14,
                AID: 14
            }
        }
        mw(reqMock, resMock, (err) => {
            expect(resMock.locals).to.be.eql({});
            expect(err).to.be.eql('No Anyagmodel type!');
            done();
        })
    });

})

