function twoSums(list){

	let newNumb = Array(list.length);
	newNumb[0] = 1;
	for(let i = 1; i < newNumb.length; i+=1){

newNumb[i] = newNumb[i - 1] * list[i - 1];
}

let product = 1;

for(let i = newNumb.length; i >= 0; i--){
	newNumb[i] *= product;
	product *= list[i];
}

return newNumb;
}

console.log(twoSums([1, 2, 3, 4, 5]);
