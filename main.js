//This is the javascript file for Assignment #6 - Array Questions


var answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    avgprice,             //average price of all items
    eightitems,           //items with more than 8 materials
    gbpitems,             //items denominated in pounds
    midrangeitems,        //items priced between $14 and $18
    price,
    selfmadeitems,        //items made by seller
    wooditems             //items made of wood
    ;

//This is question 1

    var pricearray = items.map(function(itemprice){

                                          return itemprice.price

                                        });

    var numitems = pricearray.length;

    var sum = pricearray.reduce(function(a,b){

              return a + b

            }) ;

    avgprice = sum / numitems;

    answer1 = Number(avgprice).toFixed(2);
    console.log("The average price is $" + Number(avgprice).toFixed(2));

//This is question 2

    var midrangeitemsfourteen = items.filter(function(miditems) {

                            if (miditems.price >= 14) {

                                    return miditems};
                                  });

    midrangeitemsfourteen.filter(function(miditems) {

                        if (miditems.price < 18) {

                                console.log(miditems)};
                              });

    midrangeitems = midrangeitemsfourteen.filter(function(miditems) {

                            if (miditems.price < 18) {

                                    return miditems};
                                  });



      answer2 = midrangeitems;

//This is question 3 pound symbol \u00A3

curarray = items.filter(function(currency){

                      if (currency.currency_code == "GBP") {

                          console.log(currency.title + "costs \u00A3" + currency.price)}
                        });

/*curarray.map(function(itemprice){

                                          console.log()

                                        });

    console.log(gbpitems);
    answer3 = gbpitems;*/


//This is question 4

  items.forEach(function(mat1){

                        mat1.materials.forEach(function(wood) {

                          if (wood === "wood") {
                            console.log(mat1.title)}

                            })
                          });

    console.log(wooditems);
    answer4 = wooditems;

//This is question 5

items.filter(function(miditems) {

                            if (miditems.materials.length >= 8) {

                                    console.log(miditems.title + miditems.materials)};
                                  });

/*eightitems = matarray.map(function(itemprice){

                                          return itemprice.description; return itemprice.materials;

                                        });
    eightitems = matarray;

    console.log(eightitems);
    answer5 = eightitems;*/

//This is question 2
    var sellmade = items.filter(function(sellmade){
                            if (sellmade.who_made == "i_did")

                                {return sellmade.who_made}

                              });

    selfmadeitems = sellmade.length;

    console.log(selfmadeitems + " were made by their sellers");
    answer6 = selfmadeitems;



//This section displays the answers

document.getElementById('answer1').innerHTML = answer1;

document.getElementById('answer2').innerHTML = answer2;

document.getElementById('answer3').innerHTML = answer3;

document.getElementById('answer4').innerHTML = answer4;

document.getElementById('answer5').innerHTML = answer5;

document.getElementById('answer6').innerHTML = answer6;
