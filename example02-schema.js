db.createCollection( "Orders", {
   validator: { $jsonSchema: {
      title: "lineorder",
	  description: "fact",
      bsonType: "object",
      required: [ "_id", "revenue", "cust"],
      properties: {
	    _id: {
		    bsonType: "object",
			required: [ "orderkey", "linenumber"],
			properties: {
			    orderkey: {
				    bsonType: "int"
				},
			    linenumber: {
				    bsonType: "int",
				}
			}
		},
        revenue: {
            bsonType: "number",
        },
		cust:{
			title: "customer",		
			description: "dimension",
		    bsonType: "object",
			required: [ "name", "address_geo"],
			properties: {
			    name: {
				    bsonType: "string",
				}, 
				address_geo: {
					title: "GeoJSON Point",
				    type: "object",
					required: [ "type", "coordinates"],
					properties: {
					    type: {
						    type: "string",
							enum: ["Point"]
						},
						coordinates: {
						    type: "array",
							minItems: 2,
							items: {
							    "type": "number"
							}
						}
					}
				}
			}
         }
      }
   } },
});