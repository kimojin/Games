function rank(r){
	let rank = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
	
	return rank[r];
}

function file(f){
	let file = ["x", "a", "b", "c", "d", "e", "f", "g", "h"];
	
	return file[f];
}

function not(r, f){
	return `${file(f)}${rank(r)}`;
}

function coord(r, f){
	if (((f > 0) && (f < 9)) && ((r > 0) && (r < 9)))
		return (r - 1) * 8 + f;
	else
		return 0;
}

function notToCoord(not){
	for(let r = 0; r < 9; r++){
		for(let f = 0; f < 9; f++){
			if(`${file(f)}${rank(r)}` == not)
				return coord(r, f);
		}
	}
	
	return 0;
}

function coordToNot(coord){
	for(let r = 0; r < 9; r++){
		for(let f = 0; f < 9; f++){
			if((r - 1) * 8 + f == coord)
				return not(r, f);
		}
	}
	
	return "x0";
}

function getSqByName(name){
	for(let i = 0; i < 64; i++){
		if(name == square[i + 1].name)
			return square[i + 1];
	}
	
	return square[0];
}

function getSqByPc(p){
	if(p)
		return square[p.square];
	else
		return square[0];
}

function getPcByName(name){
	for(let i = 0; i < 32; i++){
		if(name == piece[i + 1].name)
			return piece[i + 1];
	}
	
	return piece[0];
}

function getPcByCoord(coord){
	if((coord >= 0) && (coord <= 64))
		return piece[square[coord].piece];
	else
		return piece[0];
}

function getPcBySq(s){
	return piece[s.piece];
}