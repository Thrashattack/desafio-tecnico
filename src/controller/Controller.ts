import express from 'express';
import FamiliaDTO from '../model/dto/FamiliaDTO';
import ContempladoDTO from '../model/dto/ContempladoDTO';
import Classificacao from '../service/Classificacao';

export default class Controller {
    /**
     * @api {post} / Requisita a classificacao de uma familia
     * @apiName Classificação
     * @apiGroup Familias
     *
     * @apiParamExample
     *  {
     *      "_id": "3dac7daf3dac7daf3dac7daf",
     *      "_pessoas": [
     *          { "_id": "3dac7daf3dac7daf3dac7daf", "_nome": "Celina", "_tipo": 0, "_dataDeNascimento": "1989-12-30", "_renda": 1000 },
     *          { "_id": "2ff27daf3dac7daf3dac7daf", "_nome": "Ignacio", "_tipo": 1, "_dataDeNascimento": "1989-12-30", "_renda": 950 },
     *          { "_id": "dcba7daf3dac7daf3dac7daf", "_nome": "Erika", "_tipo": 2, "_dataDeNascimento": "2015-12-30", "_renda": 0 },
     *          { "_id": "dcab7daf3dac7daf3dac7daf", "_nome": "Carlos", "_tipo": 2, "_dataDeNascimento": "2015-12-30", "_renda": 0 }
     *      ],
     *      "_rendas": [
     *          { "_pessoaId": "3dac7daf3dac7daf3dac7daf", "_valor": 1000 },
     *          { "_pessoaId": "2ff27daf3dac7daf3dac7daf", "_valor": 950 }
     *      ],
     *      "_status": "0"
     *  }
     *
     * @apiSuccessExample
     * HTTP 202 Accepted 
     * {
     *      "familiaId":"3dac7daf3dac7daf3dac7daf",
     *      "nomePretendente": "Celina",
     *      "pontuacao":4,
     *      "qtdCriterios":3,
     *      "data": new Date().toLocaleString()
     * }
     *  
     * 
     */
    public static post(req: express.Request, res: express.Response) {
        try {
            const familia = FamiliaDTO.toFamilia(req.body._id, req.body._pessoas, req.body._rendas, req.body._status);
            const contemplado = Classificacao.contemplar(familia);
            const response = ContempladoDTO.toContemplado(contemplado);
            res.status(202);
            res.json(response);
            res.end();
        } catch(err) {            
            res.status(500);
            res.json(err);
            res.end();
        }      
    }
}