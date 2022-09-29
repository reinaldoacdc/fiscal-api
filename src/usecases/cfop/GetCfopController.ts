import { handleNotFound, handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { CfopProvider } from "../../services/providers.ts";

type Dependencies = {
  cfopProvider: CfopProvider
}

export class GetCfopController implements HttpController {
  private readonly cfopProvider: CfopProvider
  constructor (dependencies: Dependencies) {
    this.cfopProvider = dependencies.cfopProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { code } = request.params;
    console.log('code: ', code)
    const cfopCode = code!.replace(/\D/g, '');
    const allNcmData = await this.cfopProvider.getCfopList();
    const ncmData = allNcmData.find(
      ({ codigo }) => codigo.replace(/\D/g, '') === cfopCode
    );

    if (!ncmData) {
      return handleNotFound('Código CFOP não encontrado')
    }

    return handleSucess(ncmData)
  }
}