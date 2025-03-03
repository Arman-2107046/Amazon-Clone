 export const cart=[];


 export function addToCart(productId) {
   let matchingItem = null;
 
   cart.forEach((cartItem) => {
     if (productId === cartItem.productId) {
       matchingItem = cartItem;
     }
   });
 
   if (matchingItem) {
     matchingItem.quantity += 1;
   } else {
     cart.push({
       productId: productId,
       quantity: 1,
     });
   }
 }




 export function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
  }
  