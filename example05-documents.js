db.Orders.insert(
 {
   _id: {
      orderkey: NumberInt(33),
	  linenumber: NumberInt(6)
   },
   revenue: 360.00,
   order: {
	   datekey: NumberInt(157)
   },
   commit: {
	   datekey: NumberInt(160)
   }
 }
);

db.Orders.insert(
 { 
	_id: {
		datekey: NumberInt(157)
	},
	date: "2000-04-03",
	dayofweek: NumberInt(3)
 }
);


db.Orders.insert(
 {
  _id: {
     datekey: NumberInt(160)
  },
  date: "2000-04-06",
  dayofweek: NumberInt(6)
 }
)
