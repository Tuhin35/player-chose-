const cartArray = [];

function calculate(){
    const perPlayer = document.getElementById('players');
    const perPleayerCoat = perPlayer.value;
console.log(perPleayerCoat);

const totalCost = document.getElementById('Total-cost');
  TotalPlayerCost = perPleayerCoat * count;
  totalCost.innerText = TotalPlayerCost;
}

function TotalTeamCost(){

    const perManager = document.getElementById('manager');
    const perManagerCost = perManager.value;
    const perCoach = document.getElementById('coach');
    const perCoachCoat = perCoach.value;

const TotalTeamCost = parseFloat(TotalPlayerCost) + parseFloat(perCoachCoat) + parseFloat( perManagerCost);
const teamTotalCost = document.getElementById('total-team-cost')
teamTotalCost.innerText = TotalTeamCost;
}
let count = 0;

function display(array){
    //  console.log(array.length);
    const tableBody =  document.getElementById('cart-product')
 
   if (array.length<=5) {
    count++;
    tableBody.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        
       
      
        // console.log(cartArray[i].productName , cartArray[i].priceMuch);
       if (array.length <= 5) {
        const name = cartArray[i].playerName ;
        
       
        // console.log(name);
        const tr = document.createElement("tr");
        tr.innerHTML = `
      
        <th>${i+1}</th>
        <th>${name}</th>
        
       
      `
      tableBody.appendChild(tr);
      
      console.log(count);
       }

       
      
     
}


   }
   else{
      
        alert("you already select 5")
       
       }
    
    }

function addToCart(element){
    //   console.log(element.parentNode.parentNode.children);  
    //   console.log(element.parentNode.parentNode.children[0].innerText);  
    //   console.log(element.parentNode.parentNode.children[1].children[0].innerText); 
    
      const playerName = element.parentNode.parentNode.children[0].innerText;
      
    
    //   console.log(productName);
    //   console.log(priceMuch);
    
    const productobj = {
        playerName: playerName,
        
    }
    
    // console.log(productobj);
    cartArray.push(productobj)
    //  console.log(cartArray);
    // console.log(cartArray.length);
     
     display(cartArray)
     document.getElementById('Total-added-player').innerText = count
    
 
    
    }



    document.getElementById('Per-player').addEventListener('click',function(){

        calculate();



    })

    document.getElementById('Total-btn').addEventListener('click',function(){
        TotalTeamCost();

    })