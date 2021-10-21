const _ = require("underscore");
const dynamicFilterSorter = require("../helpers/dynamicFilterSorter");
const fieldsFunction = require("../helpers/fieldsFunction");
const filterFunction = require("../helpers/filterFunction");
const sortingFunction = require("../helpers/sortingFunction");
const get = async (req,data)=>{
   try
   {
      const fs = require('fs');

      let rawData = fs.readFileSync('survery_1.json');
      let data = JSON.parse(rawData);
      let filter = {};
      let sort = {};
      let fields ={}; 
      let query = req.query;

      console.log('----- query : ',query);
      
      if (Object.keys(query).length !== 0) {
         dynamicFilterSorter(query, sort, fields ,filter);
      }
     

      // FILTRING THE DATA
     data = await filterFunction(data ,filter)

      // SPORTING THE DATA 
      data = await sortingFunction(data, sort); 
     
      //fields 
      data = await fieldsFunction(data , fields)
   
      return {code: 200, status: true, data }

      }
   catch(err)
   {
    console.log('errr', err);
    return { status: false, code: 500, error: err }
   }
}

module.exports = get
