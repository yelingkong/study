// 块级作用域
// {
// 	var a=1;
// 	let b=2;
// }
// let只能作用在块级作用域里面
// console.log(a);
// console.log(b);

// {
// 	let c=1;
// 	{
// 		console.log(c);
// 		let d=2;
// 	}
// 	console.log(d);
// }

// if(true){
// 	var a=1;
// 	let b=1;
// }
// console.log(a);
// console.log(b);
// 
// for(let i=0; i<3; i++){

// };
// console.log(i);
// let 只作用在块级作用域里面

// 使用let 或者 const声明的变量不能被重新声明
// var dad='dad';
// console.log(dad);
// var dad;
// console.log(dad);
// let son='son';
// let son='ss';
// 
// let 不存在变量提升
// console.log(dad);
// // var dad='dd';
// console.log(dad);
// let dad='dd';
// 
// 暂存死区
// let monkey = '美猴王';
// {
// 	console.log(monkey);
// 	let monkey='真假美猴王';
// }
// console.log(monkey);
