import Familia from '../model/entity/Familia';
import Contemplado from '../model/entity/Contemplado';
import Pontuador from './Pontuador';

export default class Classificado {
    private readonly _ptsIdadePretendente: number;
    private readonly _ptsRendaTotal: number;
    private readonly _ptsDependentesValidos: number;
    private readonly _nomePretendente: String;
    private readonly _familiaId: Object;    

    constructor(familia: Familia) {

        this._ptsIdadePretendente = Pontuador.idadePretendente(familia.pretendente.idade);
        this._ptsRendaTotal = Pontuador.rendaTotal(familia.rendaTotal);
        this._ptsDependentesValidos = Pontuador.dependentesValidos(
            familia.dependentes.filter(dependente => dependente.idade < 18)
        );
        this._nomePretendente = familia.pretendente.nome; 
        this._familiaId = familia.id;
    }

    private contaCriterios(ptsIdade: number, ptsRenda: number, ptsDependente: number): number {
        let qtdCriterios = 3;
        if(ptsIdade === 0) qtdCriterios--;
        if(ptsRenda === 0) qtdCriterios--;
        if(ptsDependente === 0) qtdCriterios--;
        return qtdCriterios;
    }
    public contemplar(): Contemplado {    
        const pontuacaoTotal = this._ptsIdadePretendente
                             + this._ptsRendaTotal
                             + this._ptsDependentesValidos;

        const qtdCriterios = this.contaCriterios(this._ptsIdadePretendente, this._ptsRendaTotal, this._ptsDependentesValidos);
        return new Contemplado(
            this._nomePretendente,
            this._familiaId,
            pontuacaoTotal,
            qtdCriterios,
            new Date()
        );
    }   
}