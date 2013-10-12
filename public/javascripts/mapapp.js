
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
		this.name=obj.title;
		this.lat=obj.position.lat();
		this.lng=obj.position.lng();
		this.date=obj.date;
		this.address=obj.address;
	}else{
		this.name=name;
		this.lat=lat;
		this.lon=lon;
		this.address=address;
		this.date="";
	}
}
