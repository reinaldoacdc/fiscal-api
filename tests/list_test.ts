import { assertEquals } from "https://deno.land/std@0.156.0/testing/asserts.ts";
import { superoak } from "https://deno.land/x/superoak/mod.ts";
import { makeApp } from "../src/server.ts";
import { makeNcmController } from "../src/usecases/ncm/index.ts";

Deno.test("Should list all ncms", async() => {
  const controller = makeNcmController()
  const resp = await controller.handle({}) 
  assertEquals(resp.status, 200)
});