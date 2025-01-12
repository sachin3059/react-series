// learning map, filter and reduce concept:

const arr = [5, 1, 3, 2, 6];

// map

const output = arr.map((x)=>{ 
    return x.toString(2);
});

console.log(output);



// filter

const output1 = arr.filter((x) =>{
    return x%2 === 1;
})
console.log(output1);


// reduce

// sum or max

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));


const output2 = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);

console.log(output2);



// callback hell











// promises:

const cart = ["pant", "shirt", "bottle" , "shoes"];


// this is how we normally handle asynchronous operation ideally
// using callback
// but this will go to callback hell or inversion of control:


createOrder(cart, function(){
    proceedToPayment(orderId);
}); 

