import Familia from '../model/entity/Familia';
import Pessoa from '../model/entity/Pessoa';
import Contemplado from '../model/entity/Contemplado';
import Pontuador from './Pontuador';

export default class Classificacao {
    public static contemplar(familia: Familia): Contemplado {
        const pretendente: Pessoa = familia.pretendente
        const ptsIdadePretendente = Pontuador.idadePretendente(pretendente.idade);
        const ptsRendaTotal = Pontuador.rendaTotal(familia.rendaTotal);
        const ptsDependentesValidos = Pontuador.dependentesValidos(
            familia.dependentes.filter(dependente => dependente.idade < 18)
        );

        let qtdCriterios = 3;
        if(ptsIdadePretendente === 0) qtdCriterios--;
        if(ptsRendaTotal === 0) qtdCriterios--;
        if(ptsDependentesValidos === 0) qtdCriterios--;

        const pontuacaoTotal = ptsIdadePretendente + ptsRendaTotal + ptsDependentesValidos;
        
        return new Contemplado(familia.id, pontuacaoTotal, qtdCriterios, new Date());
    }   
}