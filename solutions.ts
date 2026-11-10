function multiplyValue(value: number, multiplier: number =2){
    return value * multiplier;
}



function processInput(value: string | number | boolean) : string | number | undefined {
    if(typeof value === 'string')
        return value.trim().toLocaleLowerCase();
    if(typeof value === 'number')
        return value * 10;
    if(typeof value === 'boolean' && value === true)
        return "Active";
    if(typeof value === 'boolean' && value === false)
        return "Inactive";
}



function formatCoordinate([latitude, longitude, locationName]: [number, number, string]){
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}



function concatenateArrays <T>(...arrays: T[][]) : T[]{
    let newArr : T[] = [];

    for(const array of arrays){
        newArr.push(...array);
    }
    return newArr;
}



interface Course{
    title: string,
    students: number,
    isPublished: boolean
}


function getPopularCourses (courses: Course[], minStudents: number){
    let popularCourses : Course[] = [];
    for(let course of courses){
        if(course.students >= minStudents
            && course.isPublished === true
        ){
            popularCourses.push(course)
        }
    }
    return popularCourses;
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][]{
    const resultArr: T[K][] = [];
    for(const item of items){
        resultArr.push(item[key]);
    }
    return resultArr;    
}

class Employee{
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee{
    private department;
    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department  = department;
    }
    getRoleInfo(): string{
        return `Manage of ${this.department}: ${this.name}`;
    }
}
 

function validateAgeAsync(age: number): Promise<string> {
    return new Promise<string>((resolve, reject): void => {
        if(age >= 18){
            setTimeout((): void => resolve("Access Granted"), 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    })
}