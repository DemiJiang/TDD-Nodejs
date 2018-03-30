const assert = require('assert');
const cashChange = require('../lib/cashregister')

describe('Cash register', function() {

    describe('Cash exchange', function(){

        it('getChange(210,300) should equal [50,20,20]', function(){
            assert.deepEqual(cashChange(210,300), [50,20,20]);
        });

        it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
            assert.deepEqual(cashChange(486,1000), [500, 10, 2, 2]);
        })

        it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
            assert.deepEqual(cashChange(1487,10000), [5000, 2000, 1000, 500, 10, 2, 1 ]);
        });

    });

});