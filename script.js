const makeChange = (c) => {
  // your name here
	const amount = parseInt(c);
	const values = {
		q:25,
		d:10,
		n:5,
		p:1
	}; 

	let quarters=0, dimes=0, nickels=0, pennies=0;

	while(c > 0){
		
		if(c >= values.q){
			quarters++;
			c-=values.q;
		}

		else if(c >= values.d){
			dimes++;
			c-=values.d;
		}

		else if(c >= values.n){
			nickels++;
			c-=values.n;
		}
 
		else if(c >= values.p){
			pennies++;
			c-=values.p;
		}
	}

	return {
		q : quarters,
		d : dimes,
		n : nickels,
		p : pennies
	};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
