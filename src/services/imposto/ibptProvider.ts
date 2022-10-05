import { parseCsv } from "../../deps.ts";
import { Imposto } from "../../entities/imposto.ts";
import { ImpostoProvider } from "../providers.ts";

export class IbptImpostoProvider implements ImpostoProvider {

  async getImpostoUf(uf: string): Promise<Imposto[]>  {
    const parseImposto = (imposto: any): Imposto => {
      return {
        ...imposto,

      }
    }

    const content = await parseCsv(await Deno.readTextFile(`./src/services/imposto/${uf}.csv`), {
      skipFirstRow: true,
      separator: ';',
    } );
    const impostoList = content.map(el => {
      return parseImposto(el)
    } )

    return impostoList
  }
  
}