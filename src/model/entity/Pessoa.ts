import mongoose from 'mongoose';

export default class Pessoa {
    public static TiposDePessoas: string[] = ['Pretendente', 'Conjugue', 'Dependente'];
    private readonly _id: Object;
    private _nome: String;
    private _dataDeNascimento: Date;
    private _idade: number;
    private _tipo: String;
    private _renda: Number; 

    constructor(nome: String, dataDeNascimento: String, tipo: number, renda: Number, id?: string) {
        if (id) this._id = mongoose.Types.ObjectId(id.valueOf());
        else this._id = mongoose.Types.ObjectId();
        this._nome = nome;
        this._dataDeNascimento = new Date(dataDeNascimento.valueOf());
        this._tipo = Pessoa.TiposDePessoas[tipo];
        this._renda = renda;
        const nascimento = new Date(dataDeNascimento.valueOf());
        const hoje = new Date();
        this._idade = Math.floor(Math.ceil(Math.abs(
            nascimento.getTime() - hoje.getTime()
        ) / (1000 * 3600 * 24)) / 365.25
        );
    }

    get id(): Object {
        return this._id;
    }

    get nome(): String {
        return this._nome;
    }

    set nome(nome: String) {
        this._nome = nome;
    }

    get tipo(): String {
        return this._tipo;
    }

    set tipo(tipo: String) {
        this._tipo = tipo;
    }

    get renda(): Number {
        return this._renda;
    }

    set renda(renda: Number) {
        this._renda = renda;
    }

    get nascimento(): Date {
        return this._dataDeNascimento;
    }

    set nascimento(data: Date) {
        this._dataDeNascimento = data;
    }

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    } 
}
