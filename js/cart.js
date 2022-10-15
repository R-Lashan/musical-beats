var addItemId = 0;
function addTocart(item) {
  addItemId += 1;  
  var selectedItem = document.createElement('div');
  selectedItem.classlList.add('cartImg');
  selectedItem.setAttribute('id',addItemId);
  var img = document.getElementById('img');
  img.setAttribute('src',item.childern[0].currentSrc);
  var cartItems = document.getElementById('title');
  selectedItem.append(img);
  cartItems.append(selectedItem);
}