
//DOM cannot be accessed when the window has not yet loaded
window.onload = function()
{
    //All DOM code goes here

    /*
    Car has:
    year
    make
    model
    color
    wheels
    vin
    */

    var car = {
        year: 2005,
        make: "Toyota",
        model: "Rav4",
        color: "Silver",
        vin: 123456789,
        doors: 5,
        engine: true,
        enginetype: "I4",
        name: function(){return "LightningMcQueen";},
        id: function(){return this.year + this.make + this.model;}
    };
    
    console.log(car);

    //Access properties
    console.log(car.year);
    console.log(car.make);

    //Access methods
    console.log(car.id());
    console.log(car.name());

    //Access using a subscript like an array
    console.log(car["year"]);

    car.year = 2007;
    console.log(car.year);

    car.year = function()
    {
        return 2019;
    }

    console.log(car.year());

    car.fourwheel = false;
    console.log(car);

    delete car.color;

    var jsonCar = {
        "year": "2019",
        "make": "Ford",
        "model": "F-150"
    };

    console.log(jsonCar.year);
    var strJSON = JSON.stringify(jsonCar);
    console.log(strJSON);

    var objJSON = JSON.parse(strJSON);
    console.log(objJSON);
}
