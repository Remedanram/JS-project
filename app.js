// // // alert('javascript');
// // // console.log('from the console.log');
// // // console.error('this is the error');
// // // console.warn('this is the warning in javascript');



// // // assigning variable in javscript
// // // with let and const
// // // if it is constant we cannot reassign the value 
// // let age = 75;
// // const age1= 67;
// // // console.log(age1);
// // // data types in js
// // // string,number,boolean,null,undifiend,

// // const name = 'ram';
// // const age2=23;
// // const isCool= true;
// // let rating = 5.53;
// // const x= null;

// // // console.log (`My name is ${name} and I am ${age2} years old.`);


// // // catch the differnce between back stick and single quota 


// // const person_new ={


// //     firstName:'remedan',
// //     lastName: 'Mabruk',
// //     ageOfPerson: 23,
// //     hobbbies: ['football','movies'],
// //     address: {
// //         street: '50 main st',
// //         city: 'addis',
// //         country: 'Ethiopi'
// //     },
// //     isITMale: true

// // };
// // person.email='remi@gmail.com';

// //     // console.log(person);
// //     // console.log(person.firstName);



// //     // having the ojects in JSON format 


// // const todos =[

// //     { id : 1,
// //       description: 'praying',
// //       isCompleted: true

// //     },
// //     { id : 2,
// //         description:'Meeting My mother',
// //         isCompleted: false
  
// //       },
// //       { id : 3,
// //         description: 'going to work',
// //         isCompleted: false
  
// //       }
// // ];
// // const todosJSON= JSON.stringify(todos);
// // // console.log(todosJSON);

// // // funct ion in javascript 
  
// // function addNumbers(num1,num2){
// //     return num1+num2;
// //     // console.log(num1+num2);
// // };
// // addNumbers(5,5);    //calling function with value
// // // console.log(addNumbers(5,6))

// // // OOP CONCEPTS IN JS


// // // ALL-ARGS-CONSTRUCTOR
// // function person(firstName,lastName,dob){
// //     this.firstName=firstName;
// //     this.lastName=lastName;
// //     this.dob=new Date(dob);
// // };
// // // INITIATE OBJECTS 
// //  const person1=new person('ram','mub','29-11-2001');
// //  const person2=new person('abdi','','falmi','29-11-2001');

// //  console.log(person1);
// //  console.log(person2.dob);


// // single element 

// // const form = document.getElementById('my-form');
// // console.log(form);
// // const form1 = document.querySelector('h1');
// // console.log(form1);

// // //multiple elements
// // console.log(document.querySelectorAll('.item'));

// // console.log(document.getElementsByClassName('item'));
// // console.log(document.getElementsByTagName('li'));

// // const items = document.querySelectorAll('.item');
// // items.forEach((item) => console.log(item));

// // const ul=document.querySelector('.items');
// // // ul.remove();
// // ul.lastElementChild.remove();
// // ul.firstElementChild.textContent='hello';
// // ul.children[1].innerText='brand';
// // ul.lastElementChild.innerHTML= '<h2>Java-script</h2>';



// const btn =document.querySelector('.btn')
// btn.addEventListener('click',
//     (e)=>{
//         e.preventDefault();
//         console.log('click');
//     }
// );


const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users')

myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
e.preventDefault();
if(nameInput.value==='' || emailInput.value==='' ){
    msg.classList.add('error');
    msg.innerHTML= 'Please Enter all Fields';
    setTimeout(()=>msg.remove(),3000);

    
}
else
{
const li= document.createElement('li');
li.appendChild(document.createTextNode(
    `${nameInput.value} : ${emailInput.value}`
));
userList.appendChild(li);

//clear fields
nameInput.value='';
emailInput.value='';
}

}
