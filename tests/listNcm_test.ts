import { assertEquals } from "https://deno.land/std@0.156.0/testing/asserts.ts";
import { makeListNcmController } from "../src/usecases/ncm/index.ts";

Deno.test("Should list all ncms", async () => {
  const controller = makeListNcmController()
  const resp = await controller.handle({})
  assertEquals(resp.status, 200)
});