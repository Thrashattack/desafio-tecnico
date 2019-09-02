import Pessoa from '../model/entity/Pessoa';

export default class Pontuador {
  public static DefaultIdade: any = { MAX_IDADE: 45, MED_IDADE: 30, MIN_IDADE: 18 };
  public static DefaultRenda: any = { MAX_RENDA: 2000.00, MED_RENDA: 1500.00, MIN_RENDA: 900.00 };
  public static DefaultDependentes = { MAX_DEPENDENTES: 3, MIN_DEPENDENTES: 1 };
  public static DefaultVariacoes: any = { IDADE: 1, RENDA: 2, DEPENDENTES: 1 };
  public static DefaultPontuacao: any = { IDADE: 3, RENDA: 5, DEPENDENTES: 3 };
  private _idade: number;
  private _rendaTotal: Number;
  private _dependentes: Array<Pessoa>;

  constructor(idade: number, rendaTotal: Number, dependentes: Array<Pessoa>) {
    this._idade = idade;
    this._rendaTotal = rendaTotal;
    this._dependentes = dependentes.filter(dependente => dependente.idade < 18);
  }
  public pontuacaoIdadePretendente(): number {
    return this._idade >= Pontuador.DefaultIdade.MAX_IDADE ?
      Pontuador.DefaultPontuacao.IDADE :
      this._idade >= Pontuador.DefaultIdade.MED_IDADE ?
        Pontuador.DefaultPontuacao.IDADE - Pontuador.DefaultVariacoes.IDADE :
        this._idade >= Pontuador.DefaultIdade.MIN_IDADE ?
          Pontuador.DefaultPontuacao.IDADE - (Pontuador.DefaultVariacoes.IDADE * 2) :
          0;
  }

  public pontuacaoRendaTotal(): number {
    return this._rendaTotal <= Pontuador.DefaultRenda.MIN_RENDA ?
      Pontuador.DefaultPontuacao.RENDA :
      this._rendaTotal <= Pontuador.DefaultRenda.MED_RENDA ?
        Pontuador.DefaultPontuacao.RENDA - Pontuador.DefaultVariacoes.RENDA :
        this._rendaTotal <= Pontuador.DefaultRenda.MAX_RENDA ?
          Pontuador.DefaultPontuacao.RENDA - (Pontuador.DefaultVariacoes.RENDA * 2) :
          0;
  }

  public pontuacaoDependentesValidos(): number {
    return this._dependentes.length >= Pontuador.DefaultDependentes.MAX_DEPENDENTES ?
      Pontuador.DefaultPontuacao.DEPENDENTES :
      this._dependentes.length >= Pontuador.DefaultDependentes.MIN_DEPENDENTES ?
        Pontuador.DefaultPontuacao.DEPENDENTES - Pontuador.DefaultVariacoes.DEPENDENTES :
        0;
  }

}