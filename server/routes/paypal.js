const router = require ('express').Router()
const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox',
    'client_id': 'AZ3lYTLZa4F_vtZaPHhWtvoswQouSMZf1yoyfY4e2nGQk2dPvqZGAzIbznv8JFDXDA1WWEotF4CCQZRL',
    'client_secret': 'EItWdA3Ecd-1Qvx0TBBH86URtalpH_9hK5-f2HUiDKo-47Z7j0j59p8-Ctw5YSVIRblANrka3DBYau6J'
});

router.get('/', (req, res)=>{
    res.status(200).json({
        message : 'it works'
    });
})

router.post('/donate', (req, res)=>{
    const amount = req.body.amount;
    console.log(amount)
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:8200/paypal/sucess/"+amount,
            "cancel_url": "http://localhost:8200/paypal/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": amount,
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": amount
            },
            "description": "This is the payment description."
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            for(let i = 0; i < payment.links.length; ++i){
                if(payment.links[i].rel === 'approval_url'){
                    return res.status(201).json({
                        link : payment.links[i].href
                    });
                }
            }
        }
        res.send(500).json({
            message : 'not possible'
        })
        
    });
    
});

router.get('/sucess/:amount', (req, res)=>{
    const amount = req.params.amount;
    const payer_id = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const execute_payment_json = {
        "payer_id": payer_id,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": amount
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.redirect('http://localhost:4200')
        }
    });
})

router.get('/cancel', (req, res)=>{
    res.send('cancel');
})





module.exports = router;