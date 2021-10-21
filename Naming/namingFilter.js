const namingMap = require("./namingMap")

async function namigFilter(query , name , obj) { //obj == filter or sort


        if (name !== "order" && name !== "sort" &&
            (!isNaN(parseInt(query[name])) || (query[name] !== "") /* || (query[name] !== "undefined") */)) {
                // console.log('name' , name)
                // console.log('namingMap.get(name)' , namingMap.get(name))
                // console.log('query.name  ' , query[name]) 
                obj[namingMap.get(name)] = query[name]
        }
        }


module.exports = namigFilter