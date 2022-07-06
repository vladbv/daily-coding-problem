function checkList(list, curr){

const newList = new Set();

for(let i = 0; i < list.length; i+=1){
	const listItem = list[i]
let difference = curr - listItem;

	if(newList.has(difference)){
return true;
	}
	newList.add(listItem);

}
return false;

}
console.log(checkList([10, 15, 3, 7], 17));
