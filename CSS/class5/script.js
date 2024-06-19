// var a;

// console.log(a);

// Datatypes:

    // 1. Number
    // 2. String
    // 3. Boolean
    // 4. undefined
    // 5. Nan
    // 6. null

// Variable Declaration:

// Hoisting:

// Old -> ES5 (Ecma script 5)

// 1. Var

    // var a = 10;

    // var a = 500;

    // console.log(a);

// Current -> ES6 (Ecma script 6)

// 2. Let

    // let b;

    // b = 10;

    // b = 2000

    // console.log(b);

// 3. Const -> (constant)

// const c = 50;

// console.log(c);


// Scoping:

// 1. Global scope

    var a = 20;

    {
        console.log("inside:", a);
    }

    console.log("outside:", a);

// 2. Local scope

// {
//     let b = 50;

//     console.log("inside:", b);
// }

// console.log(b);

{
    {
        let a = 20;
        {
            {
                {

                    const b = 5000;

                    console.log(a);

                    console.log(b);
                }

                console.log(b);
            }
        }
    }
    console.log(a);
}



