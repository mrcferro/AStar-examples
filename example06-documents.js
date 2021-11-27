db.Homicides.insert( 
 {
   _id: {
      victimSSN: NumberInt(100)
   },
   sex: NumberInt(1),
 }
);

db.Homicides.insert( 
 {
   _id: {
      victimSSN: NumberInt(101)
   },
   sex: NumberInt(3),
 }
);


db.Homicides.insert(
 {
	_id: {
	   homicideId: NumberInt(30)
	},
	vi: {
	   victimSSN: NumberInt(100)
	},	
	occurrenceNum: NumberInt(67),
	local: {
	  type: "Point",
	  coordinates: [-78,-71]
	},
	hom_perp: {
	   perpetratorSSN: [37,38]
	}
 }
);

db.Homicides.insert(
 {
	_id: {
	   homicideId: NumberInt(31)
	},
	vi : {
		victimSSN: NumberInt(101)
	},	
	occurrenceNum: NumberInt(67),
	local: {
		type: "Point",
		coordinates: [-78,-71]
	},
	hom_perp: {
		perpetratorSSN: [37,38]
	}
 }
);


db.Homicides.insert(
 {
   _id: {
     perpetratorSSN: NumberInt(37)
   },
   sex: NumberInt(2),
   recidivistStatus: NumberInt(1),
   hom_perp : {
      homicideId: [100,101]
   }
 }
);

db.Homicides.insert(
 {
   _id: {
     perpetratorSSN : NumberInt(38),
   },
   sex: NumberInt(4),
   recidivistStatus: NumberInt(4),
   hom_perp: {
      homicideId: [100,101]
   }
 }
)
