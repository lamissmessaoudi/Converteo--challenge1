const namingMap = require("./namingMap")

async function namigSort(query , name , obj) { 

       if (name !== "order" &&
            (!isNaN(parseInt(query[name])) || (query[name] !== "") /* || (query[name] !== "undefined") */)) {
                // console.log('name' , name)
                // console.log('namingMap.get(name)' , namingMap.get(name))
                obj[name] = namingMap.get(name)
        }
        }
module.exports = namigSort