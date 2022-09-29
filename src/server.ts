import { Application, oakCors } from "./deps.ts";
import router from "./routes/routes.ts";
import errorHandler from './middlewares.ts'

const env = Deno.env.toObject()
const PORT = env.PORT || 3000;
const HOST = env.HOST || 'localhost';

export const makeApp = (): Application => {
  const app = new Application();
  app.use(oakCors())
  app.use(errorHandler);
  app.use(router.routes());
  app.use(router.allowedMethods());

  console.log(`Server running on port ${PORT}`);

  //
  return app
}

const app = makeApp()
app.listen(`${HOST}:${PORT}`);  