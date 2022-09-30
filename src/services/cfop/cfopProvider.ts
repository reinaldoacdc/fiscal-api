import { CfopProvider } from "../providers.ts";
import cfopList from './cfopList.json' assert { type: "json" };
import { Cfop } from "../../entities/cfop.ts";


export class GistCfopProvider implements CfopProvider {

  async getCfopList (): Promise<Cfop[]> {
    await Promise.resolve(true)
    // List available at: https://gist.github.com/reinaldoacdc/b9ad02386c7fdb7a5c066769d224ac67
    return cfopList.list
  }
}