function HexToBase64() {}

function validateHexStr(hexStr) {
  if (hexStr.length % 2 !== 0) {
    throw new Error('Hex string must be even length');
  }
  if (!/^[0-9a-fA-F]+$/.test(hexStr)) {
    throw new Error('Hex string must use only hexadecimal characters');
  }
}

function convertHexStrToBinStr(hexStr) {
  let binStr = '';
  for (let i = 0; i < hexStr.length; i += 2) {
    const byteHexStr = hexStr.substring(i, i + 2);
    const byteIntNum = parseInt(byteHexStr, 16);
    const byteBinStr = byteIntNum.toString(2);
    const paddedByteBinStr = byteBinStr.padStart(8, '0');
    binStr += paddedByteBinStr;
  }

  return binStr;
}

function convertBinStrToBase64(binStr) {
  const base64LookUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  let base64Str = '';
  for (let i = 0; i < binStr.length; i += 6) {
    const sixBitStr = binStr.substring(i, i + 6);
    const sixBitNum = parseInt(sixBitStr, 2);
    base64Str += base64LookUp[sixBitNum];
  }

  const unpaddedLen = base64Str.length;
  if (unpaddedLen % 4 > 0) {
    const numPadChars = 4 - (unpaddedLen % 4);
    base64Str = base64Str.padEnd(unpaddedLen + numPadChars, '=');
  }
  return base64Str;
}

HexToBase64.prototype.convert = (hexStr) => {
  validateHexStr(hexStr);
  const buf = Buffer.from(hexStr, 'hex');
  return buf.toString('base64');
};

HexToBase64.prototype.convertTheHardWay = (hexStr) => {
  validateHexStr(hexStr);
  const binStr = convertHexStrToBinStr(hexStr);
  return convertBinStrToBase64(binStr);
};

module.exports = HexToBase64;
