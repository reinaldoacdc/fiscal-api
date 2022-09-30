import { Router } from "../deps.ts";
import { makeGetCestByNcmController, makeGetCestController, makeListCestController } from "../usecases/cest/index.ts";
import { makeGetCfopController, makeListCfopController } from "../usecases/cfop/index.ts";
import { makeGetNcmController, makeListNcmController } from "../usecases/ncm/index.ts";
import { adaptOakRoute } from "./ControllerAdapter.ts";

const router = new Router();

router.get('/ncm', adaptOakRoute(makeListNcmController()))
router.get('/ncm/:code', adaptOakRoute(makeGetNcmController()))
router.get('/ncm/:code/cest', adaptOakRoute(makeGetCestByNcmController()))

router.get('/cfop', adaptOakRoute(makeListCfopController()))
router.get('/cfop/:code', adaptOakRoute(makeGetCfopController()))

router.get('/cest', adaptOakRoute(makeListCestController()))
router.get('/cest/:code', adaptOakRoute(makeGetCestController()))

export default router;