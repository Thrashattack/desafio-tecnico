import Familia from '../model/entity/Familia';
import Contemplado from '../model/entity/Contemplado';
import Pontuador from './Pontuador';

export default class Classificado extends Pontuador {
    private readonly _nomePretendente: String;
    private readonly _familiaId: Object;

    constructor(familia: Familia) {
        super(familia.pretendente.idade, familia.rendaTotal, familia.dependentes);
        this._nomePretendente = familia.pretendente.nome;
        this._familiaId = familia.id;
    }

    public contemplar(): Contemplado {
        const pontuacaoTotal = this.pontuacaoIdadePretendente()
            + this.pontuacaoRendaTotal()
            + this.pontuacaoDependentesValidos()

        let qtdCriteriosAtingidos = 3;
        this.pontuacaoIdadePretendente() === 0 ? qtdCriteriosAtingidos-- : 0;
        this.pontuacaoRendaTotal() === 0 ? qtdCriteriosAtingidos-- : 0;
        this.pontuacaoDependentesValidos() === 0 ? qtdCriteriosAtingidos-- : 0;

        return new Contemplado(
            this._nomePretendente,
            this._familiaId,
            pontuacaoTotal,
            qtdCriteriosAtingidos,
            new Date()
        );
    }
}