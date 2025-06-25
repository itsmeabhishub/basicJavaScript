function abc(a){
    return a ?? null
}

console.log(abc(undefined))

/* 
if number then number
if 0 then 0
if string then string
if '' then ''
if null or undefine then null
*/

// const a= 5
// a= 10

// console.log(a) error because we cant change the constant once assign

