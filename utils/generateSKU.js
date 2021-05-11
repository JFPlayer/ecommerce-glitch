const generateSKU = (length = 8) => {
  const characters = 'ABCDEFGHIJK0123456789';
  let result = '';
  for(let i = 0; i<= length; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = generateSKU;