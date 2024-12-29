import { classNames } from "./classNames";
import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(classNames("aboba", {}, ["test"])).toBe("aboba test ");
});
