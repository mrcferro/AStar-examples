db.Orders.insert(
 {
   _id: {
      orderkey: NumberInt(33),
	  linenumber: NumberInt(6)
   },
   cust: {
	  custkey: NumberInt(70)
   },
   revenue: 360.00
 }
);

db.Customers.insert(
 {
   _id: {
      custkey: NumberInt(70)
   },
   name: "John Snow",
   address_geo: {
     type: "Point",
	 coordinates:[-78,-71],
   }
 }
);
