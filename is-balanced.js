module.exports = (str) => {
  const long = str.length;

  if (long % 2 !== 0) {
    return false;
  }

  const strArray = Array.from(str);
  const validOpenChars = ['(', '[', '{'];
  const validCloseChars = [')', ']', '}'];
  const aperturas = [];

  for (let index = 0; index < strArray.length; index++) {
    const element = strArray[index];

    if (
      validOpenChars.indexOf(element) === -1 &&
      validCloseChars.indexOf(element) === -1
    ) {
      continue;
    }

    if (validOpenChars.indexOf(element) !== -1) {
      aperturas.push(element);
      continue;
    }

    const ultimaApertura = aperturas[aperturas.length - 1];

    switch (element) {
      case ')':
        if (ultimaApertura === '(') {
          aperturas.pop();
          continue;
        }
        console.log('Fail 1: ' + index + ' - ' + element + ' - ' + ultimaApertura);
        return false;
      case ']':
        if (ultimaApertura === '[') {
          aperturas.pop();
          continue;
        }
        console.log('Fail 2: ' + index + ' - ' + element + ' - ' + ultimaApertura);
        return false;
      case '}':
        if (ultimaApertura === '{') {
          aperturas.pop();
          continue;
        }
        console.log('Fail 3: ' + index + ' - ' + element + ' - ' + ultimaApertura);
        return false;
      default:
        console.log('Fail 4: ' + index + ' - ' + element + ' - ' + ultimaApertura);
        return false;
    }
  }

  if (aperturas.length > 0) {
    return false;
  }

  return true;
};
