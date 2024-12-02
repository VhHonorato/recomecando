//Calcule a distância entre dois pontos utilizando a seguinte fórmula, considerando que (x1, y1) e (x2, y2) sejam dois pontos em um plano:

let x1 = 1, x2 = 1, y1 = 1, y2 = 4;
let d = Math.sqrt(Math.pow((x2-x1), 2)+ Math.pow((y2-y1), 2));
console.log(`A distância entre os pontos é ${d}`);