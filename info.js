var data= [
{"img":"https://images-na.ssl-images-amazon.com/images/I/91dl7O-wxhL._SL1500_.jpg","name": "Cheetos", "Calories": 160, "Carbs": "15g", "Allergens": "Milk, Cheese, Whey", "DietInfo": "Cholesterol Free, Gluten Free"},
{"img":"https://target.scene7.com/is/image/Target/GUEST_6749dd66-2896-4893-b7ae-0d146f451495?wid=488&hei=488&fmt=pjpeg","name": "Lays Potato Chips", "Calories": 160, "Carbs": "15g", "Allergens": "Allergen Free", "DietInfo": "Cholesterol Free, Gluten Free" },
{"img":"https://i5.walmartimages.com/asr/53f9d95a-8dd0-4711-84c3-f565463ac67d_1.25a28b85b2d1e47f913f591541daf7aa.jpeg","name": "Quaker Granola Bars", "Calories": 100, "Carbs": "17g", "Allergens": "Tree Nuts, Nuts, Milk, Soy, Soybean, Wheat, Barley, Oats", "DietInfo": "Cholesterol Free, Low Sodium" },
{"img":"https://vpc-prod-thumbor-public-gcp.boxed.com/unsafe/1024x800/filters:quality(100):max_bytes(200000):fill(white)/http://dcmzfk78s4reh.cloudfront.net/1443196237931.jpg","name":"Rice Krispy Treats", "Calories": 130, "Carbs":"29g", "Allergens":"Malt", "DietInfo": "Cholesterol free, Fat Free" },
{"img":"https://images-na.ssl-images-amazon.com/images/I/81oq2Hk018L._SY355_.jpg","name":"Cheez-Its", "Calories": 150, "Carbs":"17g", "Allergens":"Milk, Cheese, Soy, Whey, Wheat", "DietInfo": "Cholesterol free, Sugar Free" },
{"img":"https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL._SX355_.jpg","name":"Oreos", "Calories": 160, "Carbs":"25g", "Allergens":"Soya, Dairy,", "DietInfo": "Cholesterol Free, Low Sodium" },
{"img":"https://images-na.ssl-images-amazon.com/images/I/41-15tXsFzL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg","name":"Pringles", "Calories": 150, "Carbs":"15g", "Allergens":"Milk, Butter, Caseinates, Whey, Soybean, Wheat", "DietInfo": "Cholesterol free" },
{"img":"https://images-na.ssl-images-amazon.com/images/I/71aPkM0zvlL._SY355_.jpg","name":"Snyder's Pretzel Minis", "Calories": 110, "Carbs":"25g", "Allergens":"Wheat, Malt", "DietInfo": "Cholesterol Free, Fat Free, Saturated Fat free" },
{"img":"https://i5.walmartimages.com/asr/5419a930-2fed-4715-8cfd-9601ce1225d6_1.3ddcfe6ca55bc45cdda93b562a9d5270.jpeg","name":"Welch's Fruit Snacks", "Calories": 88, "Carbs":"22g", "Allergens":"Allergen free", "DietInfo": "Cholesterol Free, Fat Free, Saturated Fat Free, Low Sodium" },
{"img":"https://i5.walmartimages.com/asr/c10b153e-e770-431c-9817-c1c77296024a_1.6a1cebba108bb551a2418b57cf5c6553.jpeg","name":"Hershey's Kisses", "Calories": 200, "Carbs":"25g", "Allergens":"Milk, Lactose, Soy", "DietInfo": "Low Cholesterol, Low Sodium" },
{"img":"https://images-na.ssl-images-amazon.com/images/I/71ldHGWkQ5L._SY355_.jpg","name":"Coke", "Calories": 140, "Carbs":"39g", "Allergens":"Allergen Free", "DietInfo": "Fat Free, Gluten Free, Low Sodium" },
{"img":"https://d2wvksc3i53c0p.cloudfront.net/media/catalog/product/cache/2/image/85e4522595efc69f496374d01ef2bf13/n/c/nc_kit_v3_gradient-min_1.png","name":"Diet Coke", "Calories": 0, "Carbs":"0.4g", "Allergens":"Allergen Free", "DietInfo": "Gluten Free, Calorie Free, Fat free, Cholesterol Free, Saturated Fat Free, Low Sodium, Sugar Free" },
{"img":"https://www.ldproducts.com/media/catalog/product/cache/3/image/730x/9df78eab33525d08d6e5fb8d27136e95/9/0/900_1010041932.jpg","name":"Sprite", "Calories": 140, "Carbs":"38g", "Allergens":"Allergen Free", "DietInfo": "Fat Free, Gluten Free" },
{"img":"https://www.sprite.com/content/dam/coke2016/page-properties-images/Sprite_PageProperties.jpg","name":"Sprite Zero", "Calories": 0, "Carbs":"0g", "Allergens":"Allergen Free", "DietInfo": "Fat Free, Calorie Free, Gluten Free, Low Sodium" },
{"img":"https://officedepot.scene7.com/is/image/officedepot/207786_p?$OD%2DLarge$&wid=450&hei=450","name":"Pure Leaf Tea House Collection Organic Black Tea Wild Blackberry & Sage", "Calories": 90, "Carbs":"21", "Allergens":"Allergen Free", "DietInfo": "Gluten Free, Fat Free" },
{"img":"https://www.fleetfarm.com/images/product/0000000281593/x/1.jpg","name":"Minute Maid Orange Juice", "Calories": 110, "Carbs":"26g", "Allergens":"Allergen Free", "DietInfo": "Gluten Free, fat free, Low Sodium" },
{"img":"https://www.dollargeneral.com/media/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/0/0/00025000056031_a1a3_900_900.jpg","name":"Minute Maid Apple Juice", "Calories": 80, "Carbs":"21g", "Allergens":"Allergen Free", "DietInfo": "Gluten Free, " },
{"img":"https://images-na.ssl-images-amazon.com/images/I/41rzi0yrOGL._SY355_.jpg","name":"LaCroix", "Calories": 0, "Carbs":"0g", "Allergens":"Allergen Free", "DietInfo": "Gluten Free" },
{"img":"https://imgix.bustle.com/uploads/image/2018/5/12/c058fb74-6fb0-4bfe-9ef4-fecfdb53e05c-fotolia_176371063_subscription_monthly_m.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70","name":"Lindt Hello My Name Is Mango Smoothie", "Calories": 210, "Carbs":"22g", "Allergens":"Milk, Lactose, Soya, Wheat", "DietInfo": "Low Sodium, Low Cholesterol" },
{"img":"https://globalassets.starbucks.com/assets/5f08775ae8654a45a194a464a21170bf.png","name":"Starbucks Coffee Coffee Drink Premium Energy, Cinnamon Dulce", "Calories": 110, "Carbs":"18", "Allergens":"Milk", "DietInfo": "Low Cholesterol, Low Fat, Low Sodium, Low Saturated Fat, Good source of Protein" },
]

window.onload = function(e) {

       var decision = getQueryVariable("you_chose");
       console.log(decision)
       var statsToDisplay;
       if (decision == "Cheetos") {
         statsToDisplay = data[0];
       }else if (decision == "Lays_Potato_Chips") {
         statsToDisplay = data[1];
       }else if (decision == "Quaker_Granola_Bars") {
         statsToDisplay = data[2];
       }else if (decision == "Rice_Krispy_Treats") {
         statsToDisplay = data[3];
       }else if (decision == "Cheez-Its") {
         statsToDisplay = data[4];
       }else if (decision == "Oreos") {
         statsToDisplay = data[5];
       }else if (decision == "Lindt_Hello_My_Name_Is_Mango_Smoothie") {
         statsToDisplay = data[18];
       }else if (decision == "Pringles") {
         statsToDisplay = data[6];
       }else if (decision == "Snyder_Pretzel_Minis") {
         statsToDisplay = data[7];
       }else if (decision == "Welchs_Fruit_Snacks") {
         statsToDisplay = data[8];
       }else if (decision == "Hersheys_Kisses") {
         statsToDisplay = data[9];
       }else if (decision == "Coke") {
         statsToDisplay = data[10];
       }else if (decision == "Diet_Coke") {
         statsToDisplay = data[11];
       }else if (decision == "Sprite") {
         statsToDisplay = data[12];
       }else if (decision == "Sprite_Zero") {
         statsToDisplay = data[13];
       }else if (decision == "Pure_Leaf_Tea_House_Collection") {
         statsToDisplay = data[14];
       }else if (decision == "Minute_Maid_Orange_Juice") {
         statsToDisplay = data[15];
       }else if (decision == "Minute_Maid_Apple_Juice") {
         statsToDisplay = data[16];
       }else if (decision == "LaCroix") {
         statsToDisplay = data[17];
       }else if (decision == "Starbucks_Coffee_Coffee_Drink_Premium_Energy_Cinnamon_Dulce") {
         statsToDisplay = data[19];
       }

       document.getElementById('name').innerHTML = statsToDisplay.name;
       document.getElementById('img').src = statsToDisplay.img;
       document.getElementById('calories').innerHTML = statsToDisplay.Calories;
       document.getElementById('allergens').innerHTML = statsToDisplay.Allergens;
       document.getElementById('DietInfo').innerHTML = statsToDisplay.DietInfo;
   }

     function getQueryVariable(variable)
     {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
         var pair = vars[i].split("=");
         if(pair[0] == variable) {
           return pair[1];
         }
       }
       return(false);
     }
  //
  // $('article').append(`<img src="${data[0].img}"></img>`)
  // $('article').append(`<p class= "snack-name"><b>${data[0].name}</b></p>`)
  // $('article').append(`<p class= "snack-cal"><b>Calories: </b>${data[0].Calories}</p>`)
  // $('article').append(`<p class= "snack-allergen"><b>Allergens: </b>${data[0].Allergens}</p>`)
  // $('article').append(`<p class= "snack-diet"><b>Diet Info: </b>${data[0].DietInfo}</p>`)
