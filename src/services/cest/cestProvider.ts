import { CestProvider } from "../providers.ts";
import cestList from './cestList.json' assert { type: "json" };
import { Cest } from "../../entities/cest.ts";


export class GistCestProvider implements CestProvider {

  async getCestList (): Promise<Cest[]> {
    await Promise.resolve(true)
    // List available at: 
    return cestList.list
  }
}