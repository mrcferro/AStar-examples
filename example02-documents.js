db.Orders.insert(
{
   _id: {
       orderkey: NumberInt(33),
	   linenumber: NumberInt(6)
   },
   revenue: 360.00,
   cust: {
       name: "John Snow",
	   address_geo: {
	       type: "Point",
		   coordinates: [-78,71]
	   }
   }   
}
);