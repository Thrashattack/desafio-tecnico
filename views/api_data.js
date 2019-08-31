define({ "api": [
  {
    "type": "post",
    "url": "/",
    "title": "Requisita a classificacao de uma familia",
    "name": "Classifica__o",
    "group": "Familias",
    "parameter": {
      "examples": [
        {
          "title": "{",
          "content": "{\n    \"_id\": \"3dac7daf3dac7daf3dac7daf\",\n    \"_pessoas\": [\n        { \"_id\": \"3dac7daf3dac7daf3dac7daf\", \"_nome\": \"Celina\", \"_tipo\": 0, \"_dataDeNascimento\": \"1989-12-30\", \"_renda\": 1000 },\n        { \"_id\": \"2ff27daf3dac7daf3dac7daf\", \"_nome\": \"Ignacio\", \"_tipo\": 1, \"_dataDeNascimento\": \"1989-12-30\", \"_renda\": 950 },\n        { \"_id\": \"dcba7daf3dac7daf3dac7daf\", \"_nome\": \"Erika\", \"_tipo\": 2, \"_dataDeNascimento\": \"2015-12-30\", \"_renda\": 0 },\n        { \"_id\": \"dcab7daf3dac7daf3dac7daf\", \"_nome\": \"Carlos\", \"_tipo\": 2, \"_dataDeNascimento\": \"2015-12-30\", \"_renda\": 0 }\n    ],\n    \"_rendas\": [\n        { \"_pessoaId\": \"3dac7daf3dac7daf3dac7daf\", \"_valor\": 1000 },\n        { \"_pessoaId\": \"2ff27daf3dac7daf3dac7daf\", \"_valor\": 950 }\n    ],\n    \"_status\": \"0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "HTTP 202 Accepted ",
          "content": "HTTP 202 Accepted \n{\n     \"familiaId\":\"3dac7daf3dac7daf3dac7daf\",\n     \"nomePretendente\": \"Celina\",\n     \"pontuacao\":4,\n     \"qtdCriterios\":3,\n     \"data\": new Date().toLocaleString()\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controller/Controller.ts",
    "groupTitle": "Familias"
  }
] });
