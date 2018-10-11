var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://root:root123@ds229373.mlab.com:29373/shoppingcart', { useNewUrlParser: true}, function(err){

  if(err){
    console.log(err);
  } else {
    console.log('Connected to the database from seeder');
  }
});

var products = [

new Product({

	imagePath:"https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png",
	title: 'Product1',
	description: 'This is the first product..!!!',
	price:10
}),

new Product({

	imagePath:"https://images-na.ssl-images-amazon.com/images/I/81HQqWcG59L._AC_SX215_.jpg",
	title: 'Product2',
	description: 'This is the second product..!!!',
	price:20
}),

new Product({

	imagePath:"https://ae01.alicdn.com/kf/HTB1_mvAMXXXXXXCXFXXq6xXFXXXe/The-Sleeper-amulet-or-in-polish-amulet-from-Gothic-rpg-game-necklace.jpg",
	title: 'Product3',
	description: 'This is the third product..!!!',
	price:30
}),

new Product({

	imagePath:"https://gamefaqs.akamaized.net/box/5/0/0/86500_front.jpg",
	title: 'Product4',
	description: 'This is the fourth product..!!!',
	price:40
}),

new Product({

	imagePath:"https://mobimg.b-cdn.net/file_exchange/java_game_images/games/4/3500/real/3.jpg",
	title: 'Product5',
	description: 'This is the fifth product..!!!',
	price:50
}),


]

var done = 0;
for(var i=0; i < products.length; i++){

products[i].save(function(err,result){

	done++;

	if(done == products.length){

		exit();
	}
});


}

function exit(){

	mongoose.disconnect();
}