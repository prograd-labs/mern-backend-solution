const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

chai.use(chaiAsPromised);
const { expect } = chai;

const main = require('./readFileWithErrorHandlingUsingPromisify');

describe('Asynchronous File Reading', () => {
    it('should read content from input1.txt', async () => {
        await expect(readFileAsync('input1.txt', 'utf-8')).to.eventually.equal('Hello ProGradians!');
    });

    it('should read content from input2.txt', async () => {
        await expect(readFileAsync('input2.txt', 'utf-8')).to.eventually.equal('We are learning Reading and Writing Files Asynchronously in Node with Error Handling.');
    });
})