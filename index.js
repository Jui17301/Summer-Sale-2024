// document.getElementById('btn-apply').addEventListener('click',function(){
//   console.log("Apply Button is able to do anything");
// })


// const makeButton =document.getElementById('btn-make-purchase');
// const totalPriceField = document.getElementById('total-price');
// if(parseFloat(totalPriceField.value)>0){
//   makeButton.removeAttribute('disable');
// }
function getContainer(id,nameId,priceId){
  const container = document.getElementById(id);
  
  container.addEventListener('click',function(){
    const result = getNamePrice(nameId,priceId);
    console.log(result);
      })
    }

function getNamePrice(nameId,priceId){
  
  const nameResult =  getName(nameId);
  const priceResult = getPrice(priceId);
  return { name: nameResult, price: priceResult };
  // console.log(nameResult,priceResult);

}
function getName(nameId){ 
const nameField=document.getElementById(nameId);
const name = nameField.innerText;
return name;
// console.log(name);
}
function getPrice(priceId){
  const priceField = document.getElementById(priceId);
const priceValueString = priceField.innerText ;
const price = parseFloat(priceValueString);
return price;
// console.log(price);
}
// const container = document.getElementById('kitchen1Container');
// container.addEventListener('click',function(){
 
// const kitchen1=document.getElementById('kitchen1-name');
// const kitchen1Name = kitchen1.innerText;
// const price1Field = document.getElementById('kitchen1-price');
// const price1ValueString = price1Field.innerText ;
// const price1 = parseFloat(price1ValueString);
// console.log(kitchen1Name,price1);
 
// })