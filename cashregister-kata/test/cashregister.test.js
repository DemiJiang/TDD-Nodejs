const assert = require('assert');
const cashChange = require('../lib/cashregister')

describe('Cash register', function() {

    describe('Cash exchange', function(){
        it('getChange(210,300) should equal [50,20,20]', function(){
            assert.deepEqual(cashChange(210,300), [50,20,20]);
        })

    });

});