const flightValidator= require('../validator/flightValidator')
const {internationalFlightModel   , invoiceModel, domesticFlightModel}= require('../model/flightModel')


const createInternationalFlight = (req, res)=>{
    console.log(req.body)
    let verify= flightValidator.internationalFlightValidator(req.body)
    let {dateTime,tailNumber,operator,icao,aircraft,callsign,origin,destination,entryWayPoint,exitWayPoint}= req.body
    if(!verify.isValid){
        return res.status(400).json(verify.err)
    }
    new internationalFlightModel({
        addedTime:new Date().toDateString(),
        dateTime:dateTime ,
        tailNumber:tailNumber,
        operator:operator ,
        icao:icao, 
        aircraft:aircraft ,
        callsign:callsign, 
        origin:origin , 
        destination:destination ,
        entryWayPoint:entryWayPoint , 
        exitWayPoint:exitWayPoint,
    }).save()
    .then(flight=>{
        res.status(200).json({message:"International flight Created ", flight:flight})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
}


const getInternationalFlight= (req, res)=>{
    internationalFlightModel.find()
    .then(flights=>{
        res.status(200).json({flight:flights})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"server error occurd"})
    })
}

const editInternationalFlight = (req, res)=>{
    let {dateTime, tailNumber,operator,icao,aircraft,callsign,origin,destination,entryWayPoint,exitWayPoint}= req.body
    if(!req.params.id){
        return res.status(400).json({message:"No id flight founded in params"})
    }
    internationalFlightModel.findByIdAndUpdate(req.params.id)
    .then(flight=>{
        dateTime?flight.dateTime=dateTime:''
        tailNumber?flight.tailNumber= tailNumber:''
        operator?flight.operator=operator:''
        icao?flight.icao=icao:'' 
        aircraft?flight.aircraft=aircraft:''
        callsign?flight.callsign=callsign:'' 
        origin?flight.origin=origin:''
        destination?flight.destination=destination:''
        entryWayPoint?flight.entryWayPoint=entryWayPoint:''
        exitWayPoint?flight.exitWayPoint=exitWayPoint:''
        flight.save()
        .then(flight=>{
            res.status(200).json({message:"Flight updated Success !! ", flight:flight})
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({message:"Server error occurd"})
        })
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
    
}

const deleteInternationalFlight=(req, res)=>{
    internationalFlightModel.findByIdAndDelete(req.params.id)
    .then(flight=>{
        if(!flight){
            return res.status(400).json({message:"Flight not exist"})
        }
        return res.status(200).json({message:"Flight deleted !"})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
}




const createDomesticFlight = (req, res)=>{
    console.log(req.body)
    let verify= flightValidator.internationalFlightValidator(req.body)
    let {dateTime,tailNumber,operator,icao,aircraft,callsign,origin,destination,entryWayPoint,exitWayPoint}= req.body
    if(!verify.isValid){
        return res.status(400).json( verify.err)
    }
    new domesticFlightModel({
        addedTime:new Date().toDateString(),
        dateTime:dateTime,
        tailNumber:tailNumber,
        operator:operator,
        icao:icao,
        aircraft:aircraft,
        callsign:callsign,
        origin:origin,
        destination:destination,
    }).save()
    .then(flight=>{
        res.status(200).json({message:"Domestic flight Created ", flight:flight})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
}



const getDomesticFlight= (req, res)=>{
    domesticFlightModel.find()
    .then(flights=>{
        res.status(200).json(flights)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"server error occurd"})
    })
}

const editDomesticFlight = (req, res)=>{
    let {dateTime, tailNumber,operator,icao,aircraft,callsign,origin,destination,entryWayPoint,exitWayPoint}= req.body
    if(!req.params.id){
        return res.status(400).json({message:"No id flight founded in params"})
    }
    domesticFlightModel.findByIdAndUpdate(req.params.id)
    .then(flight=>{
        tailNumber?flight.tailNumber=tailNumber:''
        dateTime?flight.dateTime=dateTime:''
        operator?flight.operator=operator:''
        icao?flight.icao=icao:''
        aircraft?flight.aircraft=aircraft:''
        callsign?flight.callsign=callsign:''
        origin?flight.origin=origin:''
        destination?flight.destination=destination:''
        entryWayPoint?flight.entryWayPoint=entryWayPoint:''
        exitWayPoint?flight.exitWayPoint=exitWayPoint:''
        flight.save()
        .then(flight=>{
            res.status(200).json({message:"Flight updated Success !! ", flight:flight})
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({message:"Server error occurd"})
        })
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
    
}

const deleteDomesticFlight=(req, res)=>{
    domesticFlightModel.findByIdAndDelete(req.params.id)
    .then(flight=>{
        if(!flight){
            return res.status(400).json({message:"Flight not exist"})
        }
        return res.status(200).json({message:"Flight deleted !"})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
}



const createInvoice = (req, res)=>{
    let verify= flightValidator.invoiceValidator(req.body)
    let {startDate, endDate , operator}= req.body
    if(!verify.isValid){
        return res.status(400).json(verify.err)
    }
    new invoiceModel ({
        addedTime:new Date().toDateString(),
        startDate,
        endDate,
        operator
    }).save()
    .then(invoice=>{
        res.status(200).json({message:"Invoice  Created Successfull  ", invoice:invoice})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
}



const getAllInvoice= (req, res)=>{
    invoiceModel.find()
    .then(invoice=>{
        res.status(200).json(invoice)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"server error occurd"})
    })
}

const editInvoice = (req, res)=>{
    
    let verify= flightValidator.invoiceValidator(req.body)
    let {startDate, endDate , operator}= req.body
    if(!verify.isValid){
        return res.status(400).json({message:"Validation failed", error:verify.err})
    }
    invoiceModel.findByIdAndUpdate(req.params.id)
    .then(invoice=>{
        invoice.startDate=startDate
        invoice.endDate=endDate
        invoice.operator=operator
        invoice.save()
        .then(invoice=>{
            res.status(200).json({message:"Invoice updated Success !! ", invoice:invoice})
        })
        .catch(err=>{
            console.log(err)
            return res.status(500).json({message:"Server error occurd"})
        })
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
    
}

const deleteInvoice=(req, res)=>{
    invoiceModel.findByIdAndDelete(req.params.id)
    .then(Invoice=>{
        if(!Invoice){
            return res.status(400).json({message:"Invoice not exist"})
        }
        return res.status(200).json({message:"Invoice deleted !"})
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})
    })
}


const findByID= (req ,res)=>{
    internationalFlightModel.findById(req.params.id)
    .then(internationalFlight=>{
        if(internationalFlight){        
            return res.status(200).json(internationalFlight)
        }
        if(!internationalFlight){
            domesticFlightModel.findById(req.params.id)
            .then(domesticFlight=>{
                if(domesticFlight){
                    return res.status(200).json(domesticFlight)
                }
                if(!domesticFlight){
                    invoiceModel.findById(req.params.id)
                    .then(invoice=>{
                        if(invoice){
                            return res.status(200).json(invoice)
                        }
                        if(!invoice){
                            return res.status(400).json({message:"Not found"})
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                        return res.status(500).json({message:"Server error occurd"})
                    })
                }
            })
            .catch(err=>{
                console.log(err)
                return res.status(500).json({message:"Server error occurd"})
            })
        }
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({message:"Server error occurd"})

    })
}


 
module.exports={
    createInternationalFlight,
    editInternationalFlight,
    deleteInternationalFlight,
    getInternationalFlight,

    createDomesticFlight,
    editDomesticFlight,
    deleteDomesticFlight,
    getDomesticFlight,

    createInvoice,
    editInvoice , 
    deleteInvoice,
    getAllInvoice

    ,findByID

}