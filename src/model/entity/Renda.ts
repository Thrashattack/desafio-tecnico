import mongoose from 'mongoose';

export default class Renda {
    private readonly _pessoaId: Object;
    private _valor: Number;

    constructor(id: string, valor: Number) {
        this._pessoaId = mongoose.Types.ObjectId(id);
        this._valor = valor;
    }

    get id(): Object {
        return this._pessoaId;
    }

    get valor(): Number {
        return this._valor;
    }

    set valor(valor: Number) {
        this._valor = valor;
    }
}