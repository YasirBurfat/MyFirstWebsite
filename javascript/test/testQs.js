
// <Task no 1>

// function createPerson(name, age, occupation)
// {
//     const person = 
//     {
//         name: name,
//         age: age,
//         occupation: occupation,
//     }
//     return person;
// }
// let yasir = new createPerson("yasir", "20", "AI Engineer");
// let muzamil = new createPerson("muzamil", "21", "Data Scientist");
// let amir = new createPerson("amir", "22", "CyberSecurity")

// personarr = [yasir,muzamil,amir];

// for(let i in personarr)
// {
//     console.log(personarr[i].name + " : " + personarr[i].occupation );
// }


// <Task no 2>



// const student = 
// {
//     name: "yasir",
//     age: 21,
// }
// let studentClone = Object.assign({},student)

// studentClone.lastname="mrunal";

// studentClone.occupation="ai engineer";


// console.log(student);

// Object.assign(student, studentClone);

// console.log(student);


// <Task no 3>

// let arr = [1,2,3,4,5];

// function arrofnum(num)
// {
//     let newarr = [];
//     for(let i =0; i<num.length; i++ )
//     {
//         newarr[i] = 2*num[i];
//     }

//     return newarr;    

// }

// console.log(arrofnum(arr));



// <Task no 4>

// let person = 
// {
//     name:'yasir',
//     age:21,
//     email:'yasirburfat53@gmail.com'
// }

// function greet()
// {
//     return  `Hi, my name is ${person.name}. I'm ${person.age} years old and my email is ${person.email}.`;
// }

// console.log(greet());


// <Task no 5>

let arr = [1,2,3,4,5];

function sumarr(arr)
{
    let sum =0;
    for(let i = 0; i<arr.length; i++)
        {
            sum += arr[i];
        }
        return sum;
}

console.log(sumarr(arr));


