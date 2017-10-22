// Part I
function star_string(num){
	let new_str = "";
		for(let i = 0; i<num; i++){
			new_str += "*";
		}
		return new_str;
	};

// Part II + III
let y = [4, "Tom", 1, "Micheal", 5, 7, "Jimmy Smith"];
let z = [4, 6, 1, 3, 5, 7, 25]

function draw_stars(arr){
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            new_arr.push(star_string(arr[i]))
        }else if(typeof arr[i] === 'string'){
            let new_str = "";
            for(let j=0; j < arr[i].length; j++){
                new_str += arr[i][0].toLowerCase();
            }
            new_arr.push(new_str);
        }
    }
    return new_arr;
}
console.log(draw_stars(y));
console.log(draw_stars(z));

      
