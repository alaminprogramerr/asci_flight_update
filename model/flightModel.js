const  mongoose = require ('mongoose')
const Schema= mongoose.Schema
const internationalFlightSchema= new Schema({
    addedTime:String,
    dateTime:{
        type:String, 
        required:true
    },
    tailNumber:{
        type:String
    },
    operator:{
        type:String
    },
    icao:{
        type:String
    },
    aircraft:{
        type:String
    },
    callsign:{
        type:String
    },
    origin:{
        type:String
    },
    destination:{
        type:String
    },
    entryWayPoint:{
        type:String,
    },
    exitWayPoint:{
        type:String
    }
})
const internationalFlightModel= mongoose.model('internationalFlightModel', internationalFlightSchema)


const domesticFlightSchema= new Schema({
    addedTime:String,
    dateTime:{
        type:String, 
        required:true
    },
    tailNumber:{
        type:String,
        required:true
    },
    operator:{
        type:String
    },
    icao:{
        type:String
    },
    aircraft:{
        type:String
    },
    callsign:{
        type:String
    },
    origin:{
        type:String
    },
    destination:{
        type:String
    },
    entryWayPoint:{
        type:String,
    },
    exitWayPoint:{
        String
    }
})
const domesticFlightModel= mongoose.model('domesticFlightModel', domesticFlightSchema)

const invoiceSchema= new Schema({
    startDate:{
        type:String, 
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    operator:{
        type:String,
        required:true
    }
})
const invoiceModel= mongoose.model('invoiceModel', invoiceSchema)

module.exports= {
    domesticFlightModel,
    internationalFlightModel,
    invoiceModel
}