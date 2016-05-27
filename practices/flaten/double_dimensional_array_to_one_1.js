'use strict';

function double_to_one(collection) {
	var new_collection = [];

	for(var i = 0; i < collection.length; i++){
		new_collection = new_collection.concat(collection[i]);
	}

	return new_collection;
  
}

module.exports = double_to_one;
