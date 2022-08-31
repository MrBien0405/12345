// let phone = "0123456789"
// let email = "tranbien1845@gmail.com"
// let firstandlastname = "TranVanBien"
// let password = "123123"
// let enterthepassword = "123123"
// let referralcode = "123"
let condition = form.phone.value !=="" && form.email.value !=="" && form.firstandlastname.value !== "" && form.password.value !=="" && form.enterthepassword.value !=="" && form.referralcode.value !=="";
form.onsubmit = function(event){
    event.preventDeafult();
if(condition){
    document.getElementById("sussces").innerHTML ="Không được để trống"
}
}
