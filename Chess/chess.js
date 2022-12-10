function rank(r){
	let rank = ["1", "2", "3", "4", "5", "6", "7", "8"];
	
	if ((r >= 0) && (r <= 7))
		return rank[r];
	else
		return 0;
}

function file(f){
	let file = ["a", "b", "c", "d", "e", "f", "g", "h"];
	
	if ((f >= 0) && (f <= 7))
		return file[f];
	else
		return 0;
}

function not(r, f){
	if (((f >= 0) && (f <= 7)) && ((r >= 0) && (r <= 7)))
		return `${file(f)}${rank(r)}`;
	else
		return 0;
}

function sq(r, f){
	if (((f >= 0) && (f <= 7)) && ((r >= 0) && (r <= 7)))
		return r * 8 + f;
	else
		return 0;
}