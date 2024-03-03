const request = require('request')
const geocode = (address , callback) => {
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?proximity=ip&access_token=pk.eyJ1IjoiYWJvdWxnaGFpdCIsImEiOiJjbHRiOGV1Y3MwbWI5MmltbDhmcWI2OHM0In0.dEDcXFm-V5xTwPsu9Ik1hA"
    request({url : geocodeUrl, json : true} , (error , response) => {
        if(error){
            callback("unable to connect geocode service", undefined)
        }else if(response.body.message) {
            callback(response.body.message, undefined)
        }else if(response.body.features.length == 0) {
            callback("unable to find location", undefined)
        }else{
            callback(undefined, {
                longtitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1]
            })
        }
    })
}
module.exports = geocode