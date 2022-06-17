
let userProDataArray = JSON.parse(localStorage.getItem("userProData"))||[]

function userProData(i,n,t,st,p,rp,s,sel,q,f){
    this.image = i;
    this.name = n;
    this.type = t;
    this.subtype = st;
    this.price = p;
    this.realPrice = rp;
    this.size = s;
    this.select = sel;
    this.quantity = q;
    this.fragrance = f;
    
}

let d1 = new userProData("https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcaf30557/large/026281150.jpg","Stone Mini Cologne","New & Now","Colonge","1399","839","15 mL / 0.5 fl oz","Select @ 40%off","1","A fresh-cut bouquet of soft rose petals, rain-kissed ivy & soft musk")

let d2 = new userProData("https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcaf30557/large/026281150.jpg","Stone Mini Cologne","New & Now","Colonge","1399","839","15 mL / 0.5 fl oz","Select @ 40%off","1","A fresh-cut bouquet of soft rose petals, rain-kissed ivy & soft musk")

userProDataArray.push(d1,d2)
localStorage.setItem("userProData",JSON.stringify(userProDataArray));

console.log(userProDataArray)


