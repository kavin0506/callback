// 1.Robin, a  small boy from Wonderland, loves to eat pizza. One morning he picks up his mother's phone and orders pizza using the PizzaHub app. Robin selects his favorite cheese barbeque pizza and press the order button.

// The PizzaHub app registers the order and informs Robin that it will notify him when the pizza is ready and on the way. Robin, the happy boy, waits for a while and finally gets a notification confirming that the pizza is on its way!                So, if we break down the story, the sequence of events goes like this:

// Robin orders the pizza
// The app notes down the order
// PizzaHub prepares the pizza, and it is ready after a while.
// The app notifies Robin, confirming the pizza is on the way.
// The mechanism of notifying Robin about the pizza works by using the callback function.



 
 function func(dish,func){
		return func(dish);
	}
	func("pizza",delivery)
	
	function delivery(dish){
		setTimeout(()=>{
			console.log(`order the ${dish}`)
		},1000)
		setTimeout(()=>{
			console.log(`waiting for your ${dish}`)
		},3000)
		setTimeout(()=>{
			console.log(`Robin your ${dish} is ready`)
		},4000)

	}





// 2.Program for divde two numbers using callback function Create one function name  "operation" in this function first two parameter is value  the third parameter is a callback function. create another function named Divide pass this function (callback")as an argument and then calling it inside the parent function 
// i.e., operation. Here, we have taken the "divide" as the callback function, we can create any function and pass it as the callback in the operation function.

let val1,val2,val3;
function operation(num1,num2,call){
	 let c=num1/num2;
	 call(c);
	
}
operation(1000,20,divide=>{
	val1=divide;
	console.log(val1);
	operation(val1,2,divide=>{
		val2=divide;
		console.log(val2);
		operation(val2,2,divide=>{
			val3=divide;
			console.log(val3);
		})
	})
})

// 3.Program for sum two numbers using callback function Create one function name  "operation" in this function first two parameter is value  the third parameter is a callback function. create another function named Sum pass this function (callback")as an argument and then calling it inside the parent function 
// i.e., operation. Here, we have taken the "sum" as the callback function, we can create any function and pass it as the callback in the operation function.


let n1,n2,n3,n4;

function multi(v1,v2,back){
	let d=v1+v2;
	back(d)
}
multi(10,20,sum=>{
	n1=sum;
	console.log(n1);
	multi(n1,10,sum=>{
		n2=sum;
		console.log(n2);
		multi(n2,10,sum=>{
			n3=sum;
			console.log(n3);
			multi(n3,10,sum=>{
				n4=sum;
				console.log(n4);
			})
		})
	})
})


// promise

// / 1.Robin, a  small boy from Wonderland, loves to eat pizza. One morning he picks up his mother's phone and orders pizza using the PizzaHub app. Robin selects his favorite cheese barbeque pizza and press the order button.

// The PizzaHub app registers the order and informs Robin that it will notify him when the pizza is ready and on the way. Robin, the happy boy, waits for a while and finally gets a notification confirming that the pizza is on its way!                So, if we break down the story, the sequence of events goes like this:

// Robin orders the pizza
// The app notes down the order
// PizzaHub prepares the pizza, and it is ready after a while.
// The app notifies Robin, confirming the pizza is on the way.
// The mechanism of notifying Robin about the pizza works by using the callback function.

let answer=new Promise((resolve,reject)=>{
	let name=prompt("order now");
		if(name=="pizza"){
			setTimeout(()=>{
				resolve("your pizza  ordered");
			},2000)
			
		}
		else{
			reject("your order cancel")
		}
})
answer.then((num)=>{
	console.log(num);
}).then(()=>{
	setTimeout(()=>{
		console.log("wait pizza baking")
	},1000)
}).then(()=>{
	setTimeout(()=>{
		console.log("Robin your pizza is ready");
	},2000)
}).catch((num)=>{
	console.log(num);
})







// 2.Toss Head Or Tail

let result=new Promise((resolve,reject)=>{
	let toss=prompt("head or tail");
	
	if(toss=="head"){
		resolve("success")
	}
	else{
		reject("fail")
	}

})
result.then((ans)=>{
	console.log(ans);
}).catch((ans)=>{
	console.log(ans);
})

