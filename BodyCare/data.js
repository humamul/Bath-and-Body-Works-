// New & Now --> All New Arrival
// All the data arrange  in following category :-
//1)lotion ,2)cream,3)fragrance, 4)gel, 5)gift, 6)sanitizer

// 1) New & Now = 19

var data = [
    {
      //cologne
  
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcaf30557/large/026281150.jpg",
      name: "Stone Mini Cologne",
      type: "New & Now",
      subtype: "Cologne",
      price: 1399,
      realPrice: 839,
      size: "15 mL / 0.5 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A fresh-cut bouquet of soft rose petals, rain-kissed ivy & soft musk",
    },
    {
      //Lotion
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb9472799/large/026299194.jpg",
      name: "Stone Body Lotion",
      type: "New & Now",
      subtype: "Lotion",
      price: 1199,
      realPrice: 719,
      size: "236 mL / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A serene blend of alpine water, lavender and sandalwood in our 24-hour moisturizing body lotion",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbce174b8/large/026399711.jpg",
      name: "Bubbly Ros&eacute; Super Smooth Body Lotion",
      type: "New & Now",
      subtype: "Lotion",
      price: 1499,
      realPrice: 899,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: a sweet, bubbly, celebratory sip.Fragrance notes: pink sparkling rosé, sweet blood orange and splash of cranberry.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwec172b24/large/026398813.jpg",
      name: "Pear Crème Brulee Super Smooth Body Lotion",
      type: "New & Now",
      subtype: "Lotion",
      price: 1499,
      realPrice: 899,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: fruity custard topped with a crunchy sugar shell.Fragrance notes: baked pear, caramelized sugar and whipped cream.",
    },
  
    {
      //Cream
  
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf4ecd7c5/large/026326994.jpg",
      name: "Stone Ultimate Hydration Body Cream",
      type: "New & Now",
      subtype: "Cream",
      price: 1299,
      realPrice: 779,
      size: "226 g / 8 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A serene blend of alpine water, lavender and sandalwood in our 24-hour ultimate hydration body cream",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw168d5c35/large/026206437.jpg",
      name: "Rose Hand Cream",
      type: "New & Now",
      subtype: "Cream",
      price: 499,
      realPrice: 299,
      size: "29 mL /1 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A clean, playful, light blend of airy rose water, jasmine petals & creamy musk",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3405119a/large/026400338.jpg",
      name: "Strawberry Pound Cake Ultimate Hydration Body Cream",
      type: "New & Now",
      subtype: "Cream",
      price: 1599,
      realPrice: 1599,
      size: "226 g / 8 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "What it smells like: the fruity, airy treat you love.Fragrance notes: fresh strawberries, golden shortcake and whipped cream.",
    },
  
    //fragrance
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwd6418f04/large/026400333.jpg",
      name: "Confetti Daydream Fine Fragrance Mist",
      type: "New & Now",
      subtype: "Fragrance",
      price: 1699,
      realPrice: 1019,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: your sweetest hopes and dreams.Fragrance notes: fresh raspberries, sparkling pear and blue iris.",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4da5cd3d/large/026393537.jpg",
      name: "Gingham Love Fine Fragrance Mist",
      type: "New & Now",
      subtype: "Fragrance",
      price: 1599,
      realPrice: 1599,
      size: "236 ml / 8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "What it smells like: love at first sight—sweet, warm, happy and playfully romantic.Fragrance notes: sugared red berries, blushing freesia and rose meringue.",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw98c016fc/large/026398819.jpg",
      name: "Whipped Berry Meringue Fine Fragrance Mist",
      type: "New & Now",
      subtype: "Fragrance",
      price: 1599,
      realPrice: 959,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: juicy berries covered in sweet cream.Fragrance notes: fresh berries, whipped sugar and fluffy vanilla.",
    },
  
    //gel
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw19853a81/large/026357103.jpg",
      name: "In the Stars Shower Gel",
      type: "New & Now",
      subtype: "gel",
      price: 1399,
      realPrice: 1399,
      size: "295 mL / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A sparkling blend of starflower, sandalwood musk, sugared tangelo, white agarwood and radiant amber",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwae776a37/large/026309311.jpg",
      name: " Pure Wonder Brush & Go Fragrance Gel",
      type: "New & Now",
      subtype: "gel",
      price: 2999,
      realPrice: 1799,
      size: "15.6 mL /0.52 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Delight in a sense of wonder with this clean blend of iced rosé, star jasmine and warm white amber",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1f67f19e/large/k6cezipqd9a8rn1_667555832076.jpg",
      name: "Perfect Peony Cleansing Hand Gel",
      type: "New & Now",
      subtype: "gel",
      price: 299,
      realPrice: 299,
      size: "29 mL /1 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "An airy blend of peony, natural apple oil and vanilla sandalwood",
    },
  
    //gift
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7508b526/large/14xnxutye4sto8d_667555534383.jpg",
      name: "In The Stars Gift Box Set",
      type: "New & Now",
      subtype: "Gift",
      price: 4499,
      realPrice: 299,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A warm, sparkling blend of starflower, sandalwood musk, sugared tangelo, white agarwood & radiant amber",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfaf25d17/large/025140245.jpg",
      name: "Champagne Toast Gift Bag Set",
      type: "New & Now",
      subtype: "Gift",
      price: 2499,
      realPrice: 2499,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A cheers-worthy spritzer of bubbly champagne, sparkling berries and juicy tangerine",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwff67b550/large/92w7wmhvpkcqs0h_667555534307.jpg",
      name: "You're The One Gift Box Set",
      type: "New & Now",
      subtype: "Gift",
      price: 3999,
      realPrice: 3999,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A luxurious blend of soft rose, white birch & a drop of strawberry nectar",
    },
  
    // sanitizer
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf42321b8/large/026347256.jpg",
      name: "Ocean Hand Sanitizer Spray",
      type: "New & Now",
      subtype: "Sanitizer",
      price: 749,
      realPrice: 749,
      size: "88 mL / 3 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance: "An invigorating blend of blue cypress, vetiver and coastal air",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw311ece2d/large/026228702.jpg",
      name: "Magnolia Charm Fine Fragrance Sanitizer",
      type: "New & Now",
      subtype: "Sanitizer",
      price: 1599,
      realPrice: 1599,
      size: "236 mL /8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A lush, countryside blend of dewy pear blossom, blooming magnolia & fresh cedar",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcb39cf11/large/026357101.jpg",
      name: "In the Stars Fine Fragrance Sanitizer",
      type: "New & Now",
      subtype: "Sanitizer",
      price: 1599,
      realPrice: 1599,
      size: "236 mL /8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A sparkling blend of starflower, sandalwood musk, sugared tangelo, white agarwood and radiant amber",
    },
  
    // ------------------------------------/////////////////////////////////////---------------------------
  
    //BATH & Showers ----->>>>>>>>>>
    //1) Scrub(4)
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4861f8f9/large/024491265.jpg",
      name: "A THOUSAND WISHES",
      type: "BATH & Showers",
      subtype: "Scrub",
      price: 1699,
      realPrice: 1699,
      size: "226 g / 8 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A festive blend of pink prosecco, sparkling quince, crystal peonies, gilded amber & amaretto",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwe5728b56/large/667554984080.jpg",
      name: "Fairytale Creamy Body Scrub",
      type: "BATH & Showers",
      subtype: "Scrub",
      price: 1699,
      realPrice: 1019,
      size: "226 g / 8 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Write your own magical story with this blend of pomegranate nectar with fresh orange blossom and a dreamy combination of vanilla and warm amber in our creamy body scrub",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf63a1a26/large/667549315455.jpg",
      name: "GINGHAM",
      type: "BATH & Showers",
      subtype: "Scrub",
      price: 1699,
      realPrice: 1699,
      size: "175 g / 6.2 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A fresh blend of bright florals & a hint of sweet citrus. Notes of blue freesia, sweet clementine & soft violet petals.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwff9c91ed/large/667554174573.jpg",
      name: "SUNSHINE MIMOSA",
      type: "BATH & Showers",
      subtype: "Scrub",
      price: 1699,
      realPrice: 1019,
      size: "226 g / 8 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A bright, bubbly splash of champagne and the happy scent of sweet citrus",
    },
  
    //2)Gel(6)
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw19853a81/large/026357103.jpg",
      name: "In the Stars Shower Gel",
      type: "BATH & Showers",
      subtype: "Gel",
      price: 1399,
      realPrice: 1399,
      size: "295 mL / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A sparkling blend of starflower, sandalwood musk, sugared tangelo, white agarwood and radiant amber",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw765f3d53/large/024329427.jpg",
      name: "Gingham Shower Gel",
      type: "BATH & Showers",
      subtype: "Gel",
      price: 1299,
      realPrice: 1299,
      size: "295 ml / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A fresh blend of bright florals & a hint of sweet citrus. This rich bubbly lather has notes of blue freesia, sweet clementine & soft violet petals.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw09e991f8/large/024642411.jpg",
      name: "JAPANESE CHERRY BLOSSOM",
      type: "BATH & Showers",
      subtype: "Gel",
      price: 1299,
      realPrice: 799,
      size: "295 ml / 10 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A graceful blend of Japanese Cherry Blossom, Asian pear, fresh mimosa petals, white jasmine & blushing sandalwood",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwa598269c/large/022845425.jpg",
      name: "DARK KISS",
      type: "BATH & Showers",
      subtype: "Gel",
      price: 1299,
      realPrice: 1299,
      size: "295 ml / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A seductive blend of black raspberry, burgundy rose & dark vanilla bean.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8d17a248/large/026228705.jpg",
      name: "Magnolia Charm Shower Gel",
      type: "BATH & Showers",
      subtype: "Gel",
      price: 1399,
      realPrice: 1399,
      size: "295 mL / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A lush, countryside blend of dewy pear blossom, blooming magnolia & fresh cedar",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1c476258/large/026139371.jpg",
      name: "YOURE THE ONE",
      type: "BATH & Showers",
      subtype: "Gel",
      price: 1499,
      realPrice: 1499,
      size: "295 ml / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A luxurious blend of soft rose, white birch & a drop of strawberry nectar",
    },
    //3) Bar(3)
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwa92a98ba/large/026330002.jpg",
      name: "Cucumber Melon Shea Butter Cleansing Bar",
      type: "BATH & Showers",
      subtype: "Bar",
      price: 799,
      realPrice: 799,
      size: "141 g / 5 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A cool blend of crisp cucumber, watery honeydew, summer cantaloupe, sparkling grapefruit and sheer woods",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcad119fc/large/026330000.jpg",
      name: "Eucalyptus Spearmint Shea Butter Cleansing Bar",
      type: "BATH & Showers",
      subtype: "Bar",
      price: 799,
      realPrice: 799,
      size: "141 g / 5 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance: "Eucalyptus oil and spearmint oil in a rich, creamy lather.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcad119fc/large/026330000.jpg",
      name: "Eucalyptus Spearmint Shea Butter Cleansing Bar",
      type: "BATH & Showers",
      subtype: "Bar",
      price: 799,
      realPrice: 799,
      size: "141 g / 5 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance: "Eucalyptus oil and spearmint oil in a rich, creamy lather.",
    },
  
    //Fragrance------->>>>>
  
    //1)fragrance = 5, 2)perfume=5
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw098e8058/large/026201512.jpg",
      name: "HELLO BEAUTIFUL",
      type: "Fragrance",
      subtype: "Fragrance",
      price: 1499,
      realPrice: 899,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A petal-perfect blend of white gardenia, jasmine petals, magnolia blossom, pink nectarine & cotton musk",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwd6418f04/large/026400333.jpg",
      name: "Confetti Daydream Fine Fragrance Mist",
      type: "Fragrance",
      subtype: "Fragrance",
      price: 1699,
      realPrice: 1019,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "What it smells like: your sweetest hopes and dreams.",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4da5cd3d/large/026393537.jpg",
      name: "Gingham Love Fine Fragrance Mist",
      type: "Fragrance",
      subtype: "Fragrance",
      price: 1599,
      realPrice: 1599,
      size: "236 ml / 8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "What it smells like: love at first sight—sweet, warm, happy and playfully romantic.",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2e356231/large/022845434.jpg",
      name: "Dark Kiss Fine Fragrance Mist",
      type: "Fragrance",
      subtype: "Fragrance",
      price: 1499,
      realPrice: 1499,
      size: "236 ml / 8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A seductive blend of black raspberry, burgundy rose & dark vanilla bean in our irresistible, long-lasting mist",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4bd5e9b9/large/026066469.jpg",
      name: "VANILLA SUGAR",
      type: "Fragrance",
      subtype: "Fragrance",
      price: 1499,
      realPrice: 1499,
      size: "236 ml / 8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A cozy, enveloping, irresistible blend of vanilla, white orchid & sparkling sugar",
    },
  
    //perfume
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2e196d2f/large/026124858.jpg",
      name: "DAHLIA",
      type: "Fragrance",
      subtype: "Perfume",
      price: 1299,
      realPrice: 779,
      size: "7 ml / 0.23 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "A beautiful blend of dahlia petals, crisp pear & praline",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw056b4dfb/large/026307891.jpg",
      name: "Pure Wonder Mini Perfume Spray",
      type: "Fragrance",
      subtype: "Perfume",
      price: 1599,
      realPrice: 1599,
      size: "7 mL / 23 fl oz",
      select: "Mix & Match: Buy 2 Get 1",
      quantity: 1,
      fragrance:
        "Delight in a sense of wonder with this clean blend of iced rosé, star jasmine and warm white amber in our irresistible perfume spray",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw907b13e8/large/026274136.jpg",
      name: "Honey Wildflower Eau de Parfum",
      type: "Fragrance",
      subtype: "Perfume",
      price: 3999,
      realPrice: 2399,
      size: "50 ml / 1.7 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A naturally sweet blend of crisp pear, fresh wildflowers and honey in our most concentrated perfume",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw85360e1b/large/026303014.jpg",
      name: "Open Sky Eau de Parfum",
      type: "Fragrance",
      subtype: "Perfume",
      price: 3999,
      realPrice: 3399,
      size: "50 ml / 1.7 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "Take a deep breath of fresh air with this blend of wild blackberries, soft violet and a cloud of comforting vanilla in our most concentrated perfume",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4ad10a9f/large/026307889.jpg",
      name: "Pure Wonder Eau de Parfum",
      type: "Fragrance",
      subtype: "Perfume",
      price: 4499,
      realPrice: 4499,
      size: "50 ml / 1.7 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "Delight in a sense of wonder with this clean blend of iced rosé, star jasmine and warm white amber",
    },
  
    //GIFTS SETS----->>>>
    //gifts(5)
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4ad10a9f/large/026307889.jpg",
      name: "Pure Wonder Eau de Parfum",
      type: "Gift Sets",
      subtype: "Gift ",
      price: 4299,
      realPrice: 4299,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A timeless, feminine, alluring blend of dark berries, midnight jasmine and rich amber, ready to give!",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfaf25d17/large/025140245.jpg",
      name: "Champagne Toast Gift Bag Set",
      type: "Gift Sets",
      subtype: "Gift ",
      price: 2499,
      realPrice: 2499,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A cheers-worthy spritzer of bubbly champagne, sparkling berries and juicy tangerine",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb7f4ec90/large/025140310.jpg",
      name: "Ocean Gift Bag Set",
      type: "Gift Sets",
      subtype: "Gift ",
      price: 4299,
      realPrice: 4299,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "An invigorating blend of blue cypress, vetiver and coastal air, ready to give!",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwff67b550/large/92w7wmhvpkcqs0h_667555534307.jpg",
      name: "You're The One Gift Box Set",
      type: "Gift Sets",
      subtype: "Gift ",
      price: 3399,
      realPrice: 3399,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A luxurious blend of soft rose, white birch & a drop of strawberry nectar",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwff0bb74c/large/t0tw5j6uyspw7i2_25141597.jpg",
      name: "Into The Night Gift Box Set",
      type: "Gift Sets",
      subtype: "Gift ",
      price: 8999,
      realPrice: 8999,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A timeless, feminine, alluring blend of dark berries, midnight jasmine and rich amber",
    },
  
    //Moisturizer ------>>>>>>
    //1) Cream=6  2)lotion=6
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwd94cec89/large/026208471.jpg",
      name: "RESTORATIVE",
      type: "Moisturizer",
      subtype: "Cream",
      price: 399,
      realPrice: 399,
      size: "29 ml/1 fl oz",
      select: "-",
      quantity: 1,
      fragrance: "Lightly fragranced with clementine & mint",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw168d5c35/large/026206437.jpg",
      name: "Rose Hand Cream",
      type: "Moisturizer",
      subtype: "Cream",
      price: 499,
      realPrice: 299,
      size: "29 ml/1 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A clean, playful, light blend of airy rose water, jasmine petals & creamy musk",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1cc798b2/large/026163212.jpg",
      name: "Eucalyptus Spearmint",
      type: "Moisturizer",
      subtype: "Cream",
      price: 399,
      realPrice: 399,
      size: "29 ml/1 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Eucalyptus oil and spearmint oil in our deeply moisturizing hand cream.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8fc77a92/large/026402010.jpg",
      name: "Coconut Milk Hand Cream",
      type: "Moisturizer",
      subtype: "Cream",
      price: 499,
      realPrice: 499,
      size: "29 ml/1 fl oz",
      select: "-",
      quantity: 1,
      fragrance: "NA",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwffb33b06/large/026194704.jpg",
      name: "YOURE THE ONE",
      type: "Moisturizer",
      subtype: "Cream",
      price: 399,
      realPrice: 239,
      size: "29 ml/1 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A luxurious blend of soft rose, white birch & a drop of strawberry nectar",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcd7fbd4a/large/026398829.jpg",
      name: "Pear Crème Brulee Ultimate Hydration Body Cream",
      type: "Moisturizer",
      subtype: "Cream",
      price: 1599,
      realPrice: 959,
      size: "226 g / 8 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: fruity custard topped with a crunchy sugar shell.Fragrance notes: baked pear, caramelized sugar and whipped cream.",
    },
  
    //Lotion(6)
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbce174b8/large/026399711.jpg",
      name: "Bubbly Ros&eacute; Super Smooth Body Lotion",
      type: "Moisturizer",
      subtype: "Lotion",
      price: 1499,
      realPrice: 899,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: a sweet, bubbly, celebratory sip.Fragrance notes: pink sparkling rosé, sweet blood orange and splash of cranberry.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw26d2bef0/large/667549427912.jpg",
      name: "DARK KISS",
      type: "Moisturizer",
      subtype: "Lotion",
      price: 599,
      realPrice: 599,
      size: "88 ml/ 3 fl oz",
      select: "Mix & Match: Buy 2 Get 1",
      quantity: 1,
      fragrance:
        "A seductive blend of black raspberry, burgundy rose & dark vanilla bean.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw82fb680c/large/024510478.jpg",
      name: "Into the Night Super Smooth Body Lotion",
      type: "Moisturizer",
      subtype: "Lotion",
      price: 1399,
      realPrice: 1399,
      size: "236 ml / 8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A timeless, feminine, alluring blend of dark berries, midnight jasmine & rich amber in our nutrient-rich, non-greasy lotion",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwec172b24/large/026398813.jpg",
      name: "Pear Crème Brulee Super Smooth Body Lotion",
      type: "Moisturizer",
      subtype: "Lotion",
      price: 1499,
      realPrice: 899,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: fruity custard topped with a crunchy sugar shell.Fragrance notes: baked pear, caramelized sugar and whipped cream.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw40d2b410/large/022206226.jpg",
      name: "Mad About You Travel Size Body Lotion",
      type: "Moisturizer",
      subtype: "Lotion",
      price: 599,
      realPrice: 599,
      size: "88 ml / 3 fl oz",
      select: "Mix & Match: Buy 2 Get 1",
      quantity: 1,
      fragrance:
        "A love-struck pairing of soft peonies & black currant kissed with creamy vanilla musk in our nutrient-rich, non-greasy lotion",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf644a007/large/026398811.jpg",
      name: "Whipped Berry Meringue Super Smooth Body Lotion",
      type: "Moisturizer",
      subtype: "Lotion",
      price: 1499,
      realPrice: 899,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: juicy berries covered in sweet cream.Fragrance notes: fresh berries, whipped sugar and fluffy vanilla.",
    },
  
    //AROMATHERAPY
    //1)Cream 2)Lotion
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf650258e/large/026165991.jpg",
      name: "ORANGE GINGER",
      type: "AROMATHERAPY",
      subtype: "Cream",
      price: 1499,
      realPrice: 899,
      size: "226 g / 8 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "This carefully crafted blend of orange and ginger oil creates a well-balanced aromatic fragrance.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw43fb58f7/large/026131625.jpg",
      name: "EUCALYPTUS SPEARMINT",
      type: "AROMATHERAPY",
      subtype: "Cream",
      price: 1399,
      realPrice: 839,
      size: "296 ml / 10 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "This carefully crafted blend of eucalyptus and spearmint oil creates a well-balanced aromatic fragrance.",
    },
  
    //lotion
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw07bac02d/large/026131621.jpg",
      name: "EUCALYPTUS SPEARMINT",
      type: "AROMATHERAPY",
      subtype: "Lotion",
      price: 1399,
      realPrice: 839,
      size: "192 ml / 6.5 flfl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "This carefully crafted blend of eucalyptus and spearmint oil creates a well-balanced aromatic fragrance.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw20d66c4e/large/026166808.jpg",
      name: "EUC TEA",
      type: "AROMATHERAPY",
      subtype: "Lotion",
      price: 1399,
      realPrice: 839,
      size: "295 ml / 10 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "This carefully crafted blend of eucalyptus oil and tea extract creates a well-balanced aromatic fragrance.",
    },
  
    //MEN'S
    //1)Lotion(3)  2) Cream(3)  3)Cologne(3)  4)
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbc137d83/large/026172253.jpg",
      name: "MARBLE",
      type: "MEN'S",
      subtype: "Lotion",
      price: 1199,
      realPrice: 719,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "A cool blend of Mediterranean waters, geranium & amber wood",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb9472799/large/026299194.jpg",
      name: "Stone Body Lotion",
      type: "MEN'S",
      subtype: "Lotion",
      price: 1199,
      realPrice: 719,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A serene blend of alpine water, lavender and sandalwood in our 24-hour moisturizing body lotion",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw90540de1/large/026098883.jpg",
      name: "OCEAN MEN",
      type: "MEN'S",
      subtype: "Lotion",
      price: 1199,
      realPrice: 1199,
      size: "236 ml / 8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance: "An invigorating blend of blue cypress, vetiver & coastal air",
    },
    //Cream
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw296bd718/large/026282784.jpg",
      name: "Marble Ultimate Hydration Body Cream",
      type: "MEN'S",
      subtype: "Cream",
      price: 1299,
      realPrice: 1299,
      size: "226 g / 8 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A cool blend of Mediterranean waters, geranium and amber wood in our 24-hour ultimate hydration body cream",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf4ecd7c5/large/026326994.jpg",
      name: "Stone Ultimate Hydration Body Cream",
      type: "MEN'S",
      subtype: "Cream",
      price: 1299,
      realPrice: 799,
      size: "226 g / 8 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A serene blend of alpine water, lavender and sandalwood in our 24-hour ultimate hydration body cream",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcf9bd18e/large/026339214.jpg",
      name: "Ocean 2-in-1 Body Wash &amp; Cream",
      type: "MEN'S",
      subtype: "Cream",
      price: 1699,
      realPrice: 1019,
      size: "175 g / 6.2 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "An invigorating blend of blue cypress, vetiver and coastal air in our 2-in-1 body wash and scrub",
    },
  
    //Cologne
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf4bddf35/large/026132657.jpg",
      name: "BOURBON",
      type: "MEN'S",
      subtype: "Cologne",
      price: 1399,
      realPrice: 1399,
      size: "15 mL / 0.5 fl oz",
      select: "Mix & Match: Buy 2 Get 1",
      quantity: 1,
      fragrance: "A smooth blend of white pepper, dark amber & Kentucky oak",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw36694a1b/large/026281144.jpg",
      name: "Stone Cologne",
      type: "MEN'S",
      subtype: "Cologne",
      price: 2999,
      realPrice: 1799,
      size: "100 mL /3.4 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "A serene blend of alpine water, lavender and sandalwood",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcf114e33/large/026134831.jpg",
      name: "BOURBON",
      type: "MEN'S",
      subtype: "Cologne",
      price: 2995,
      realPrice: 2995,
      size: "100 ml / 3.4 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance: "A smooth blend of white pepper, dark amber & Kentucky oak",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcaf30557/large/026281150.jpg",
      name: "Stone Mini Cologne",
      type: "MEN'S",
      subtype: "Cologne",
      price: 1399,
      realPrice: 839,
      size: "15 mL / 0.5 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A serene blend of alpine water, lavender and sandalwood in a long-lasting fragrance for men",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw229f4014/large/023430486.jpg",
      name: "TEAKWOOD",
      type: "MEN'S",
      subtype: "Cologne",
      price: 2995,
      realPrice: 1797,
      size: "100 ml / 3.4 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Take an entrancing walk through the woods with this striking blend of mahogany, black teakwood & lavender",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwd3db40c2/large/026172263.jpg",
      name: "MARBLE",
      type: "MEN'S",
      subtype: "Cologne",
      price: 2995,
      realPrice: 2995,
      size: "100 ml / 3.4 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance: "A cool blend of Mediterranean waters, geranium & amber wood",
    },
  
    ////
  
    //Hand Soaps and Cleansers-------->>>>>>>>>>>>>>>>>>>>>>>>>>>
  
    //a)Hand Cleansers
  
    //1)Gel=5    2) cleansers = 2  3)Holders = 5
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw26b6531e/large/qira4fmiyo40k34_26297782.jpg",
      name: "Winter Candy Apple PocketBac Cleansing Hand Gel",
      type: "Hand Cleansers",
      subtype: "Gel",
      price: 295,
      realPrice: 177,
      size: "29 mL / 1 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A merry-berry blend of red apple, winter rose petals & candied orange",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbfa884d4/large/0ta5btldogk58f7_667555833004.jpg",
      name: "Pineapple Mango Cleansing Hand Gel",
      type: "Hand Cleansers",
      subtype: "Gel",
      price: 299,
      realPrice: 299,
      size: "29 mL /1 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "A tropical mixer of fresh pineapple juice, mango and vine-ripened raspberry",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwc5c9140d/large/lffsd298n6ouwrb_26297787.jpg",
      name: "Frosted Coconut Snowball PocketBac Cleansing Hand Gel",
      type: "Hand Cleansers",
      subtype: "Gel",
      price: 295,
      realPrice: 177,
      size: "29 mL / 1 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "An island-meets-igloo blend of creamy coconut, whipped vanilla & sugar crystals",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1f67f19e/large/k6cezipqd9a8rn1_667555832076.jpg",
      name: "Perfect Peony Cleansing Hand Gel",
      type: "Hand Cleansers",
      subtype: "Gel",
      price: 299,
      realPrice: 299,
      size: "29 mL / 1 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "An airy blend of peony, natural apple oil and vanilla sandalwood",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3901114c/large/uj14ohte19n9ava_26201065.jpg",
      name: "EUCALYPTUS SPEARMINT",
      type: "Hand Cleansers",
      subtype: "Gel",
      price: 295,
      realPrice: 177,
      size: "29 ml / 1 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "A carefully crafted blend of eucalyptus and spearmint oil.",
    },
    //cleansers
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb88d8700/large/mbbgxqybxy9nob7_26307823.jpg",
      name: "Cucumber Melon Cleansing Hand Spray",
      type: "Hand Cleansers",
      subtype: "Gel",
      price: 599,
      realPrice: 599,
      size: "88 ml / 3 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "A cool blend of crisp cucumber, watery honeydew & juicy cantaloupe",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw107dadbd/large/9odwega2dqk5j50_26307822.jpg",
      name: "Sunshine and Lemons Cleansing Hand Spray",
      type: "Hand Cleansers",
      subtype: "Gel",
      price: 599,
      realPrice: 599,
      size: "88 ml / 3 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "A perfect pick-me-up of bright citrus, fresh squeezed lemons & cane sugar",
    },
  
    //Holders
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw718f110f/large/026341933.jpg",
      name: "Sleepy Unicorn PocketBac Holder",
      type: "Hand Cleansers",
      subtype: "Holders",
      price: 599,
      realPrice: 359,
      size: "-",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Your favorite PocketBac plus this pretty unicorn holder's the ultimate germ-fighting dream team.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8a512f1c/large/026411841.jpg",
      name: "Noise-Making Stegosaurus PocketBac Holder",
      type: "Hand Cleansers",
      subtype: "Holders",
      price: 1499,
      realPrice: 899,
      size: "-",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "NA",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1e147240/large/026407387.jpg",
      name: "Wearable Cheetah Zipper Card PocketBac Holder",
      type: "Hand Cleansers",
      subtype: "Holders",
      price: 1499,
      realPrice: 1499,
      size: "-",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance: "NA",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw50461d74/large/026401720.jpg",
      name: "Noise-Making Lion PocketBac Holder",
      type: "Hand Cleansers",
      subtype: "Holders",
      price: 1499,
      realPrice: 899,
      size: "-",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "NA",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwe9754d0e/large/026401717.jpg",
      name: "Happy Cactus PocketBac Holder",
      type: "Hand Cleansers",
      subtype: "Holders",
      price: 799,
      realPrice: 479,
      size: "-",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "NA",
    },
  
    //Hand Soaps
  
    //1)Soap  2)Holder
  
    //1)Soaps
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb086cfb2/large/026018137.jpg",
      name: "MAHOGANY TEAKWOOD",
      type: "Hand Soaps",
      subtype: "Soaps",
      price: 699,
      realPrice: 499,
      size: "259 ml / 8.75 fl oz",
      select: "Select @ Rs.499",
      quantity: 1,
      fragrance:
        "A woodsy, mysterious blend of rich mahogany, black teakwood & dark oak",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw55c7907c/large/024644609.jpg",
      name: "WARM VANILLA SUGAR",
      type: "Hand Soaps",
      subtype: "Soaps",
      price: 699,
      realPrice: 499,
      size: "259 ml / 8.75 fl oz",
      select: "Select @ Rs.499",
      quantity: 1,
      fragrance:
        "An addictive swirl of creamy vanilla & sparkling sugar crystals",
    },
  
    // 2)Holders
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw21dbefbb/large/026429559.jpg",
      name: "Noise-Making Unicorn Gentle Foaming Soap Holder",
      type: "Hand Soaps",
      subtype: "Soaps",
      price: 2499,
      realPrice: 1499,
      size: "-",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "NA",
    },
  
    /////////Home Fragrance -->----->////////
  
    //1)CANDLES = 12   2)Air Freshers = 12
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw533e8102/large/024635101.jpg",
      name: "FLORAL",
      type: "CANDLES",
      subtype: "candles",
      price: 2599,
      realPrice: 1559,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "Pear, Japanese Cherry Blossom, Sandalwood with Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2426f882/large/023940816.jpg",
      name: "FLORAL",
      type: "CANDLES",
      subtype: "candles",
      price: 1499,
      realPrice: 899,
      size: "198 g / 7 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Soft Rose Petals, Rain-Kissed Ivy, Spring Musk with Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4ec8ce48/large/026385624.jpg",
      name: "Fresh Cut Lilacs 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Lilac Bouquets, Dewy Greens, Soft Spring Air with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4c12a1d4/large/026385652.jpg",
      name: "Tiki Beach 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Warm Vanilla Musk, Orchids, Toasted Coconut with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7997d1bd/large/026385658.jpg",
      name: "Black Teakwood 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Rich Mahogany, Black Teakwood, Dark Oak, Frosted Lavender with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb00d94e9/large/026410260.jpg",
      name: "Vanilla & Peach Tea 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Peach Tea, Sweet Vanilla Crème, Fresh Oat Milk with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw244005eb/large/026393022.jpg",
      name: "Watermelon Lemonade 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1999,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Watermelon Ice, Sparkling Water, Meyer Lemon with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfffccc9a/large/023823228.jpg",
      name: "FRUITY",
      type: "CANDLES",
      subtype: "candles",
      price: 1499,
      realPrice: 899,
      size: "198 g / 7 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "Dark Cherry, Black Raspberry, Merlot with Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwedb4521c/large/23d2jpiiojlvr0h_667554949225.jpg",
      name: "Hello Beautiful 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1999,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A petal-perfect blend of white gardenia, jasmine petals & magnolia blossom",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfc4f7fa4/large/026388304.jpg",
      name: "Pomegranate Lemonade 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Juicy Pomegranate, Zested Lemons, Sugar Crystals with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8a231524/large/026385656.jpg",
      name: "Watermelon Lemonade 3-Wick Candle",
      type: "CANDLES",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Watermelon Ice, Sparkling Water, Meyer Lemon with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwe157ae1d/large/026199702.jpg",
      name: "VANILLA SUGAR",
      type: "CANDLES",
      subtype: "candles",
      price: 2599,
      realPrice: 1999,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Intoxicating Vanilla, White Orchid, Sparkling Sugar, Fresh Jasmine, Creamy Sandalwood with Essential Oils",
    },
  
    //2)Air Freshers = 12
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7d17114f/large/026394697.jpg",
      name: "Bubbly Ros&eacute; Enhanced Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 799,
      realPrice: 479,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: a sweet, bubbly, celebratory sip.Fragrance notes: pink sparkling rosé, sweet blood orange and splash of cranberry.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw214bcf4f/large/026411736.jpg",
      name: "Linen & Lavender Enhanced Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 799,
      realPrice: 799,
      size: "24 ml / 0.8 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "What it smells like: freshly washed linens hung to dry in a lavender field.Fragrance notes: crisp linen, lavender sea salt and fresh air breeze.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7f0f5241/large/026397329.jpg",
      name: "Fiji White Sands Enhanced Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: the sweetest, brightest beach day ever. Fragrance notes: fresh cut sugarcane, white nectarine and sandalwood.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfa2716c2/large/026397332.jpg",
      name: "Eucalyptus Rain Enhanced Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Aromatic Eucalyptus, Spearmint Leaves, Fresh Spring Rain with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw0497ad90/large/026207839.jpg",
      name: "Champagne Toast Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 699,
      size: "24 ml / 0.8 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Bubbly Champagne, Sparkling Berries, Juicy Tangerine with Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw38b87af5/large/026395962.jpg",
      name: "Cinnamon Spiced Vanilla Enhanced Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Fresh Ground Cinnamon, Sugar Crystals, Tahitian Vanilla Bean with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw06c98404/large/026454036.jpg",
      name: "Prosecco & Peaches Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: peaches and cream with a sparkling twist.Fragrance notes: bubbly champagne, juicy peach and hint of vanilla.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2b1ad90d/large/026397348.jpg",
      name: "Bergamot Waters Enhanced Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 799,
      realPrice: 799,
      size: "24 ml / 0.8 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Sparkling Bergamot, Pristine Blue Waters, Sugared Citrus with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7da9dfe4/large/026394688.jpg",
      name: "Watermelon Lemonade Enhanced Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Watermelon Ice, Sparkling Water, Meyer Lemon with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw25593aa7/large/026438468.jpg",
      name: "White T-Shirt Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: your favorite, freshly washed tee, hung to dry in a sunny meadow.Fragrance notes: crisp pear, lavender cloud and soft sandalwood.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf1e4aef5/large/026400285.jpg",
      name: "Salted Butterscotch & Vanilla Wallflowers Fragrance Refill",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 799,
      realPrice: 799,
      size: "24 ml / 0.8 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "What it smells like: a sweet and savory combo, straight from your wildest dessert dreams.Sweet Bourbon, Caramel Brulee, Warm Vanilla, Buttered Maple",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3e103b2c/large/026208145.jpg",
      name: "Eucalyptus Spearmint",
      type: "Air Freshers",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 699,
      size: "24 ml / 0.8 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Home fragrance that lasts for weeks and weeks! Pair with a Wallflowers plug and enjoy the scent of Eucalyptus and Spearmint Essential Oils",
    },
  
    //Room Spray
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw778ed87c/large/026049908.jpg",
      name: "Black Cherry Merlot Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 999,
      realPrice: 999,
      size: "42.5 g / 1.5 oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance: "Dark Cherry, Black Raspberry, Sumptuous Merlot",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwf025913f/large/026438913.jpg",
      name: "White T-Shirt Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 999,
      realPrice: 599,
      size: "42.5 g / 1.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "Crisp Pear, Lavender Cloud, Soft Sandalwood",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw39d970ef/large/026302252.jpg",
      name: "Mahogany Teakwood Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 999,
      realPrice: 999,
      size: "42.5 g / 1.5 oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance: "Rich Mahogany, Dark Oak, Frosted Lavender",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1a4b0442/large/026302266.jpg",
      name: "Endless Weekend Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 699,
      realPrice: 699,
      size: "42.5 g / 1.5 oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Give your home an instant refresh with the scent of fresh mandarin, magnolia and coconut water in our easy to use room perfume",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1a6b93da/large/026438909.jpg",
      name: "White Tea & Sage Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 999,
      realPrice: 599,
      size: "42.5 g / 1.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "Sparkling Bergamot, White Tea, Fresh Sage",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4f3e5971/large/026302263.jpg",
      name: "Watermelon Lemonade Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 999,
      realPrice: 999,
      size: "42.5 g / 1.5 oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Give your home an instant refresh with the scent of watermelon, sparkling water and lemon in our easy to use room perfume",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw0393e61e/large/026302261.jpg",
      name: "Linen & Lavender Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 999,
      realPrice: 999,
      size: "42.5 g / 1.5 oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Give your home an instant refresh with the scent of watermelon, sparkling water and lemon in our easy to use room perfume",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw74c507ca/large/026049916.jpg",
      name: "Gingham Concentrated Room Spray",
      type: "Air Freshers",
      subtype: "Room Spray",
      price: 999,
      realPrice: 999,
      size: "42.5 g / 1.5 oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "A fresh blend of bright florals & a hint of sweet citrus. Notes of blue freesia, white peach & fresh clementine",
    },
  
    ///Gifts--->>>>>>>>////////////////////////////
  
    //1)Gifts By recipient
  
    //a)gel
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw19853a81/large/026357103.jpg",
      name: "In the Stars Shower Gel",
      type: "Gifts By Recipient",
      subtype: "Gel",
      price: 1399,
      realPrice: 1399,
      size: "295 mL / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A sparkling blend of starflower, sandalwood musk, sugared tangelo, white agarwood and radiant amber",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw765f3d53/large/024329427.jpg",
      name: "Gingham Shower Gel",
      type: "Gifts By Recipient",
      subtype: "Gel",
      price: 1299,
      realPrice: 1299,
      size: "295 ml / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A fresh blend of bright florals & a hint of sweet citrus. This rich bubbly lather has notes of blue freesia, sweet clementine & soft violet petals.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw09e991f8/large/024642411.jpg",
      name: "JAPANESE CHERRY BLOSSOM",
      type: "Gifts By Recipient",
      subtype: "Gel",
      price: 1299,
      realPrice: 799,
      size: "295 ml / 10 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A graceful blend of Japanese Cherry Blossom, Asian pear, fresh mimosa petals, white jasmine & blushing sandalwood",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwa598269c/large/022845425.jpg",
      name: "DARK KISS",
      type: "Gifts By Recipient",
      subtype: "Gel",
      price: 1299,
      realPrice: 1299,
      size: "295 ml / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A seductive blend of black raspberry, burgundy rose & dark vanilla bean.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8d17a248/large/026228705.jpg",
      name: "Magnolia Charm Shower Gel",
      type: "Gifts By Recipient",
      subtype: "Gel",
      price: 1399,
      realPrice: 1399,
      size: "295 mL / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A lush, countryside blend of dewy pear blossom, blooming magnolia & fresh cedar",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1c476258/large/026139371.jpg",
      name: "YOURE THE ONE",
      type: "Gifts By Recipient",
      subtype: "Gel",
      price: 1499,
      realPrice: 1499,
      size: "295 ml / 10 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "A luxurious blend of soft rose, white birch & a drop of strawberry nectar",
    },
  
    // b)Candles(6)
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw533e8102/large/024635101.jpg",
      name: "FLORAL",
      type: "Gifts By Recipient",
      subtype: "candles",
      price: 2599,
      realPrice: 1559,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "Pear, Japanese Cherry Blossom, Sandalwood with Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw2426f882/large/023940816.jpg",
      name: "FLORAL",
      type: "Gifts By Recipient",
      subtype: "candles",
      price: 1499,
      realPrice: 899,
      size: "198 g / 7 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Soft Rose Petals, Rain-Kissed Ivy, Spring Musk with Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4ec8ce48/large/026385624.jpg",
      name: "Fresh Cut Lilacs 3-Wick Candle",
      type: "Gifts By Recipient",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Lilac Bouquets, Dewy Greens, Soft Spring Air with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4c12a1d4/large/026385652.jpg",
      name: "Tiki Beach 3-Wick Candle",
      type: "Gifts By Recipient",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Warm Vanilla Musk, Orchids, Toasted Coconut with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7997d1bd/large/026385658.jpg",
      name: "Black Teakwood 3-Wick Candle",
      type: "Gifts By Recipient",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Rich Mahogany, Black Teakwood, Dark Oak, Frosted Lavender with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb00d94e9/large/026410260.jpg",
      name: "Vanilla & Peach Tea 3-Wick Candle",
      type: "Gifts By Recipient",
      subtype: "candles",
      price: 2799,
      realPrice: 1679,
      size: "411 g / 14.5 oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Peach Tea, Sweet Vanilla Crème, Fresh Oat Milk with Natural Essential Oils",
    },
  
    // c)Fragrance(6)
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7d17114f/large/026394697.jpg",
      name: "Bubbly Ros&eacute; Enhanced Wallflowers Fragrance Refill",
      type: "Gifts By Recipient",
      subtype: "Fragrance Refill",
      price: 799,
      realPrice: 479,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: a sweet, bubbly, celebratory sip.Fragrance notes: pink sparkling rosé, sweet blood orange and splash of cranberry.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw214bcf4f/large/026411736.jpg",
      name: "Linen & Lavender Enhanced Wallflowers Fragrance Refill",
      type: "Gifts By Recipient",
      subtype: "Fragrance Refill",
      price: 799,
      realPrice: 799,
      size: "24 ml / 0.8 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "What it smells like: freshly washed linens hung to dry in a lavender field.Fragrance notes: crisp linen, lavender sea salt and fresh air breeze.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw7f0f5241/large/026397329.jpg",
      name: "Fiji White Sands Enhanced Wallflowers Fragrance Refill",
      type: "Gifts By Recipient",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "What it smells like: the sweetest, brightest beach day ever. Fragrance notes: fresh cut sugarcane, white nectarine and sandalwood.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfa2716c2/large/026397332.jpg",
      name: "Eucalyptus Rain Enhanced Wallflowers Fragrance Refill",
      type: "Gifts By Recipient",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Aromatic Eucalyptus, Spearmint Leaves, Fresh Spring Rain with Natural Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw0497ad90/large/026207839.jpg",
      name: "Champagne Toast Wallflowers Fragrance Refill",
      type: "Gifts By Recipient",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 699,
      size: "24 ml / 0.8 fl oz",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Bubbly Champagne, Sparkling Berries, Juicy Tangerine with Essential Oils",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw38b87af5/large/026395962.jpg",
      name: "Cinnamon Spiced Vanilla Enhanced Wallflowers Fragrance Refill",
      type: "Gifts By Recipient",
      subtype: "Fragrance Refill",
      price: 699,
      realPrice: 419,
      size: "24 ml / 0.8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "Fresh Ground Cinnamon, Sugar Crystals, Tahitian Vanilla Bean with Natural Essential Oils",
    },
  
    // d) Lotion (6)
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw07bac02d/large/026131621.jpg",
      name: "EUCALYPTUS SPEARMINT",
      type: "Gifts By Recipient",
      subtype: "Lotion",
      price: 1399,
      realPrice: 839,
      size: "192 ml / 6.5 flfl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "This carefully crafted blend of eucalyptus and spearmint oil creates a well-balanced aromatic fragrance.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw20d66c4e/large/026166808.jpg",
      name: "EUC TEA",
      type: "Gifts By Recipient",
      subtype: "Lotion",
      price: 1399,
      realPrice: 839,
      size: "295 ml / 10 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "This carefully crafted blend of eucalyptus oil and tea extract creates a well-balanced aromatic fragrance.",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwbc137d83/large/026172253.jpg",
      name: "MARBLE",
      type: "Gifts By Recipient",
      subtype: "Lotion",
      price: 1199,
      realPrice: 719,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance: "A cool blend of Mediterranean waters, geranium & amber wood",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb9472799/large/026299194.jpg",
      name: "Stone Body Lotion",
      type: "Gifts By Recipient",
      subtype: "Lotion",
      price: 1199,
      realPrice: 719,
      size: "236 ml / 8 fl oz",
      select: "Select @ 40%off",
      quantity: 1,
      fragrance:
        "A serene blend of alpine water, lavender and sandalwood in our 24-hour moisturizing body lotion",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw90540de1/large/026098883.jpg",
      name: "OCEAN MEN",
      type: "Gifts By Recipient",
      subtype: "Lotion",
      price: 1199,
      realPrice: 1199,
      size: "236 ml / 8 fl oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance: "An invigorating blend of blue cypress, vetiver & coastal air",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8d3b80ad/large/026309307.jpg",
      name: "Pure Wonder Whipped Glow-lotion",
      type: "Gifts By Recipient",
      subtype: "Lotion",
      price: 2499,
      realPrice: 2499,
      size: "185 g / 6.5 oz",
      select: "Mix & Match: Buy 3,Get 1",
      quantity: 1,
      fragrance:
        "Delight in a sense of wonder with this clean blend of iced rosé, star jasmine and warm white amber",
    },
  
    //  e)gifts(6)
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4ad10a9f/large/026307889.jpg",
      name: "Pure Wonder Eau de Parfum",
      type: "Gifts By Recipient",
      subtype: "Gift ",
      price: 4299,
      realPrice: 4299,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A timeless, feminine, alluring blend of dark berries, midnight jasmine and rich amber, ready to give!",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwfaf25d17/large/025140245.jpg",
      name: "Champagne Toast Gift Bag Set",
      type: "Gifts By Recipient",
      subtype: "Gift ",
      price: 2499,
      realPrice: 2499,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A cheers-worthy spritzer of bubbly champagne, sparkling berries and juicy tangerine",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb7f4ec90/large/025140310.jpg",
      name: "Ocean Gift Bag Set",
      type: "Gifts By Recipient",
      subtype: "Gift ",
      price: 4299,
      realPrice: 4299,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "An invigorating blend of blue cypress, vetiver and coastal air, ready to give!",
    },
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwff67b550/large/92w7wmhvpkcqs0h_667555534307.jpg",
      name: "You're The One Gift Box Set",
      type: "Gifts By Recipient",
      subtype: "Gift ",
      price: 3399,
      realPrice: 3399,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A luxurious blend of soft rose, white birch & a drop of strawberry nectar",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwff0bb74c/large/t0tw5j6uyspw7i2_25141597.jpg",
      name: "Into The Night Gift Box Set",
      type: "Gifts By Recipient",
      subtype: "Gift ",
      price: 8999,
      realPrice: 8999,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A timeless, feminine, alluring blend of dark berries, midnight jasmine and rich amber",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwc5312488/large/jbt2n0igq9kzphm_23536144.jpg",
      name: "Into The Night Gift Box",
      type: "Gifts By Recipient",
      subtype: "Gift ",
      price: 8999,
      realPrice: 8999,
      size: "-",
      select: "-",
      quantity: 1,
      fragrance:
        "A timeless, feminine, alluring blend of dark berries, midnight jasmine and rich amber",
    },
  
    ////collections
  
    // a)Bags
  
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3c540bb0/large/026285430.jpg",
      name: "Glitter Cork Gift Bag",
      type: "COLLECTIONS",
      subtype: "Gift Bag",
      price: 499,
      realPrice: 499,
      size: "-",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Fill this glitter cork gift bag with their favorite Bath & Body Works products to create the perfect present!",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw1fa210cb/large/026285431.jpg",
      name: "Gold Glitter Gift Bag",
      type: "COLLECTIONS",
      subtype: "Gift Bag",
      price: 499,
      realPrice: 499,
      size: "-",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance:
        "Fill this glitter cork gift bag with their favorite Bath & Body Works products to create the perfect present!",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw8807f7ca/large/026401726.jpg",
      name: "Birthday Cake Mini Gift Bag",
      type: "COLLECTIONS",
      subtype: "Gift Bag",
      price: 1299,
      realPrice: 1299,
      size: "-",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance: "NA",
    },
    {
      image:
        "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwb8f0f0b8/large/026401723.jpg",
      name: "Pink Travel Toiletry Bag",
      type: "COLLECTIONS",
      subtype: "Gift Bag",
      price: 1299,
      realPrice: 1299,
      size: "-",
      select: "Mix & Match: Buy 2, Get 1",
      quantity: 1,
      fragrance: "NA",
    },
  ];
  
  localStorage.setItem("all_data", JSON.stringify(data));