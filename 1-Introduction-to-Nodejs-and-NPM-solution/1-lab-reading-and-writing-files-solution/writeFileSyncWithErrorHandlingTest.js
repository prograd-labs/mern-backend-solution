const fs = require('fs');
const chai = require('chai');
const expect = chai.expect;

describe('Synchronous File Writing and Reading', () => {
    const filePath = 'output.txt';
    const testData = 'This is some text to write to output.txt';

    it('should write data to output.txt successfully', () => {
        try {
            fs.writeFileSync(filePath, testData);
            const writtenData = fs.readFileSync(filePath, 'utf8');
            expect(writtenData).to.equal(testData);
        } catch (err) {
            throw new Error('Test failed. Error: ' + err.message);
        }
    });
});