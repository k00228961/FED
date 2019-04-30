var data = {
  cart:0,
    mproducts:[
        {
          "id": "100",
          "name": "Seamless Shirt",
          "description": "Hit your next PR with our latest Seamless Shirt. 4-way stretch offers you all the range of motion you'll need.",
          "price": "32",
          "image_title": "seamless_shirt1",
          "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/Alpha-March-072_900x.jpg?v=1553273880",
          "inventory": 100
        },
        {
            "id": "101",
            "name": "Premium Cutoff",
            "description": "You don't train as hard as you do for nothing, so grab our new Premium Cutoff and let the world admire your effort.",
            "price": "26",
            "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/5K7A9121_540x.jpg?v=1541893722",
            "inventory": 10
        },
        {
          "id": "102",
          "name": "King Hoodie",
          "description": "Stay warm this winter with our all-new King Hoodie.",
          "price": "48",
          "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/Alpha-March-007_540x.jpg?v=1553194409",
          "inventory": 5
        },
        {
        "id": "103",
          "name": "Heavy Cotton Oversized Tee",
          "description": "As its name suggests, our Heavy Cotton Range is made with extremely heavyweight premium cotton to offer enhanced quality, durability, and feel.",
          "price": "32",
          "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/4U8A0279_540x.jpg?v=1547577756"
        },
        {
          "id": "104",
          "name": "Premium Joggers",
          "description": "Designed to be stylish, functional and durable, the Premium Joggers are designed with a 4-way stretch knit to allow unrestricted range of motion.",
          "price": "55",
          "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/Alpha-March-214_540x.jpg?v=1553274173"
        },
       ],
  }

  var wData = {
    cart:0,
    wproducts:[
      {
        "id": "105",
        "name": "Revival Vault Bra",
        "description": "A natural compliment to our Revival Leggings, our Revival Vault Bra is designed to perform. We've kept the form simple yet elegant.",
        "price": "35",
        "image_title": "vault_bra1",
        "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/925A6094_720x.jpg?v=1556121004"
      },
      {
        "id": "106",
        "name": "Cropped Hoodie",
        "description": "Unquestionably cool, our Cropped Hoodie range gets an essential addition with our Long Sleeve variation.",
        "price": "40",
        "image_title": "cropped_hoodie1",
        "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/4U8A0064_6a89ad0f-d6a7-47a6-8ce9-1d14b734eb6f_720x.jpg?v=1547577221"
      },
      {
        "id": "107",
        "name": "Cropped Hoodie",
        "description": "Get a jumpstart on your cold weather staples now with our essential Performance Hoodie.",
        "price": "44",
        "image_title": "performance_hoodie1",
        "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/4U8A0068_900x.jpg?v=1547762636"
      },
      {
        "id": "108",
        "name": "Cropped King Hoodie",
        "description": "There's a reason the working name for our King Hoodie was Oversized Snuggie, and it'll be evident from the moment you try it on. ",
        "price": "44",
        "image_title": "cropped_king_hoodie1",
        "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/Alpha-March-099_720x.jpg?v=1553210353"
      },
      {
        "id": "109",
        "name": "Crop Top",
        "description": "The ultimate in effortless, our Oversized Crop Top is the perfect piece to finish off your laidback look. Features include lengthened sleeves and a slouchy fit.",
        "price": "24",
        "image_title": "crop_top1",
        "image": "https://cdn.shopify.com/s/files/1/1752/8007/products/925A5789_720x.jpg?v=1556117548"
      },
     ]
  }
  
  var app = new Vue({
   el: '#app',
   data: data,
   cart: 0,
   methods: {
     addToCart: function(){
       this.cart += 1
     }
   }
  });

  var app = new Vue({
    el: '#wapp',
    data: wData,
    cart: 0,
   methods: {
     addToCart: function(){
       this.cart += 1
     }
   }
  })

  var app = new Vue({
    el: '#cart',
    data: data,
    cart: 0,
    method: {
      addToCart: function(){
        this.cart += 1
      }
    }
  })

  function validateForm(){
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var comment = document.forms["myForm"]["comment"].value;
    if(name==""){
      alert("Name must be filled out!");
      return false;
    }
    if(email==""){
      alert("Email must be filled out!");
      return false;
    }
    if(comment==""){
      alert("Please fill out comment section!");
      return false;
    } else {
      alert("Succesfully submitted!")
    }

  }