import Familia from '../model/entity/Familia';
import Contemplado from '../model/entity/Contemplado';
import Pontuador from './Pontuador';

export default class Classificado extends Contemplado {
    private _score: Pontuador;
    constructor(familia: Familia) {
        super(familia.pretendente.nome, familia.id, 0, 0, new Date());
        this._score = new Pontuador(familia.pretendente.idade, familia.rendaTotal, familia.dependentes);
    }

    public contemplar() {
        this.pontuacao = this._score.pontuacaoIdadePretendente()
            + this._score.pontuacaoRendaTotal()
            + this._score.pontuacaoDependentesValidos()

        let qtdCriteriosAtingidos = 3;
        this._score.pontuacaoIdadePretendente() === 0 ? qtdCriteriosAtingidos-- : 0;
        this._score.pontuacaoRendaTotal() === 0 ? qtdCriteriosAtingidos-- : 0;
        this._score.pontuacaoDependentesValidos() === 0 ? qtdCriteriosAtingidos-- : 0;

        this.criterios = qtdCriteriosAtingidos;
        this.data = new Date();
    }
}