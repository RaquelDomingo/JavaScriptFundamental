//Math1

x = [-1,2,4,5];
function zero_negativity(x){
  for(let i = 0; i < x.length; i++){
    if(x[i] > 0)
      return false;
    else
      return true;
  }
}
console.log(zero_negativity(x));

//Math2
function is_even(num){
	if(num % 2 === 0){
		return true;
	}else{
		return false;
	}
}

//Math3
function how_many_even(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        if(is_even (arr[i])){
            sum += 1;
        }
    }
    return sum;
}

//Math4
function create_dummy_array(num){
    let arr = [];
    for(let i = 0; i<num; i++){
        arr.push(Math.floor(MAth.random()*10));
    }
    return arr;
}

// Math 5
function random_choice(arr){
	let index = Math.floor(Math.random()*arr.length);
	return arr[index];
}