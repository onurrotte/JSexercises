const person = {
    name: "Ali",
    lastName: "Güzel",
    dateOfBirth: "12 May 2000",
    dateoFPlace: "Ankara",
    fullInfo: function(){
        return this.name + "" + this.lastName + " " + this.dateOfBirth + " " + this.dateoFPlace;
    }
};

console.log(person.fullInfo())