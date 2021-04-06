db.createCollection( "Homicides", {
	validator: { $jsonSchema: {
		anyOf: [    
			{
				title: "homicide",
				description: "fact",
				bsonType: "object",
				required: [ "_id", "occurrenceNum", "local", "hom_perp"],
				properties: {
					_id: {
						bsonType: "object",
						required: ["vi"],
						properties: {
							vi: {
								bsonType: "object",
								required: [ "victimSSN"],
								properties: {
									victimSSN: {
										bsonType: "int"
									}
								}
							}
						}
					},
					occurrenceNum: {
						bsonType: "int",
					},
					local: {
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
									type: "number"
								}
							}
						}
					},
					hom_perp: {
						description: "REF:perpetrator",						
						type: "object",
						required: [ "perpetratorSSN"],
						properties: {
							perpetratorSSN: {
								type: "array",
								minItems: 0,
								items: {
									type: "number"
								}
							}
						}
					}
				}
			}

			,
			{
				title: "victim",
				description: "dimension",
				bsonType: "object",
				required: [ "_id", "sex"],
				properties: {
					_id: {
						bsonType: "object",
						required: ["victimSSN"],
						properties: {
							victimSSN: {
								bsonType: "int"
							}
						}
					},
					sex: {
						bsonType: "int"
					}
				}
			},

			{
				title: "perpetrator",
				description: "dimension",
				bsonType: "object",
				required: [ "_id", "sex", "recidivistStatus", "hom_perp"],
				properties: {
					_id: {
						bsonType: "object",
						required: ["perpetratorSSN"],
						properties: {
							perpetratorSSN: {
								bsonType: "int"
							}
						}
					},
					sex: {
						bsonType: "int"
					},
					recidivistStatus: {
						bsonType: "int"
					},					
					hom_perp: {
						type: "object",
						description: "REF:homicide",
						required: ["vi"],
						properties: {
							vi: {
								type: "object",
								required: ["victimSSN"],
								properties: {
									victimSSN: {
										type: "array",
										minItems: 0,
										items: {
											type: "number"
										}
									}
								}
							}
						}
					}
				}
			}
		]
   } },
});
