function rank(x){
	let rank = ["1", "2", "3", "4", "5", "6", "7", "8"];
	
	return rank[x];
}

function file(x){
	let file = ["a", "b", "c", "d", "e", "f", "g", "h"];
	
	return file[x];
}

function not(x, y){
	return `${file(y)}${rank(x)}`;
}