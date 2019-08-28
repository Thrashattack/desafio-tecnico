import Contemplado from "../entity/Contemplado";

export default class ContempladoDTO {
    public static toContemplado(raw: Contemplado) {
        return {
            familiaId: raw.familiaId,
            pontuacao: raw.pontuacao,
            qtdCriterios: raw.criterios,
            data: raw.data.toLocaleString()
        }
    }   
}