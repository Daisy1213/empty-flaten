'use strict';


function double_to_one(collection) {
	var new_collection = new Array();
	for(var i = 0; i < collection.length; i++){
		for(var j = 0; j < collection[i].length; j++){
			if(isExist(collection[i][j], new_collection)){
				new_collection.push(collection[i][j]);
			}
		}
	}

	return new_collection;
}

function isExist(ele, collection){
	var ans = true;

	collection.forEach(function(e){
		if(e == ele){
			ans = false;
		}
	});

	return ans;
}


module.exports = double_to_one;
