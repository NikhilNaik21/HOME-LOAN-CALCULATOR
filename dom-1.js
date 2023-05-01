function myfunction() {
    //document = entire web page
   // console.log("javascript is here....");
   // console.log("cccc",document);
   // console.log(typeof document);
    //select element by ID
    console.log(document.getElementById("x1"));
    //select element by id and use its value
    var amount = document.getElementById("x1").value
    //console.log(amount);
    var roi = document.getElementById("x2").value
    //console.log(roi);
    var duration = document.getElementById("x3").value
   // console.log(duration);

   console.log(typeof amount);
   var p =parseInt(amount)     //converting string to int
   var r =parseInt(roi)
   var n =parseInt(duration)     //input text box takes values as string so we have to convert it to int or float as per requirement

   r=r/12/100
   n=n*12
   var emi = p*r*(1+r)**n/((1+r)**n-1)  //home loan calculation formula
   emi =Math.round(emi)                  //rounding off
   console.log(emi);
    //console.log(document.getElementById("m1"));
    document.getElementById("m1").innerHTML=` &#8377; ${ emi}`  //emi

   var total_value = emi*n;                                           //total value emi * no.of months
   document.getElementById("m2").innerHTML=` &#8377; ${ total_value}`

   var interest = total_value -p;                         // total value - principal amt
   document.getElementById("m3").innerHTML=` &#8377; ${ interest}`

   var actual = amount;                                             //principal amt
   document.getElementById("m4").innerHTML=` &#8377; ${ actual}`
}