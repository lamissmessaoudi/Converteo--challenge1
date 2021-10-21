async function fieldsFunction(data, fields) { 
    if (Object.keys(fields).length !== 0) {
             let fieldData = data.map((e)=>{
             let obj ={}
               Object.keys(fields).map((i)=>{
                  //console.log("e   = ", e[fields[i]]);
                  obj[fields[i]] = e[fields[i]];
               }) 
               return obj ; 
            })
            data = fieldData ; 
         }
      return data ; 

}

  
module.exports = fieldsFunction ; 