const expect = require('chai').expect;
const getMegrendelesMW = require('../MW/megrendeles_MW/getMegrendeles');

describe('getMegrendelesMW tests', function() {


    it('should return a single megrendeles with arbitrary ID: 14', function(done) {
        const mw = getMegrendelesMW( {
            Megrendelesmodel: {
                findOne: (param) => {
                    expect(param).to.be.eql({_id: 14});
                    return {then: (cb) => { cb(14); }}
                },
            }
        });

        const resMock = {
            locals: {}
        }
        const reqMock = {
            params: {
                MID: 14
            }
        }
        mw(reqMock, resMock, (err) => {
            expect(resMock.locals).to.be.eql({ megrendeles: 14 })
            expect(err).to.be.eql(undefined);
            done();
        })
    });
    
    it('should call next with error, when no megrendeles is found', function(done) {
        const mw = getMegrendelesMW( {
            Megrendelesmodel: {
                findOne: (param) => {
                    expect(param).to.be.eql({_id: 14});
                    return {then: (cb) => { cb(null); }}
                },
            }
        });
        
        const resMock = {
            locals: {}
        }
        const reqMock = {
            params: {
                MID: 14
            }
        }
        mw(reqMock, resMock, (err) => {
            expect(resMock.locals).to.be.eql({})
            expect(err).to.be.eql('No such megrendeles!');
            done();
        })
    });
    it('should call next with error, when no Megrendelesmodel is found', function(done) {
        const mw = getMegrendelesMW( {
            Megrendelesmodel: undefined
        });
        
        const resMock = {
            locals: {}
        }
        const reqMock = {
            params: {
                MID: 14
            }
        }
        mw(reqMock, resMock, (err) => {
            expect(resMock.locals).to.be.eql({});
            expect(err).to.be.eql('No Megrendelesmodel type!');
            done();
        })
    });
    it('should call next with error, when no db is found', function(done) {
        const mw = getMegrendelesMW(undefined);
        
        const resMock = {
            locals: {}
        }
        const reqMock = {
            params: {
                MID: 14
            }
        }
        mw(reqMock, resMock, (err) => {
            expect(resMock.locals).to.be.eql({});
            expect(err).to.be.eql('No Megrendelesmodel type!');
            done();
        })
    });

})

