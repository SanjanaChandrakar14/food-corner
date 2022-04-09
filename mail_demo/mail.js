const nodemailer =  require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser")
const items = require("../mail_demo/item.json")
const app = express();
const fs = require("fs");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });;
  app.use(express.json());
  let item;
  let quantity;
  let price;
  let useremail;
  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'foodcornerapp22@gmail.com',
        pass: 'foodcorner'
    }
});
app.post("/generate", (req, res) => {
 
    email = req.body.email;
    password = req.body.password;
    let mailDetails = {
        from: 'foodcornerapp22@gmail.com',
        to: email,
        subject: 'Generate Password',
        text: " Hello , your generated new password is"+password,

    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(' Error Occurs ',err);
        } else {
            console.log(' Email sent successfully ');
        }
    });
  res.send("Received");

});
app.post("/mailserver", (req, res) => {
    console.log(" here ");
    cart = req.body.cart;
    console.log(cart);
    qrCode = req.body.qrCode;
    console.log(qrCode);
    email = req.body.email;
    console.log(email);
    let stringDetails = "";
    cart.cartList.forEach(element => {
        stringDetails +=(element.name+ " " +element.units+ " " +element.price+ 
        "\n")
    });



    stringDetails +=(" Total price "+cart.total);
    let mailDetails = {
        from: 'foodcornerapp22@gmail.com',
        to: email,
        subject: 'Order Details',
        text: " Hi, Thank you for ordering from e-FoodCorner. Your order details are\n"+stringDetails+"\n Also find the attached qrcode\n",
        attachments:[
            {   // encoded string as an attachment
                filename: 'qrcode.jpg',
                content: qrCode.split("base64,")[1],
                encoding: 'base64'
              }
        ]
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(' Error Occurs ',err);
        } else {
            console.log(' Email sent successfully ');
        }
    });
  res.send(" Received ");

});
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));  



  
