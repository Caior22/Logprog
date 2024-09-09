let dia = 3;
let nomedoDia;

switch (dia) {
  case 1:
    nomedoDia = "Domingo";
    break;
  case 2:
    nomedoDia = "Segunda-feira";
    break;
  case 3:
    nomedoDia = "Terça-feira";
    break;
  case 4:
    nomedoDia = "Quarta-feira";
    break;
  case 5:
    nomedoDia = "Quinta-feira";
    break;
  case 6:
    nomedoDia = "Sexta-feira";
    break;
  case 7:
    nomedoDia = "Sabado";
    break;

  default:
    nomedoDia = "Dia invalido";
}
console.log(`O dia correspondente ao numero ${dia} é ${nomedoDia}.`);
