db.createCollection( "Orders", {
	validator: { $jsonSchema: {
		anyOf: [    
			{
				title: "lineorder",
				description: "fact",
				bsonType: "object",
				required: [ "_id", "revenue", "order", "commit"],
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
					order: {
						description: "REF:date",
						bsonType: "object",
						required: ["datekey"],
						properties: {
							custkey: {
								bsonType: "int"
							}
						}
					},
					commit: {
						description: "REF:date",
						bsonType: "object",
						required: ["datekey"],
						properties: {
							custkey: {
								bsonType: "int"
							}
						}
					}
				}
			}
			,
			{
				title: "date",
				description: "dimension",
				bsonType: "object",
				required: [ "_id", "date", "dayofweek"],
				properties: {
					_id: {
						bsonType: "object",
						required: ["datekey"],
						properties: {
							datekey: {
								bsonType: "int"
							}
						}
					},
					date: {
						bsonType: "string",
						pattern: "^[0-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]$",
					},
					dayofweek: {
						bsonType: "int"
					}
				}
			}
		]
   } },
});
