import { IbptImpostoProvider } from "../../services/imposto/ibptProvider.ts"
import { GetImpostoUfController } from "./GetImpostoUfController.ts"

export const makeGetImpostoUfController = (): GetImpostoUfController => {
  const impostoProvider = new IbptImpostoProvider()
  const controller = new GetImpostoUfController({ impostoProvider })
  return controller
}