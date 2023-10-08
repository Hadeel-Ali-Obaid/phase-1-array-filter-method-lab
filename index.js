// Code your solution here

function findMatching(array, name) {

return array.filter((array1)=> { return array1 === name || array1.toUpperCase() === name.toUpperCase(); 

}
    )
}


function fuzzyMatch(drivers, para) {
    let passedValue = para;
    return drivers.filter((driver)=> {return driver.slice(0, 2) === passedValue
    }
    )  
}


function matchName(drivers, name) {
let values
values= (drivers.filter( (driver) => {return driver.name === name}))
return values;
}
