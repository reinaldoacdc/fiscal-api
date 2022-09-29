import { handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { NcmProvider } from "../../services/providers.ts";

type Dependencies = {
  ncmProvider: NcmProvider
}

export class ListNcmController implements HttpController {
  private readonly ncmProvider: NcmProvider
  constructor (dependencies: Dependencies) {
    this.ncmProvider = dependencies.ncmProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {

    const searchByDescription = (input: string, search: string) => {
      return String(input).toLowerCase().includes(search.toLowerCase());
    };

    const searchByCode = (input: string, search: string) => {
      return input.replace(/\D/g, '').startsWith(search.replace(/[,.]/, ''));
    };


    let ncmData = await this.ncmProvider.getNcmList();

    if (request.query.get('search')) {
      const search = request.query.get('search')
      ncmData = ncmData.filter((ncm) => {
        return (
          searchByDescription(ncm.Descricao, search!) ||
          searchByCode(ncm.Codigo, search!)
        );
      });
    }

    return handleSucess(ncmData)
  }
}