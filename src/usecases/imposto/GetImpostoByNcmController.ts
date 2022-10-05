import { handleNotFound, handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { ImpostoProvider } from "../../services/providers.ts";

type Dependencies = {
  impostoProvider: ImpostoProvider
}

export class GetImpostoByNcmController implements HttpController {
  private readonly impostoProvider: ImpostoProvider
  constructor (dependencies: Dependencies) {
    this.impostoProvider = dependencies.impostoProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { code } = request.params;
    const data = await this.impostoProvider.getImposto();
 
    const list = data.filter( el => {
      return (el.codigo === code)
    })

    if (!data) {
      return handleNotFound('NCM não encontrado')
    }

    return handleSucess(list)
  }
}