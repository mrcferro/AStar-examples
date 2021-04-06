db.homicides.insert( 
 {
   _id: {
      victimSSN: NumberInt(100)
   },
   sex: NumberInt(1),
 }
);
db.homicides.insert( 
 {
   _id: {
      victimSSN: NumberInt(101)
   },
   sex: NumberInt(3),
 }
);


db.homicides.insert(
 {
	_id: {
	   vi : {
			victimSSN: NumberInt(100)
		}
	},
	occurrenceNum: NumberInt(67),
	local: {
	  type: "point",
	  coordinates: [-78,-71]
	},
	hom_perp: {
	   perpetratorSSN: [37,38]
	}
 }
);

db.homicides.insert(
 {
	_id: {
		vi : {
			victimSSN: NumberInt(101)
		}
	},
	occurrenceNum: NumberInt(67),
	local: {
		type: "point",
		coordinates: [-78,-71]
	},
	pe: {
		perpetratorSSN: [37,38]
	}
 }
);


db.homicides.insert(
 {
   _id: {
     perpetratorSSN: NumberInt(37)
   },
   hom_perp : {
	   vi: {
		   victimSSN: [100,101]
	   }
   },
   sex: NumberInt(2),
   recidivistStatus: NumberInt(1)
 }
);

db.homicides.insert(
 {
   _id: {
     perpetratorSSN : NumberInt(38),
   },
   hom_perp : {
	   vi: {
		   victimSSN: [100,101]
	   }
   },
   sex: NumberInt(4),
   recidivistStatus: NumberInt(4)
 }
);




