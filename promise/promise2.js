const searchDish = () => {
  console.log("searching dish...");
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "pizza", rest: "dominos", price: 400, qty: 1 });
    }, 2000);
  });

  return promise;
};
const addToCart = (dishData) => {
  //dishData paramm
  console.log("adding to cart...");
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dishData);
    }, 1000);
  });
  return promise;
};

const payment = (cartData) => {
  console.log("starting payment...");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        cartData: cartData,
        paymentData: { paymentId: "abc123", status: "success" },
      });
    }, 4000);
  });
  return promise;
};

const zomato = () => {
  console.log("welcome to zomato...");
  var dish = searchDish();
  dish
    .then((dishData) => {
      console.log("dish selected...", dishData);

      var cart = addToCart(dishData); //promise

      cart
        .then((cartData) => {
          console.log("dish added to cart....", cartData);

          var paymentData = payment(cartData);
          paymentData
            .then((paydata) => {
              console.log("payment done...", paydata);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
zomato();
