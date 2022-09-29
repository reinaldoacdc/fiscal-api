import { Ncm } from "../entities/ncm.ts";

export interface NcmProvider {
  getNcmList: () => Promise<Ncm[]>
}