import axios from "axios";

export const bairrosArray = [
  { name: "Brooklin Novo", count: 2 },
  { name: "Brooklin", count: 98 },
  { name: "Aclimação", count: 2 },
  { name: "Alto De Pinheiros", count: 13 },
  { name: "Campo Belo", count: 62 },
  { name: "Bela Vista", count: 2 },
  { name: "Alto Da Boa Vista", count: 39 },
  { name: "Alto Boa Vista", count: 2 },
  { name: "Brooklin Paulista", count: 2 },
  { name: "Chácara Flora", count: 3 },
  { name: "Chácara Santo Antônio", count: 5 },
  { name: "Cerqueira César", count: 1 },
  { name: "Cidade Jardim", count: 12 },
  { name: "Chácara Monte Alegre", count: 1 },
  { name: "Chac Monte Alegre", count: 1 },
  { name: "Consolação", count: 1 },
  { name: "Ipiranga", count: 1 },
  { name: "Jardim América", count: 59 },
  { name: "Indianópolis", count: 3 },
  { name: "Jardim Guedala", count: 5 },
  { name: "Jardim Luzitânia", count: 19 },
  { name: "Higienópolis", count: 4 },
  { name: "Itaim Bibi", count: 79 },
  { name: "Granja Julieta", count: 5 },
  { name: "Itaim", count: 2 },
  { name: "Ibirapuera", count: 7 },
  { name: "Morumbi", count: 5 },
  { name: "Jardim Novo Mundo", count: 1 },
  { name: "Jardim Paulista", count: 194 },
  { name: "Vila Mascote", count: 1 },
  { name: "Jardim Europa", count: 17 },
  { name: "Paraíso", count: 50 },
  { name: "Planalto Paulista", count: 4 },
  { name: "Pinheiros", count: 34 },
  { name: "Vila Mariana", count: 29 },
  { name: "Jardins", count: 72 },
  { name: "Pacaembu", count: 1 },
  { name: "Perdizes", count: 1 },
  { name: "Vila Madalena", count: 7 },
  { name: "Vila Clementino", count: 1 },
  { name: "Vila Olímpia", count: 50 },
  { name: "Moema", count: 201 },
  { name: "Morro dos Ingleses", count: 1 },
  { name: "Jardim Paulistano", count: 13 },
  { name: "Vila Nova Conceição", count: 220 },
  { name: "Vila Uberabinha", count: 1 }
];

export const baseUrl = "http://angloame16738-rest.vistahost.com.br";
export const key = "7bd1ce1edbf6054a8ef2202eb9f943c7";

export const minMaxArea = async () => {
  const callForAreas = await axios.get(
    `${baseUrl}/imoveis/listarConteudo?key=${key}&pesquisa={"fields":["AreaTotal"]}`
  );
  const response = await callForAreas.data.AreaTotal;

  return response;
};
