const HexToBase64 = require('../lib/HexToBase64');

describe('HexToBase64', () => {
  const convertor = new HexToBase64();

  ['convert', 'convertTheHardWay'].forEach((convertFnName) => {
    describe(convertFnName, () => {
      it('should throw if input is not even length', () => {
        expect(() => convertor[convertFnName]('4')).toThrowError('Hex string must be even length');
      });

      it('should throw if input contains characters other than 0-9, a-f, or A-F', () => {
        expect(() => convertor[convertFnName]('0G')).toThrowError(
          'Hex string must use only hexadecimal characters',
        );
      });

      it('should be able to convert a hexadecimal string', () => {
        const base64 = convertor[convertFnName]('45766964696e74');
        expect(base64).toEqual('RXZpZGludA==');
      });

      it('should not pad when number of bits is a multiple of 6', () => {
        const base64 = convertor[convertFnName]('45766964696e');
        expect(base64).toEqual('RXZpZGlu');
      });
    });
  });
});
