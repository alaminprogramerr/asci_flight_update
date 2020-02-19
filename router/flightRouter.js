const flightRouter = require('express').Router()
const flightControler = require('../controler/flightControler')

// international flight 
flightRouter.post('/api/create-international-flight' ,flightControler.createInternationalFlight)
flightRouter.post('/api/edit-international-flight/:id' ,flightControler.editInternationalFlight)
flightRouter.get('/api/delete-international-flight/:id' ,flightControler.deleteInternationalFlight)
flightRouter.get('/api/get-international-flight' ,flightControler.getInternationalFlight)

// domestic  flight
flightRouter.post('/api/create-domestic-flight' ,flightControler.createDomesticFlight )
flightRouter.post('/api/edit-domestic-flight/:id' ,flightControler.editDomesticFlight)
flightRouter.get('/api/delete-domestic-flight/:id' ,flightControler.deleteDomesticFlight)
flightRouter.get('/api/get-domestic-flight' ,flightControler.getDomesticFlight)



// domestic  flight
flightRouter.post('/api/create-invoice' ,flightControler.createInvoice )
flightRouter.post('/api/edit-invoice/:id' ,flightControler.editInvoice)
flightRouter.get('/api/delete-invoice/:id' ,flightControler.deleteInvoice)
flightRouter.get('/api/get-allInvoice' ,flightControler.getAllInvoice)


flightRouter.get('/api/findByID/:id' ,flightControler.findByID)


module.exports=flightRouter