import { NcmProvider } from "../providers.ts";
import ncmList from './ncmList.json' assert { type: "json" };
import { axiod } from "../../deps.ts";
import { Ncm } from "../../entities/ncm.ts";

export class SefazNcmProvider implements NcmProvider {

  parseObject (obj: Ncm) {
    const formatDate = (date: string) => {
      const value = date.split('/').reverse().join('-')
      const newDate = new Date(value);
      return newDate.toISOString().slice(0, 10);
    };

    const newObj = Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v])
    );
    newObj.data_fim = formatDate(newObj.data_fim);
    newObj.data_inicio = formatDate(newObj.data_inicio);
    return newObj;
  }



  async getNcmList (): Promise<Ncm[]> {

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
      const response = ncmList.Nomenclaturas
      const list = response.map((el) => {
        return this.parseObject(el);
      });
      return list as Ncm[]
    } catch (err) {
      const response = ncmList.Nomenclaturas
      const list = response.map((el) => {
        return this.parseObject(el);
      });
    }
  }

}