var assert = require('assert')

var sphere = require('../src/sphere.js');



describe('Test sphere', function() {

    before(function(){
        sphereExample = new sphere() 
    })

    describe('Area sphere', function(){
        it('Should result in 50.24 if the radio is 2', function() {
            assert.equal(sphereExample.area(2), 50.24);
        });
    });

    describe('Volume sphere', function(){
        it('Should result in 113.04 if the radio is 3', function() {
            assert.equal(sphereExample.volume(3), 113.04);
        });
    });

});