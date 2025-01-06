class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email)
    }

    editData(name, email) {
        this.name = name;
        this.email = email;
    }
}
let admin1 = new Admin("Admin1", "admin1@gmail.com");
admin1.viewData();
admin1.editData("Admin1 edited", "admin1@gmail.edited");
admin1.viewData();

let admin2 = new Admin("Admin2", "admin2@gmail.com");
admin2.viewData();
admin2.editData("Admin2 edited", "admin2@gmail.edited");
admin2.viewData();