import { handleNotFound, handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { CestProvider } from "../../services/providers.ts";

type Dependencies = {
  cestProvider: CestProvider
}

export class GetCestByNcmControllerController implements HttpController {
  private readonly cestProvider: CestProvider
  constructor (dependencies: Dependencies) {
    this.cestProvider = dependencies.cestProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { code } = request.params;
    const ncmCode = code!.replace(/\D/g, '');
    const allCestData = await this.cestProvider.getCestList();
    const cestData = allCestData.filter(
      ({ ncm }) => ncm.replace(/\D/g, '') === ncmCode
    );

    if (!cestData) {
      return handleNotFound('Código CEST não encontrado')
    }

    return handleSucess(cestData)
  }
}