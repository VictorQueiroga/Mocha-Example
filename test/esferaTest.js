var assert = require('assert')

var esfera = require('../src/esfera.js');

before(function(){
    testeEsfera = new esfera()
})


describe('Teste esfera', function() {

    describe('Area esfera', function(){
        it('Deve resultar em 50.24 se o raio for 2', function() {
            assert.equal(testeEsfera.area(2), 50.24);
        });
    });

    describe('Volume esfera', function(){
        it('Deve resultar em 113.04 se o raio for 3', function() {
            assert.equal(testeEsfera.volume(3), 113.04);
        });
    });
});