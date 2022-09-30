import { handleNotFound, handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { NcmProvider } from "../../services/providers.ts";

type Dependencies = {
  ncmProvider: NcmProvider
}

export class GetNcmController implements HttpController {
  private readonly ncmProvider: NcmProvider
  constructor (dependencies: Dependencies) {
    this.ncmProvider = dependencies.ncmProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { code } = request.params;
    console.log('code: ', code)
    const ncmCode = code!.replace(/\D/g, '');
    const allNcmData = await this.ncmProvider.getNcmList();
    const ncmData = allNcmData.find(
      ({ codigo }) => codigo.replace(/\D/g, '') === ncmCode
    );

    if (!ncmData) {
      return handleNotFound('Código NCM não encontrado')
    }

    return handleSucess(ncmData)
  }
}