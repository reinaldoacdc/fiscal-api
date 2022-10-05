import { IbptImpostoProvider } from "../../services/imposto/ibptProvider.ts"
import { GetImpostoByNcmController } from "./GetImpostoByNcmController.ts"
import { GetImpostoUfController } from "./GetImpostoUfController.ts"

export const makeGetImpostoUfController = (): GetImpostoUfController => {
  const impostoProvider = new IbptImpostoProvider()
  const controller = new GetImpostoUfController({ impostoProvider })
  return controller
}

export const makeGetImpostoByNcmController = (): GetImpostoByNcmController => {
  const impostoProvider = new IbptImpostoProvider()
  const controller = new GetImpostoByNcmController({ impostoProvider })
  return controller
}