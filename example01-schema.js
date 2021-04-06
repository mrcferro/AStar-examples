db.createCollection( "Dates", {
   validator: { $jsonSchema: {
      title: "date",
	  description: "dimension",
      bsonType: "object",
      required: [ "_id", "date", "dayofweek" ],
      properties: {
	     _id: {
		    bsonType: "object",
			required: [ "datekey" ],
			properties: {
			    datekey: {
				    bsonType: "int"
				}
			}
         },
         date: {
            bsonType: "string",
            pattern: "^[1-9][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]$",
         },
         dayofweek: {
            bsonType: "int"
         }
      }
   } },   
});


db.exemplo01.createIndex({"date":1},{unique:1});