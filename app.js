const geocode = require('./geocode')
const forecast = require('./forecast')
const country = process.argv[2]

geocode(country, (error, data)=>{
    console.log("Error : " , error)
    console.log("Data : " , data)

    forecast(data.latitude, data.longtitude, (error, data)=>{
        console.log("Error : " , error)
        console.log("Data : " , data)
    })
}) 