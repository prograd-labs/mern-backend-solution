const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;

describe('Synchronous File Reading', function () {
    it('should read input1.txt successfully', function () {
        try {
            const data1 = fs.readFileSync('input1.txt', 'utf8');
            expect(data1).to.be.a('string');
        } catch (err) {
            if (err.code === 'ENOENT') {
                throw new Error('File not found: input1.txt');
            } else {
                throw err;
            }
        }
    });

    it('should read input2.txt successfully', function () {
        try {
            const data2 = fs.readFileSync('input2.txt', 'utf8');
            expect(data2).to.be.a('string');
        } catch (err) {
            if (err.code === 'ENOENT') {
                throw new Error('File not found: input2.txt');
            } else {
                throw err;
            }
        }
    });
});