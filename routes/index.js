/*
 * moment from : npm install --save moment
 */
var moment = require('moment');
/*
 * stringify from : npm install json-stringify-safe
 */
var stringify = require('json-stringify-safe');

var db=require("./mongoModel.js");
var ObjectId = db.ObjectId;

/*
 * GET home page.
 */

function hasVar(key){	
	try{
		var res=eval("this."+key);
		if(typeof res =='undefined'){
			return false;
		}else{
			return true;
		}
	}catch(e){
		return false;
	}
}
function getVar(key,dflt){
	if(!dflt){
		dflt=key;
	}
	try{
		var res=eval("this."+key);
		if(typeof res =='undefined'){
			return dflt;
		}
		return res;
	}catch(e){
		console.log(e);
		return dflt;
	}
}

function getResponseObject(){
	return {title:"Jorneo",hasVar:hasVar,getVar:getVar}
}
exports.index = function(req, res){
	var o=getResponseObject();
	o.greeting="hello wanker";
	res.render('index', o);
};
exports.saveItinerary = function(req,res){
	var it;
	if(req.query.it){
		it=JSON.parse(req.query.it);
	}else{
		it=req.body.it;
	}
	if(!it._id){
		it["created"]=moment().format("YYYYMMDDHHmmssSSS");
	}
	it["modified"]=moment().format("YYYYMMDDHHmmssSSS");
	db.itineraries.save(it,function(err,saved){
		var out=stringify({error:err,itinerary:saved});
		res.end(out);
	});
}
exports.removeItinerary = function(req,res){
	var it;
	if(req.query.it){
		it=JSON.parse(req.query.it);
	}else{
		it=req.body.it;
	}
	console.log(stringify(it));
	console.log("id="+it._id);
	if(it._id){
		db.itineraries.remove({"_id":ObjectId(it._id)},function(err){
			var out=stringify({error:err});			
			res.end(out);
		});
	}
	
}
exports.helloworld = function(req, res){
	var o=getResponseObject();
	o.greeting="nice one wanker";
	res.render('index', o);
};
exports.getItineraries = function(req, res){
	db.itineraries.find({},function(err,its){
		var o=getResponseObject();
		o.greeting="nice one wanker";
		o.itineraries=its;
		res.render("index",o);
	})
}