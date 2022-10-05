import { handleNotFound, handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { ImpostoProvider } from "../../services/providers.ts";

type Dependencies = {
  impostoProvider: ImpostoProvider
}

export class GetImpostoUfController implements HttpController {
  private readonly impostoProvider: ImpostoProvider
  constructor (dependencies: Dependencies) {
    this.impostoProvider = dependencies.impostoProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { uf } = request.params;
    const data = await this.impostoProvider.getImpostoUf(uf);
 
    if (!data) {
      return handleNotFound('UF não encontrada')
    }

    return handleSucess(data)
  }
}