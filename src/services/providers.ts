import { Ncm } from "../entities/ncm.ts";
import { Cfop } from "../entities/cfop.ts";

export interface NcmProvider {
  getNcmList: () => Promise<Ncm[]>
}

export interface CfopProvider {
  getCfopList: () => Promise<Cfop[]>
}