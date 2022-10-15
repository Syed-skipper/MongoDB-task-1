//1.Find all the information about each products

db.product_details.find();

//2.Find the product price which are between 400 to 800

db.product_details.find({product_price:{$gt:400, $lt:800}});

//3.Find the product price which are not between 400 to 600

db.product_details.find({product_price:{$not: {$gt: 400,$lt:600}}});

//4.List the four product which are grater than 500 in price

db.product_details.find({product_price:{$gt:500}});

//5.Find the product name and product material of each products

db.product_details.find({},{product_name:1,product_material:1,_id:0})

//6.Find the product with a row id of 10

db.product_details.find({id:"10"});

//7.Find only the product name and product material

db.product_details.find({},{product_name:1,product_material:1,_id:0});

//8.Find all products which contain the value of soft in product material

db.product_details.find({product_material:"Soft"});

//9.Find products which contain product color indigo  and product price 492.00

db.product_details.find({$and: [{product_color:"indigo"},{product_price:492.00}]});

//10.Delete the products which product price value are same

db.product_details.aggregate([
    {
        "$sort": { "_id": 1 } 
    },
  { "$group": { 
            "_id": "$product_price", 
            "doc": { "$first": "$$ROOT" } 
              }
       
  },
  { "$replaceRoot": { 
      "newRoot": "$doc" }
  },
  {
      "$sort": { "_id": 1 } 
  }
])
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    