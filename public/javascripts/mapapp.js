
function User(uname){
	this.uname=uname;
}

function Itinerary(obj){
	
	this.markers=[];
	
	if(typeof obj == "object"){
		for(var i=0;i<this.fields.length;i++){
			this[this.fields[i]]=obj[this.fields[i]];
		}
		if(obj.markers){
			for(var i=0;i<obj.markers.length;i++){
				this.markers.push(new Marker(obj.markers[i]));
			}
		}
	}else{		
		this.name=obj;
	}
	
	
}
Itinerary.prototype.fields=["created","_id","name"];

function Marker(obj,lat,lon,address){
	if(typeof obj == "object"){
		this.title=obj.title;
		if(obj.position){
			this.position={lat:obj.position.lat(),lng:obj.position.lng()};
		}else{
			this.position={lat:obj.lat,lng:obj.lng};
		}
		this.date=obj.date;
		this.address=obj.address;
	}else{
		this.title=name;
		this.lat=lat;
		this.lng=lon;
		this.address=address;
		this.date="";
	}
}
