const namigFilter = require("../Naming/namingFilter");
const namigSort = require("../Naming/namingSort");

async function dynamicFilterSorter(query, sorting, fields ,filter) { 

    for (const key in query) {
        //SORT
        if(key === 'sort'){

            let s = query.sort.split(',');

            for (const i in s) {
                namigSort(query ,s[i] ,sorting) 
            }
            
        }
        //FIELDS
        if(key === 'fields') {
             let s = query.fields.split(',');

            for (const i in s) {
                namigSort(query ,s[i] ,fields) 
            }
        }
        //FILTERS
        else{
        namigFilter(query , key , filter)
        }
    }
}

  
module.exports = dynamicFilterSorter