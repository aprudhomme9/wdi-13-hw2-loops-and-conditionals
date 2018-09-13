console.log("up and running");
// 1.
for(i = 1; i <=20; i++) {
	console.log(i);
};

for(i = 0; i <= 200; i += 2) {
	console.log(i);
};

for(i = 0; i < 20; i++){
	console.log("Love me, pet me! HSSSSSS!" );
};

for(i = 0; i < 20; i+=2) {
	let int = Math.random();
	if(int > 0.75) {
		let message = "...human...why you taking pictures of me?...";
	}
	else if(int > 0.5) {
		message = "...the catnip made me do it...";
	}

	else {
		message = "...why does the red dot always get away...";
	}
	

	console.log(message);

}

for(i =1; i <= 100; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log("fizzbuzz");
	}
	else if(i % 3 === 0) {
		console.log("fizz");
	}
	else if(i % 5 === 0) {
		console.log("buzz");
	}
	else {
		console.log(i);
	}
};


const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];


shahzad[0] = "Gameboy";

daniel[1] = daniel[1] + 1;

ryan[2] = "Gotham City";

reuben.pop(2);

reuben.push("Chicago");

jim[2] = ["Minneapolis", "Madison", "Chicago"];

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(i = 0; i < ninjaTurtles.length; i ++) {
	ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
	console.log(ninjaTurtles[i]);
};

for(i = 0; i < ninjaTurtles.length; i+=2) {
	ninjaTurtles[i] = ninjaTurtles[i].toLowerCase();

}

console.log(ninjaTurtles);

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// const kristynsShoe = kristynsCloset.shift();

// thomsCloset[2].push(kristynsShoe);

const firstOutfit = `First, we're wearing ${kristynsCloset[1]} with ${kristynsCloset[4]} and a ${kristynsCloset[3]}`;

const secondOutfit = `For our second outfit, we'll wear our ${thomsCloset[2][0]}, ${thomsCloset[2][2]} and our ${thomsCloset[1][2]}`;

const thirdOutfit = `Lastly, for our most hip outfit, we'll be wering our ${kristynsCloset[5]} with our ${kristynsCloset[0]} and our ${kristynsCloset[3]}.`;

for(i = 0; i < kristynsCloset.length; i ++) {
	console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
};

for(i = 0; i < thomsCloset.length; i ++) {
	console.log(thomsCloset[i]);
};

let euler = 0;
for(i = 1; i <= 1000; i ++) {
	if(i % 3 === 0 || i % 5 === 0) {
		euler += i;
	};

};

console.log(euler);

