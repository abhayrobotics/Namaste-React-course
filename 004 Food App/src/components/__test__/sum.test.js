import {sum} from "../sum";

// syntax 
// test("Descrition" ,()=>{ testcase})


test("sum function return the sum of two numbers" ,()=>{

    const result = sum(3,4)

    // Assertion
    expect(result).toBe(5)
 })