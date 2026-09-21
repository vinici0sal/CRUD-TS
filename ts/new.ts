const Read = require('readline-sync')

class Conta {

    Saldo: number
    Titular: string

    constructor(valor: number, titular: string) {
        this.Titular = titular
        this.Saldo = valor
    }

    Transferencia = (valor: number) => {


        if (valor >  Saldo) {
            while(valor > Saldo){
                console.log(`O valor digitado é um valor acima do saldo disponivel, digite novamente`)
                valor = Number(Read.question(`Digite o valor para transferir, saldo dispon9vel ${Saldo}`))
            }
        }

        let ValorMin: number = Saldo - valor

        return this.Saldo = ValorMin

        
    }
}


let Saldo: number = Number(Read.question("Digite o saldo: "))

let Titular: string = String(Read.question("Digite o nome do titular da conta: "))

let Banco: Conta = new Conta(Saldo, Titular)
let Transf: number = Number(Read.question("Digite o valor a transferir: "))

console.log(Banco.Transferencia(Transf))