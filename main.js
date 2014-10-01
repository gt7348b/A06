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

    var sum = function(){

              price

              }



    answer1 = avgprice;
    console.log(avgprice);

//This is question 2

    c
c
    midrangeitems = midrangeitemsfourteen.filter(function(miditems) {

                            if (miditems.price <= 18) {

                                    return miditems};
                                  });


    console.log(midrangeitems);
    answer2 = midrangeitems;

//This is question 3 pound symbol \u00A3

    var curarray = items.filter(function(curitems) {

                            if (curitems.currency_code == "GBP") {

                                    return curitems};
                                  });

    var curarray = items.map(function(itemprice){

                                      return itemprice.price

                                    });


    console.log(gbpitems);
    answer3 = gbpitems;

//This is question 4

    console.log(wooditems);
    answer4 = wooditems;

//This is question 5

    console.log(eightitems);
    answer5 = eightitems;

//This is question 2

    console.log(selfmadeitems);
    answer6 = selfmadeitems;



//This section displays the answers

document.getElementById('answer1').innerHTML = answer1;

document.getElementById('answer1').innerHTML = answer2;

document.getElementById('answer1').innerHTML = answer3;

document.getElementById('answer1').innerHTML = answer4;

document.getElementById('answer1').innerHTML = answer5;

document.getElementById('answer1').innerHTML = answer6;
