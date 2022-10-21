// FIRST PROBLEM STATEMENT

class PersonalAccount {
  constructor(
    firstName,
    lastName,
    income,
    property_expenses,
    totalincome,
    totalexpense
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addincome(income, totalincome);
    this.addexpenses(property_expenses, totalexpense);
  }

  addincome(income, totalincome) {
    this.income = income;
    this.totalincome = totalincome;
  }

  addexpenses(property_expenses, totalexpense) {
    this.property_expenses = property_expenses;
    this.totalexpense = totalexpense;
  }
}

const myself = new PersonalAccount("Murtaza", "Raheem", 40000, 20000, 60000, 20000);
console.log(myself);

// SECOND PROBLEM STATEMENT

class vehicle {
  constructor(name, model, color, geartype) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.geartype = geartype;
  }

  start() {
    console.log("Vehicle Ready");
  }

  opendoor() {
    console.log("Door Open");
  }
}

const Civic = new vehicle("Civic", 2022, "grey", "Automatic");
console.log(Civic);
Civic.start();
Civic.opendoor();

class car extends vehicle {
  constructor(name, model, color, geartype, engine, maxspeed) {
    super(name, model, color, geartype);
    this.engine = engine;
    this.maxspeed = maxspeed;
  }
}

const Crown = new car("Crown", 2022, "White","Automatic", "2000 CC", "250 KM/H");
console.log(Crown);

class truck extends vehicle {
  constructor(name, model, color, geartype, engine, maxspeed, braketype) {
    super(name, model, color, geartype);
    this.engine = engine;
    this.maxspeed = maxspeed;
    this.braketype = braketype;
  }
}

const MarkX = new truck("MarkX", 2022,"Silver", "Automatic", "4500 CC", "300 KM/H", "ABS");
console.log(MarkX);

class bus extends vehicle {
  constructor(
    name,
    model,
    color,
    geartype,
    engine,
    maxspeed,
    braketype,
    seats
  ) {
    super(name, model, color, geartype);
    this.engine = engine;
    this.maxspeed = maxspeed;
    this.braketype = braketype;
    this.seats = seats;
  }
}
const Yutong = new bus("Yutong Master", 2022, "White","Automatic", "3800 CC", "120 KM/H","ADS", 120);
console.log(Yutong);
