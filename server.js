var express = require ( 'express' );
var app = express ();
app.listen(3000);

// the homepage welecoming massage 
app . get ( '/' , function ( req , res ) {
res . send ( ' Welecome page' );
})


//data stored into an array
let accounts =[
    { id: 1 , name: 'alex' , deposit: 5 },
    { id: 2 , name: 'sarah' , deposit: 5 },
    { id: 3 , name: 'jim' , deposit: 15 }]


//retrieve the data by id 
    app.get ( '/account' , function ( req , res ) {
        let id=req.query.id;
        for( let account of accounts ){
            if (account.id == id){
                res.json(account)
            }
        }
        })


//// convert array to linkedlist 




/// retrieve the data from linkedlist
    




        