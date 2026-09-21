const Read = require('readline-sync')

class Conta {

    Saldo: number
    Titular: string

    constructor(valor: number, titular: string) {
        this.Titular = titular
        this.Saldo = valor
    }

    Transferencia = (valor: number) => {

        let ValorMin : number = Saldo - valor

        if()

        return this.Saldo
    }
}


let Saldo: number = Number(
    Read.question("Digite o saldo: ")
)

let Titular: string = String(
    Read.question("Digite o nome do titular da conta: ")
)

let Banco: Conta = new Conta(Saldo, Titular)

let Transf: number = Number(
    Read.question("Digite o valor a transferir: ")
)

Banco.Transferencia(Transf)