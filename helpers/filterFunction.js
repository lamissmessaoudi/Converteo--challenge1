async function filterFunction( data, filter) { 
    Object.keys(filter).map((i)=>{
            console.log('elem : ',i,filter[i]);
            let f = filter[i] 
            let filtredData = data.filter((e)=>{
           
            if(f["gte"]) {
                salary =  e[i]
               if (i === "What is your annual salary?") {
                  let j = salary ; 
                 salary =  j.replace('k','000')
                           .replace('$','')
                           .replace('£','')
                           .replace('~','') 
                           .replace(/,/g, '')
                           .split(".").join("");
                  console.log("salary variable = " , e[i] , "==>" , salary)
               }
               return parseInt(salary) >=parseInt(f["gte"]); 
               }           
            return e[i] === f;
            })   
           
        data = filtredData ; 
      })
          return data

}

module.exports = filterFunction