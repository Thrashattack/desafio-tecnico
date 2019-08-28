import mongoose from 'mongoose';

export default class Contemplado {
    private readonly _id: Object;
    private _familiaId: Object;
    private _pontuacaoTotal: Number;
    private _qtdCriterios: Number;
    private _dataDeSelecao: Date; 

    constructor(familiaId: Object, pontuacao: Number, criterios: Number, data: Date) {
        this._id = mongoose.Types.ObjectId();
        this._familiaId = familiaId;
        this._pontuacaoTotal = pontuacao;
        this._qtdCriterios = criterios;
        this._dataDeSelecao = data;
    }

    get familiaId(): Object {
        return this._id;
    }

    get familia(): Object {
        return this._familiaId;
    }

    set familia(id: Object) {
        this._familiaId = id;
    }

    get pontuacao(): Number {
        return this._pontuacaoTotal;
    }

    set pontuacao(pontos: Number) {
        this._pontuacaoTotal = pontos;
    }

    get criterios(): Number {
        return this._qtdCriterios;
    }

    set criterios(criterios: Number) {
        this._qtdCriterios = criterios;
    }

    get data(): Date {
        return this._dataDeSelecao;
    }

    set data(data: Date) {
        this._dataDeSelecao = data;
    }
}