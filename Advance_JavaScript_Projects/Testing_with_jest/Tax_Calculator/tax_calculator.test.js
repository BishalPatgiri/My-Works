import calculate from "./tax_calculator";

test("Testing the Tax amount",()=>{
    expect(calculate(500000)).toBe(12500)
})