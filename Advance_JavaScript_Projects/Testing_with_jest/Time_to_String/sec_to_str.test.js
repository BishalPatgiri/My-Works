import convert from "./sec_to_str"

test("testing the convert function",()=>{
    expect(convert(5200)).toBe("5 seconds")
})

test("testing the convert function",()=>{
        expect(convert(60000)).toBe("1 minutes")
     })

test("testing the convert function",()=>{
    expect(convert(180000)).toBe("3 minutes")
})

test("testing the convert function",()=>{
    expect(convert(200000)).toBe("3 minutes 20 seconds")
})