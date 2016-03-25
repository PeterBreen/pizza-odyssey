# pizza-odyssey
Pizza3001: Pizza ... of the future!  
HTML, JS, and CSS for a pizza website from Codefellows Code 201, seattle-201d3  


#changelog

###Friday, March 25  
css/style.css  
  - added a significant number of bad choices
  - updated nav, list, paragraph, styles
  - add footer style, new background (super-hacker level future background gradient)

index.html  
  - add nav, links  
  - add footer, text  
  - add street addresses to store locations  
  - adds contact us information  
  - updates pizza odyssey number to the only number that matters to Jonathan
  - content cleanup in concert with css  

sales-data.html  
  - adds nav, links to homepage  
  - content cleanup maybe  
  - stuff  
  - things  

###Thursday, March 24
css/style.css  
  - small modifications for new sales-data page (forms, multiple stacked tables under H3s)
  - removed a couple unused CSS declarations
  - fixed tragically bad css declaration for a margin with a border instead of a border with ... a border
  - like really that was bad
  - changed featurenumber id target to a class target for style

index.html  
  - updated featurenumber div to use a class for CSS

js/app.js  
 - basically deleted it AGAIN
 - okay not really but instead of generating tables based on randomized numbers, now generates based on user provided min/max values (and then randomizes)
  - no limit to number of stores/data provided except by your patience
  - store names can be anywhere: Pizza3001 is going GLOBAL.
  - function hoisting like a BOSS


### Wednesday, March 23
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
  - added feature image placeholder until the client gives me one


### Tuesday, March 22
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
