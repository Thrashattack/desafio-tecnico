import Classificacao from '../Classificado';
import ContempladoDTO from '../../model/dto/ContempladoDTO';
import FamiliaDTO from '../../model/dto/FamiliaDTO';
import Familia from '../../model/entity/Familia';
import Contemplado from '../../model/entity/Contemplado';

import expect from './contemplado.expect.test';
import snap from './familia.snapshot.test';

const familiaRaw: any = JSON.parse(snap)
const familia: Familia = FamiliaDTO.toFamilia(
    familiaRaw._id,
    familiaRaw._pessoas,
    familiaRaw._rendas,
    familiaRaw._status
);
const classificacao: Classificacao = new Classificacao(familia);
const contemplado: Contemplado = classificacao.contemplar();
const result: any = JSON.stringify(ContempladoDTO.toResponse(contemplado));

console.log("\n");
console.log(expect);
console.log(result);
console.log("\n");
console.log("\t\tExpect: ");
console.log("\n\t {'id...'" + expect.slice(37) + "\n")
console.log("\t\tTest Result: ");
console.log("\n\t {'id...'" + result.slice(39) + "\n");
console.log("Passed: " + (expect.slice(37) === result.slice(39))); // desconsidera o id