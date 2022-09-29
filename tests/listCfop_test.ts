import { assertEquals } from "https://deno.land/std@0.156.0/testing/asserts.ts";
import { makeListCfopController } from "../src/usecases/cfop/index.ts";

Deno.test("Should list all cfops", async () => {
  const controller = makeListCfopController()
  const resp = await controller.handle({})
  assertEquals(resp.status, 200)
});