import { Ncm } from "../entities/ncm.ts";
import { Cfop } from "../entities/cfop.ts";
import { Cest } from '../entities/cest.ts'

export interface NcmProvider {
  getNcmList: () => Promise<Ncm[]>
}

export interface CfopProvider {
  getCfopList: () => Promise<Cfop[]>
}

export interface CestProvider {
  getCestList: () => Promise<Cest[]>
}