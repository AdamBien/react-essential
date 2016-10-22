import assert from 'assert';

let expected = "hey";
let actual = "hey";

describe('hello', () => { 
    it('says hello', () => {
        assert.equal(actual,expected);
    });
});