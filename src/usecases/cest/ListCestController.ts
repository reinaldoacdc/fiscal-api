import { handleSucess } from "../../routes/ControllerHelpers.ts";
import { HttpController, HttpRequest, HttpResponse } from "../../routes/ControllerProtocols.ts";
import { CestProvider } from "../../services/providers.ts";

type Dependencies = {
  cestProvider: CestProvider
}

export class ListCestController implements HttpController {
  private readonly cestProvider: CestProvider
  constructor (dependencies: Dependencies) {
    this.cestProvider = dependencies.cestProvider
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {

    const searchByDescription = (input: string, search: string) => {
      return String(input).toLowerCase().includes(search.toLowerCase());
    };

    const searchByCode = (input: string, search: string) => {
      return input.replace(/\D/g, '').startsWith(search.replace(/[,.]/, ''));
    };


    let cestData = await this.cestProvider.getCestList();

    if (request.query.get('search')) {
      const search = request.query.get('search')
      cestData = cestData.filter((cest) => {
        return (
          searchByDescription(cest.descricao, search!) ||
          searchByCode(cest.codigo, search!)
        );
      });
    }

    return handleSucess(cestData)
  }
}