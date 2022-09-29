import { handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { CfopProvider } from "../../services/providers.ts";

type Dependencies = {
  cfopProvider: CfopProvider
}

export class ListCfopController implements HttpController {
  private readonly cfopProvider: CfopProvider
  constructor (dependencies: Dependencies) {
    this.cfopProvider = dependencies.cfopProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {

    const searchByDescription = (input: string, search: string) => {
      return String(input).toLowerCase().includes(search.toLowerCase());
    };

    const searchByCode = (input: string, search: string) => {
      return input.replace(/\D/g, '').startsWith(search.replace(/[,.]/, ''));
    };


    let cfopData = await this.cfopProvider.getCfopList();

    if (request.query) {
      const search = request.query.get('search')
      cfopData = cfopData.filter((cfop) => {
        return (
          searchByDescription(cfop.descricao, search!) ||
          searchByCode(cfop.codigo, search!)
        );
      });
    }

    return handleSucess(cfopData)
  }
}