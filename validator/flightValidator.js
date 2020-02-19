const internationalFlightValidator  = (flightInfo)=>{
    let err= {}
    if(!flightInfo.dateTime){
        err.dateTime="Date and Time required "
    }
    if(!flightInfo.tailNumber){
        err.tailNumber="Tail number and Time required "
    }
    return {
        err:err,
        isValid:Object.keys(err).length==0
    }
}
const invoiceValidator  = (invoiceInfo)=>{
    let err= {}
    if(!invoiceInfo.startDate){
        err.startDate=" Start Date is required "
    }
    if(!invoiceInfo.endDate){
        err.endDate="End date is required "
    }
    if(!invoiceInfo.operator){
        err.operator="Operator name is  required "
    }
    return {
        err:err,
        isValid:Object.keys(err).length==0
    }
}
module.exports={
    internationalFlightValidator
    ,invoiceValidator
}