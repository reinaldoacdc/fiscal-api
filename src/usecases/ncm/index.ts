import { HttpController } from "../../routes/ControllerProtocols.ts";
import { SefazNcmProvider } from "../../services/ncm/ncmProvider.ts";
import { GetNcmController } from "./GetNcmController.ts";
import { ListNcmController } from "./ListNcmController.ts";

export const makeListNcmController = (): HttpController => {
  const ncmProvider = new SefazNcmProvider()
  const controller = new ListNcmController({ ncmProvider })
  return controller
}

export const makeGetNcmController = (): GetNcmController => {
  const ncmProvider = new SefazNcmProvider()
  const controller = new GetNcmController({ ncmProvider })
  return controller
}