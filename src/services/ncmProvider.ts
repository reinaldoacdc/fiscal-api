import { NcmProvider } from "./providers.ts";
import ncmList from './ncmList.json' assert { type: "json" };
import { axiod } from "../deps.ts";
import { Ncm } from "../entities/ncm.ts";

export class SefazNcmProvider implements NcmProvider {


  async getNcmList(): Promise<Ncm[]> {

    const fetchNcmListFromSefaz = async () => {
      const url =
        'https://portalunico.siscomex.gov.br/classif/api/publico/nomenclatura/download/json';
    
      const { data: body } = await axiod.get(url);
    
      return body;
    };
    

    try {
      // const response = await fetchNcmListFromSefaz();
      // return response.Nomenclaturas;
      await Promise.resolve(true)
      return ncmList.Nomenclaturas
    } catch (err) {
      return ncmList.Nomenclaturas;
    }    
  }

}