let foodCardContainer = document.querySelector(".food-card-container");

let row1 = document.createElement('div');
row1.classList.add('row1','row');
foodCardContainer.appendChild(row1);


let row2 = document.createElement('div');
row2.classList.add('row2');
foodCardContainer.appendChild(row2);


const foodItems1 = [
  { name: "Biryani", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png" },
  { name: "Pizza", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" },
  { name: "Burger", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png" },
  { name: "Samosa", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Samosa.png" },
  { name: "Cake", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" },
  { name: "Shawarma", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png" },
  { name: "Rolls", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" },
  { name: "Momo", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Momo.png" },
  { name: "Chinese", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png" },
  { name: "Pav Bhaji", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png" },
  { name: "Shake", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png" },
  { name: "Pure Veg", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png" },
  { name: "Tea", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png" }
  ,{ name: "Coffee", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png" },
   { name: "Parotta", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png" },
  { name: "Bonda", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Bonda.png" },
  { name: "South Indian", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png" },
  { name: "Pakoda", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pakoda.png" },

];

const foodItems2 = [
  { name: "Pure Veg", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png" },
  { name: "Pasta", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png" },
  { name: "Parotta", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png" },
  { name: "Idli", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png" },
  { name: "Coffee", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Coffee.png" },
  { name: "Bonda", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Bonda.png" },
  { name: "South Indian", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png" },
  { name: "Pakoda", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pakoda.png" },
  { name: "Tea", url: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png" }
];


let createFoodItem = (food)=>{
   let foodCard = document.createElement('div');
   foodCard.classList.add('foodCard');
   let foodName = document.createElement('p');
   let foodImg = document.createElement('img');
   foodImg.src = food.url;
   foodCard.appendChild(foodImg);
   row1.appendChild(foodCard);
}

for (let food of foodItems1){
    createFoodItem(food);
}


 const scrollContainer = document.getElementById("scroll-container");
 const scrollContainer1 = document.getElementById("scroll-container1");

  function scrollleft() {
    console.log('i am clicked');    
    scrollContainer.scrollBy({ left: -900, behavior: 'smooth' });
  }

  function scrollRight() {
     console.log('i am clicked');    
    scrollContainer.scrollBy({ left: 900, behavior: 'smooth' });
  }

    function scrollleft1() {
    console.log('i am clicked');    
    scrollContainer1.scrollBy({ left: -600, behavior: 'smooth' });
  }

  function scrollRight1() {
     console.log('i am clicked');    
    scrollContainer1.scrollBy({ left: 600, behavior: 'smooth' });
  }