import Pessoa from '../model/entity/Pessoa';
enum DefaultIdade { MAX_IDADE = 45, MED_IDADE = 30, MIN_IDADE = 18 };
enum DefaultRenda { MAX_RENDA = 2000.00, MED_RENDA = 1500.00, MIN_RENDA = 900.00 };
enum DefaultDependentes { MAX_DEPENDENTES = 3, MIN_DEPENDENTES = 1 };
enum DefaultVariacoes { IDADE = 1, RENDA = 2, DEPENDENTES = 1 };
enum DefaultPontuacao { IDADE = 3, RENDA = 5, DEPENDENTES = 3 };

export default class Pontuador {
    public static idadePretendente(idade: Number) {
        if (idade >= DefaultIdade.MAX_IDADE)
            return DefaultPontuacao.IDADE;
        if (idade >= DefaultIdade.MED_IDADE)
            return DefaultPontuacao.IDADE - DefaultVariacoes.IDADE;
        if (idade >= DefaultIdade.MIN_IDADE)
            return DefaultPontuacao.IDADE - ( DefaultVariacoes.IDADE * 2 );
        return 0;
    }

    public static rendaTotal(renda: Number) {
        if (renda <= DefaultRenda.MIN_RENDA)
            return DefaultPontuacao.RENDA;
        if (renda <= DefaultRenda.MED_RENDA)
            return DefaultPontuacao.RENDA - DefaultVariacoes.RENDA;
        if (renda <= DefaultRenda.MAX_RENDA)
            return DefaultPontuacao.RENDA - ( DefaultVariacoes.RENDA * 2);
        return 0;
    }

    public static dependentesValidos(dependentesValidos: Array<Pessoa>) {
        if(dependentesValidos.length >= DefaultDependentes.MAX_DEPENDENTES)
            return DefaultPontuacao.DEPENDENTES;
        if(dependentesValidos.length >= DefaultDependentes.MIN_DEPENDENTES)
            return DefaultPontuacao.DEPENDENTES - DefaultVariacoes.DEPENDENTES;
        return 0;
    }
}