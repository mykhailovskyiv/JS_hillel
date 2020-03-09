function Worker(technology, experience, energy) {
    this.experience = experience;
    this.hiredAt = new Date(2020, 3, 20);
    this.probationPeriod = 90;
    this.technology = technology;
    this.maxEnergy = this.energy = energy;
}

Worker.prototype.isReadyToWork = function () {
    return this.energy > 0;
};

Worker.prototype.getProbationPeriodLeft = function () {
    var diff = (this.hiredAt - new Date()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
};

function Company(name) {
    this.staffExpAcceptable = 5;
    this.name = name;
    this.staff = [];
}

Company.prototype.everyProbationPeriodPassed = function () {
    return this.staff.every(function (worker) {
        return worker.getProbationPeriodLeft() === 0;
    });
};

Company.prototype.hire = function (worker) {
    if (this.staffExpAcceptable > worker.experience) {
        console.error("Go away!");
    } else {
        this.staff.push(worker);
    }
};

var jsDev = new Worker("JavaScript", 4, 200);
var csDev = new Worker("CSharp", 10, 200);
var company = new Company("OLOLO");

// {} (constructor = Object) -> Object.prototype
// {} (constructor = Worker) -> Worker.prototype -> Object.prototype
// {} (constructor = Company) -> Company.prototype -> Object.prototype

company.hire(jsDev);
company.hire(csDev);

console.log(company.everyProbationPeriodPassed());


//////////////////////////////

function Worker(name, hireDate, technology, experience, energy) {
    this.experience = experience;
    this.name = name;
    this.hiredAt = hireDate;
    this.probationPeriod = 90;
    this.technology = technology;
    this.maxEnergy = this.energy = energy;
    this.salary = 0;
}

Worker.prototype.isReadyToWork = function () {
    return this.energy > 0;
};

Worker.prototype.getProbationPeriodLeft = function () {
    var diff = (this.hiredAt - new Date()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
};

Worker.prototype.addSalary = function (sum) {
    this.salary += sum;
};

var workers = [
    {
        hireDate: new Date(2020, 1, 20),
        name: "Yarek",
        experience: 5,
        technology: "JavaScript"
    },
    {
        hireDate: new Date(2020, 2, 20),
        name: "Vasiliy",
        experience: 1,
        technology: "Go"
    },
    {
        hireDate: new Date(2019, 12, 20),
        name: "Petya",
        experience: 2,
        technology: "F#"
    }
];

// var newWorkers = [];

// for (var i = 0; i < workers.length; i++) {
//   var worker = workers[i];
//   newWorkers.push(
//     new Worker(
//       worker.name,
//       worker.hireDate,
//       worker.technology,
//       worker.experience,
//       200
//     )
//   );
// }

var newWorkers = workers.map(function (worker) {
    return new Worker(
        worker.name,
        worker.hireDate,
        worker.technology,
        worker.experience,
        200
    );
});

newWorkers[0].addSalary(200);
console.log(newWorkers);

var filteredWorkers = newWorkers.filter(function (worker) {
    return worker.experience > 2;
});

console.log(newWorkers, filteredWorkers, newWorkers[0] === filteredWorkers[0]);


function forEach(arr, cb) { }