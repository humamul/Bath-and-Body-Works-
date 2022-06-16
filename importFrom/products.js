function append(cont,data){
      data.forEach(el => {
    
        let div = document.createElement('div')
        div.setAttribute('class','box_h')

        let image = document.createElement('img')
        image.src = el.image;
        image.setAttribute('class','proImg_h')

        let name = document.createElement('a')
        name.setAttribute('class','name_h')
        name.innerText = el.name

        let subtype = document.createElement('p')
        subtype.setAttribute('class','name2_h')
        subtype.innerText = el.subtype;

        let price = document.createElement('p')
        price.innerText = `₹${el.price}`;
        price.setAttribute('class','pricepro_h')

        let button = document.createElement('button')
        button.setAttribute('class','probtn_h')
        button.innerText = 'Add To Cart'
        button.addEventListener('click',()=>{
            addToCart(el)
        })

        div.append(image,name,subtype,price,button)
        cont.append(div)
    });
}

export {append};