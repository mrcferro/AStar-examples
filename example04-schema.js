db.createCollection( "Orders", {
	validator: { $jsonSchema: {
		title: "lineorder",
		description: "fact",
		bsonType: "object",
		required: [ "_id", "cust", "revenue"],
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
			cust: {
				description: "REF:customer",
				bsonType: "object",
				required: ["custkey"],
				properties: {
					custkey: {
						bsonType: "int"
					}
				}
			},
			revenue: {
				bsonType: "number",
			}
		}
   } },   
});


db.createCollection( "Customers", {
	validator: { $jsonSchema: {
		title: "customer",		
		description: "dimension",
		bsonType: "object",
		required: ["_id", "name", "address_geo"],
		properties: {
			_id: {
				bsonType: "object",
				required: ["custkey"],
				properties: {
					custkey: {
						bsonType: "int"
					}
				}
			},
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
   } },
});