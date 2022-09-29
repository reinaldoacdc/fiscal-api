import { Router } from "../deps.ts";
import { makeGetNcmController, makeNcmController } from "../usecases/ncm/index.ts";
import { adaptOakRoute } from "./ControllerAdapter.ts";

const router = new Router();

router.get('/ncm', adaptOakRoute(makeNcmController()))
router.get('/ncm/:code', adaptOakRoute(makeGetNcmController()))

router.get("/api/v1/hello", (context) => {
  
  context.response.status = 500
  context.response.body = {
    success: true,
    msg: "Hello World",
  };
});


export default router;