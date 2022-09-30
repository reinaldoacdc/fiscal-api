import { handleNotFound, handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { CestProvider } from "../../services/providers.ts";

type Dependencies = {
  cestProvider: CestProvider
}

export class GetCestController implements HttpController {
  private readonly cestProvider: CestProvider
  constructor (dependencies: Dependencies) {
    this.cestProvider = dependencies.cestProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { code } = request.params;
    const cfopCode = code!.replace(/\D/g, '');
    const allNcmData = await this.cestProvider.getCestList();
    const cestData = allNcmData.filter(
      ({ codigo }) => codigo.replace(/\D/g, '') === cfopCode
    );

    if (!cestData) {
      return handleNotFound('Código CEST não encontrado')
    }

    return handleSucess(cestData)
  }
}