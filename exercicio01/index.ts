class HeroiDaMarvel {
    teletransporte: boolean;
    regeneracao: boolean;
    super_forca: boolean;
    imortalidade: boolean;

    constructor(teletransporte: boolean, regeneracao: boolean, super_forca: boolean, imortalidade: boolean) {
        this.teletransporte = teletransporte;
        this.regeneracao = regeneracao;
        this.super_forca = super_forca;
        this.imortalidade = imortalidade;
    }

    voar() {
        console.log("Voando");
    }

    correrRapido() {
        console.log("Correndo muito rápido");
    }

    bater() {
        console.log("Bater");
    }

    lutar() {
        console.log("Lutando");
    }
}

class Vingadores extends HeroiDaMarvel {
    constructor(teletransporte: boolean, regeneracao: boolean, super_forca: boolean, imortalidade: boolean) {
        super(teletransporte, regeneracao, super_forca, imortalidade);
    }
}

class VingadoresMortos extends Vingadores {
    constructor(teletransporte: boolean, regeneracao: boolean, super_forca: boolean, imortalidade: boolean) {
        super(teletransporte, regeneracao, super_forca, imortalidade);
    }
}
