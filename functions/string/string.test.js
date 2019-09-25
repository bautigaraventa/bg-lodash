const stringFunctions = require('./string');

describe('function camelCase', () => {
    it('should', () => {
        expect(stringFunctions.camelCase('hello')).toBe('hello');
    });
});