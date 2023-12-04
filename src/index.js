// Projeto - Escrevendo as classes de um jogo

class hero{
    constructor(nameHero, age, type){
        this.nameHero = nameHero
        this.age = age
        this.type = type
    }
    attack(){
        if (this.type === "guerreiro"){
            console.log(`O ${this.type} atacou usando espada`)
        } else if (this.type === "mago"){
            console.log(`O ${this.type} atacou usando magia`)
        } else if (this.type === "monge"){
            console.log(`O ${this.type} atacou usando artes marciais`)
        } else if (this.type === "ninja"){
            console.log(`O ${this.type} atacou usando shuriken`)
        } 
    }
}

let heroAttack = new hero("","","ninja")

heroAttack.attack()