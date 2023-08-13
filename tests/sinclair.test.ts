import { describe, expect, it } from '@jest/globals';
import SinclairCalculator from "../src/sinclair";

describe("SinclairCalculator", () => {
  describe("doSinclairCalc", () => {
      it("Normal Sinclair Male 2021", () => {
          const result = SinclairCalculator.getSinclair("2021", true, "81", "235");
          expect(result.toFixed(5)).toBe("298.24963");
      });
  });
});