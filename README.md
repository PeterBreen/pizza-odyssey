# pizza-odyssey
Pizza3001: Pizza ... of the future!  
HTML, JS, and CSS for a pizza website from Codefellows Code 201, seattle-201d3  


#changelog

## Wednesday, March 23
css/style.css  
  - table style added to site CSS  

js/app.js  
  - refactored sales-data javascript to be SUPER DRY, much like Asahi Super Dry beer  
    - DRYness not guaranteed
  - uses object constructors instead of object literal
  - data generated for sales-data page is unique for every store  
  - number of happy pizza odysseys functionality works with new object constructor js

sales-data.html  
  - sales-data page now outputs in table form instead of list  

index.html
  - made Benton laugh and/or sigh in despair with that pun tagline for the pizza store
  








## Tuesday, March 22
add index.html (public-facing homepage)  
  - store locations  
  - store hours  
  - witty motto  
  - realtime update of total pizzas sold in the last week (it's pretty popular)  
add sales-data.html (private sales-data page, don't go looking at it)
   - branch by branch, hour by hour sales breakdown
   - tracks pizzas sold per hour
   - tracks pizzas delivered per hour
   - tracks optimal number of drivers per hour

add js/app.js (controls all javascript functionality of the entire site)
  - pretty much everything in sales-data is controlled here  

add css/style.css (controls all style information for the entire site)  
  - mostly relevant to homepage, but the sales-data looks good too. Hey, staff are users too!  
