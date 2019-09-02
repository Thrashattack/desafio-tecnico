import mongoose from 'mongoose';

import Pessoa from './Pessoa';
import Renda from './Renda';

export default class Familia {
    public static Status: string[] = [
        'Cadastro Valido',
        'Já possui uma casa',
        'Selecionada em outro processo de seleção',
        'Cadastro Incompleto'
    ]
    private readonly _id: Object;
    private _pessoas: Array<Pessoa>;
    private _rendas: Array<Renda>;
    private _status: String;
    

    constructor(id?: string, pessoas?: Array<Pessoa>, rendas?: Array<Renda>, status?: number) {
        if(id) this._id = mongoose.Types.ObjectId(id);
        else this._id = mongoose.Types.ObjectId();

        if (pessoas) this._pessoas = pessoas;
        else this._pessoas = new Array<Pessoa>();

        if (rendas) this._rendas = rendas
        else this._rendas = new Array<Renda>();

        if (status) this._status = Familia.Status[status];
        else this._status = Familia.Status[0];
    }

    get id(): Object {
        return this._id;
    }

    get status(): String {
        return this._status!;
    }

    set status(status: String) {
        this._status = status;
    }

    get pessoas(): Array<Pessoa> {
        return this._pessoas;
    }

    set pessoas(pessoas: Array<Pessoa>) {
        this._pessoas = pessoas;
    }

    get rendas(): Array<Renda> {
        return this._rendas;
    }

    set rendas(rendas: Array<Renda>) {
        this._rendas = rendas;
    }

    get rendaTotal(): Number {
        let sum = 0;
        this._rendas.forEach(renda => sum += renda.valor.valueOf())
        return sum;
    }

    get dependentes(): Array<Pessoa> {
        return this._pessoas.filter(
            pessoa => pessoa.tipo === Pessoa.TiposDePessoas[2]);
    }

    get pretendente(): Pessoa {
        return this._pessoas.filter(pessoa => pessoa.tipo === Pessoa.TiposDePessoas[0])[0];
    }

    adicionarMembro(pessoa: Pessoa) {
        this._pessoas.push(pessoa);
        this._rendas.push(new Renda(pessoa.id.toString(), pessoa.renda || 0));
    }

    

}