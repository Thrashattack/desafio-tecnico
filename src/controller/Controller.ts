import {Request, Response} from 'express';
import FamiliaDTO from '../model/dto/FamiliaDTO';
import ContempladoDTO from '../model/dto/ContempladoDTO';
import Classificado from '../service/Classificado';

export default class Controller {
    /**
     * @api {post} / Requisita a Classificacao de uma familia
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
     * [
     *  {
     *      "familiaId":"3dac7daf3dac7daf3dac7daf",
     *      "nomePretendente": "Celina",
     *      "pontuacao":4,
     *      "qtdCriterios":3,
     *      "data": new Date().toLocaleString()
     *  }
     * ]
     *  
     * 
     * @apiError BadRequest Corpo do objeto da família está incorreto
     * 
     * @apiErrorExample 
     * {
     *   "Corpo do objeto {Object} está incorreto"
     * }
     * 
     */
    public static post(req: Request, res: Response) {
        let responseArray: Array<any> = new Array<any>();
        req.body.forEach((familia: any) => {
            try {
                const familiaObj = FamiliaDTO.toFamilia(familia._id, familia._pessoas, familia._rendas, familia._status);
                if(!familiaObj) {
                    res.status(400);
                    res.send(`Corpo do objeto ${familia} \nestá incorreto`);
                    res.end();
                }
                const classificado = new Classificado(familiaObj);
                const contemplado = classificado.contemplar();
                const response = ContempladoDTO.toResponse(contemplado);
                responseArray.push(response);
            } catch(err) {            
                res.status(500);
                res.json(err);
                res.end();
            } 
        });                  
        res.status(202);
        res.json(responseArray);
        res.end();             
    }
}