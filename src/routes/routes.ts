import { Router } from "../deps.ts";
import { makeGetCestController, makeListCestController } from "../usecases/cest/index.ts";
import { makeGetCfopController, makeListCfopController } from "../usecases/cfop/index.ts";
import { makeGetNcmController, makeListNcmController } from "../usecases/ncm/index.ts";
import { adaptOakRoute } from "./ControllerAdapter.ts";

const router = new Router();

router.get('/ncm', adaptOakRoute(makeListNcmController()))
router.get('/ncm/:code', adaptOakRoute(makeGetNcmController()))

router.get('/cfop', adaptOakRoute(makeListCfopController()))
router.get('/cfop/:code', adaptOakRoute(makeGetCfopController()))

router.get('/cest', adaptOakRoute(makeListCestController()))
router.get('/cest/:code', adaptOakRoute(makeGetCestController()))

router.get("/api/v1/hello", (context) => {

  context.response.status = 500
  context.response.body = {
    success: true,
    msg: "Hello World",
  };
});


export default router;