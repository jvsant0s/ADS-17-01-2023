class Veiculos {
    cor: string; //string: cadeia de carecteres
    ano:number;  //number: numero inteiros
    doc_ok: boolean; //boolean: verdadeiro ou falso
    
    constructor(c:string, a: number, d:boolean) {
        this.cor = c;
        this.ano = a;
        this.doc_ok= d; 
    }
    exibirDocs():void {
        console.log(`O Veículo tem a cor ${this.cor},ano ${this.ano} e o documento esta ${this.doc_ok}`)
        
    
    }
    
    }
    let veiculo = new Veiculos("Verde", 2022 , true)
    veiculo.exibirDocs()
    
    class Carros{
    
    
    }
    
    class Motos {
    
    
    }