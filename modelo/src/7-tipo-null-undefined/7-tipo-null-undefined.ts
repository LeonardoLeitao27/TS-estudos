let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') {
    return x * x;
  }
  return null;
}

const quadradoNumero = squareOf(2);
const quadradoString = squareOf('LLL');

console.log(quadradoNumero, quadradoString);
