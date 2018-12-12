

var paypal = require('paypal-rest-sdk');
var openIdConnect = paypal.openIdConnect;
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'openid_client_id': 'AQdSGiwwbkBYeHQrkEHGPgXU_xCj3qebgn0x1Vf0jC49cowAbTZE1xlxGukvn-jDty4SsN7ocNd6Lq6X',
    'openid_client_secret': 'EI0DNfoWCMdtGkKAtgWgAUP92QdawGR6G2t4ujN3clPyZDY_1Z2IChUgNvz93un4rNtAQ3dzKNQRWZrp',
    'openid_redirect_uri' : 'http://localhost:4200/paypal-identity'
});
console.log(openIdConnect.authorizeUrl({'scope': 'openid profile'}));
// With Authorizatiion code
openIdConnect.tokeninfo.create('C21AAFJtEUpgafYUx32XJnRXaB5WajCvPQBA3IL0UhJp4yrpYDJ8PiaZQWXz47Bsoim--k732ENnsC1rpNczAc56op3SP00-g', function (error, tokeninfo) {
    if (error) {
        console.log(error);
    } else {
        openIdConnect.userinfo.get(tokeninfo.access_token, function (error, userinfo) {
            if (error) {
                console.log(error);
            } else {
                console.log(tokeninfo);
                console.log(userinfo);
                
                // Logout url
                //console.log(openIdConnect.logoutUrl({ 'id_token': tokeninfo.id_token }));
            }
        });
    }
});
