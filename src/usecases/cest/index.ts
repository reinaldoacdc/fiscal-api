import { HttpController } from "../../routes/ControllerProtocols.ts"
import { GistCestProvider } from "../../services/cest/cestProvider.ts"
import { GetCestController } from "./GetCestController.ts"
import { GetCestByNcmControllerController } from "./GetCestByNcmController.ts"
import { ListCestController } from "./ListCestController.ts"

export const makeListCestController = (): HttpController => {
  const cestProvider = new GistCestProvider()
  const controller = new ListCestController({ cestProvider })
  return controller
}

export const makeGetCestController = (): HttpController => {
  const cestProvider = new GistCestProvider()
  const controller = new GetCestController({ cestProvider })
  return controller
}

export const makeGetCestByNcmController = (): HttpController => {
  const cestProvider = new GistCestProvider()
  const controller = new GetCestByNcmControllerController({ cestProvider })
  return controller
}