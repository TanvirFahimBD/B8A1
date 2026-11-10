### Intro

Access modifiers in TS control how class property and methods can be accessed from diff parts of a program. They are imporatnt concepts in OOP because they help inplement encapsulation and protect sensitive info. TS provides `public`, `private`, `protected`, and `readonly` modifiers to control access to class memebers or methods

**1. Public:** Public member can be accessed from anywhere including outside the class and its subclass. It is the default access modifier in TS.

**2. Private:** Private member can only be accessed inside the class where they are declared. They cannot be accessed directly from outside the class or its subclasses.

**3. Protected:** Protected memebers can be accessed inside their declaring class and its subclasses, but not directly from outside the class.

**4. Readonly:**: Readonly properties can only be initialized during declaration or inside the constructor. Their values cannot be reassigned later

### Example

```typescript
class Employee{
  public name: string;
  private salary: number;
  protected department: string;
  readonly country: string = "BD";

  constructor(
    name: string,
    salary: number,
    department: string
  ){
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  getCurrentSalary(): number{
    return this.salary;
  }
}

Class SWE extends Employee {
  showOwnDepartment(): void{
    console.log(this.department);    
  }
}

const tanvir = new SWE("Tanvir" , 20, "Software");
console.log(tanvir.name);               //Tanvir
console.log(tanvir.getCurrentSalary()); //20
tanvir.showOwnDepartment();             //Software

// console.log(tanvir.salary);          //Error: private property
// console.log(tanvir.department);      //Error: protected property
// tanvir.country = "China";            //Error: readonly property
```


### Conclustion

Access modifiers help developers or SWEs manage data visibility and implement encapsulation. Organization can protect an employees salary while allowing authorized methods to retrieve it. These modifiers properly make TS application more secure and organized.