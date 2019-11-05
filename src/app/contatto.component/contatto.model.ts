export class Contatto {

  nome: string;
  cognome: string;
  email: string;
  cell: string;
  numStelle: number;

  constructor(nome: string, cognome: string, email: string, cell: string, stelle: number) {

    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.cell = cell;
    this.numStelle = stelle;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.cognome;
  }

  isPreferito() {
    return this.numStelle == 5;
  }

  setPreferito() {
    this.numStelle = 5;
  }
}