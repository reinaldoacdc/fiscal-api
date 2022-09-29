import { HttpController } from "../../routes/ControllerProtocols.ts"
import { GistCfopProvider } from "../../services/cfopProvider.ts";
import { GetCfopController } from "./GetCfopController.ts";
import { ListCfopController } from "./ListCfopController.ts"

export const makeListCfopController = (): HttpController => {
  const cfopProvider = new GistCfopProvider()
  const controller = new ListCfopController({ cfopProvider })
  return controller
}

export const makeGetCfopController = (): HttpController => {
  const cfopProvider = new GistCfopProvider()
  const controller = new GetCfopController({ cfopProvider })
  return controller
}