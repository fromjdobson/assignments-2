const users = [
    {
        firstName: "Billy",
        lastName: "Madison", 
        age: 32
    },
    {
        firstName: "Tommy",
        lastName: "Pickles", 
        age: 32
    },
    {
        firstName: "Ray",
        lastName: "Charles", 
        age: 32
    },
    {
        firstName: "Lady",
        lastName: "Gaga", 
        age: 32
    },
    {
        firstName: "Elizabeth",
        lastName: "Taylor", 
        age: 32
    },
    {
        firstName: "Led",
        lastName: "Zeplin", 
        age: 32
    },
    {
        firstName: "Micael",
        lastName: "Johnson", 
        age: 32
    },
    {
        firstName: "Keri",
        lastName: "Strug", 
        age: 32
    },
    {
        firstName: "Chucky",
        lastName: "Finster", 
        age: 32
    },
    {
        firstName: "Angelica",
        lastName: "Pickles", 
        age: 32
    },
]


const newUser = users.reduce(function(total,person){
    let first =person.firstName
    //  let firstArr =first.substring(" ")
    let newArr =total.push(first)
    let newestArr = newArr.sort(function(a,b){
            console.log(newestArr)
            return a-b
       })

    
   return total 
     
},[])   

console.log(newestArr)  