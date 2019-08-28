import Familia from '../entity/Familia';
import Renda from '../entity/Renda';
import Pessoa from '../entity/Pessoa';

export default class FamiliaDTO {

    public static toFamilia(id: string, rawPessoas: Array<Object>, rawRendas: Array<Object>, rawStatus: any): Familia {
        const pessoas = rawPessoas.map((pessoa: any) => new Pessoa(pessoa._nome, pessoa._dataDeNascimento, pessoa._tipo, pessoa._renda, pessoa._id));
        const rendas = rawRendas.map((renda: any) => new Renda(renda._pessoaId, renda._valor));
        const status = Number.parseInt(rawStatus);

        return new Familia(id, pessoas, rendas, status);
    }

}