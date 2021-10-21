const _ = require("underscore");

async function sortingFunction(data, sort) { 
    Object.keys(sort).map((i)=>{
         
         console.log("i == >" , i ) ; //i == > job_title
         console.log('sort[i]' , sort[i]); //sort[i] Job title
         let s = _.sortBy( data, sort[i] , (n) => n.name.toLowerCase() );
         data = s
      })

      return data ; 

}

  
module.exports = sortingFunction