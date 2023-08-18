class Celular {
    modelo;
    tela;
    camera;
    processador;
    memoria;
    software;
    dono;
    adicionais;
    valor;
}

class Dono{
    constructor(nome,email,idade,backup,numero){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.backup = backup;
        this.numero = numero;
    }
}

var Dono1 = new Dono("Victor","victor@gmail.com",20,false,61999999);

var xiaomi = new Celular();
xiaomi.modelo = "Poco 5";
xiaomi.tela = "OLED";
xiaomi.camera = "112MP";
xiaomi.processador = "SnapDragon855";
xiaomi.memoria = "8G ram";
xiaomi.software = "Android";
xiaomi.dono = "Victor";
xiaomi.adicionais = ["fone","CartãoSD","Capinha"];
xiaomi.valor = 50;
