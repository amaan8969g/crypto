var btc= document.getElementById("dogecoin");
var btc= document.getElementById("ethereum");
var btc= document.getElementById("bitcoin");
var setting ={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(setting).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereumcoin.usd;
    doge.innerHTML=response.dogecoin.usd;

});
