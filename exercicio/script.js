class Carro {
    constructor(marca,modelo,ano,cor,velocidadeMaxima){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
        // acelerar
        this.acelerar = function(km){
            if(km + this.velocidadeAtual <= this.velocidadeMaxima){
                this.velocidadeAtual += km;
                return `Você acelerou ${km} km/h!`;
            }else{
                return `Velocidade não permitida! a velocidade máxima é de ${this.velocidadeMaxima}`
            }
        }
        // desacelerar
        this.desacelerar = function(km){
            if(km <= this.velocidadeAtual){
                this.velocidadeAtual -= km;
                return `Você desacelerou ${km} km/h!`;
            }else{
                return `Velocidade não permitida! a velocidade atual é de ${this.velocidadeAtual}`
            }
        }
        // parar
        this.parar = function(){
            this.velocidadeAtual = 0;
            return "você parou!"
        }
    }
}
