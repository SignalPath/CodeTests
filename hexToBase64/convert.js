const HexToBase64 = require('./lib/HexToBase64');

const convertor = new HexToBase64();

console.log(convertor.convertTheHardWay(process.argv[2]));
