const assertEquals = require('./../test-framework');
const countEvenNumber = require('./../src/countEvenNumber');



describe('Even number count from', function() {
    it('[1, 2, 3, 4, 5, 6] should be 3', function() {
        expect(countEvenNumber([1, 2, 3, 4, 5, 6])).toEqual(3);
    })

    it('[0, 1, 2] should be 2', function() {
        expect(countEvenNumber([0, 1, 2])).toEqual(2);
    })

    it('[1, 3, 5] should be 0', function() {
        expect(countEvenNumber([1, 3, 5])).toEqual(0);
    })
})
