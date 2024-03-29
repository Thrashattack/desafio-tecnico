import Contemplado from "../entity/Contemplado";

export default class ContempladoDTO {
    public static toResponse(raw: Contemplado) {
        return {
            familiaId: raw.familia,
            nomePretendente: raw.nomePretendente,
            pontuacao: raw.pontuacao,
            qtdCriterios: raw.criterios,
            data: raw.data.toLocaleString()
        }
    }
}