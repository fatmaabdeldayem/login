var logbtn=document.querySelector(".enter")
var welcomPart=document.querySelector(".welcom")
var loginPart=document.querySelector(".login-sys")
var signupPart=document.querySelector(".sign-up")
var outbtn=document.querySelector(".outbtn")
var signupLink=document.querySelector(".login-sys span")
var signinLink=document.querySelector(".sign-up span")
var userEmail=document.querySelector(".login-sys [type='email']")
var userPass=document.querySelector(".login-sys [type='password']")
var signuserEmail=document.querySelector(".sign-up [type='email']")
var signuserPass=document.querySelector(".sign-up [type='password']")
var signuserName=document.querySelector(".sign-up [type='text']")
var signbtn=document.querySelector(".sign-up button")
var alrtSignup=document.querySelector(".sign-up p")
var alrtLogin=document.querySelector(".login-sys p")
var alrtRepeatEmail=document.querySelector(".alrt-repeat-email")
var successSignup=document.querySelector(".sucss")
var txtWelcom=document.querySelector(".txt-welcom")
var lognAlrt=document.querySelector(".lognalrt")
var arrusers=[]

var pattern=/^.+$/
if(localStorage.getItem("users")){
    productlist=JSON.parse(localStorage.getItem("users"))
   
}
signupLink.addEventListener('click',function(){
signupPart.classList.remove('d-none')
loginPart.classList.add('d-none')
if(!successSignup.classList.contains("d-none")){
    successSignup.classList.add("d-none")
}
if(!alrtRepeatEmail.classList.contains("d-none")){
    alrtRepeatEmail.classList.add("d-none")
}
if(!alrtSignup.classList.contains("d-none")){
    alrtSignup.classList.add("d-none")
}

})
signinLink.addEventListener('click',function(){
signupPart.classList.add('d-none')
loginPart.classList.remove('d-none')

})
signbtn.addEventListener('click',function(){
   
    var users={
        name:signuserName.value,
        pass:signuserPass.value,
        email:signuserEmail.value
    }
    var repeatEmail=[]
    if(arrusers.length>0){
         repeatEmail=arrusers.filter((element)=>{
           
             return users.email==element.email
        })
    }
    
   
    
   
   if(!pattern.test(users.name) || !pattern.test(users.email) || !pattern.test(users.pass)){
    if(!successSignup.classList.contains("d-none")){
        successSignup.classList.add("d-none")
    }
    if(!alrtRepeatEmail.classList.contains("d-none")){
        alrtRepeatEmail.classList.add("d-none")
    }
    
    alrtSignup.classList.remove("d-none")

   }
   else if(repeatEmail.length>0){
    if(!successSignup.classList.contains("d-none")){
        successSignup.classList.add("d-none")
    }
    if(!alrtSignup.classList.contains("d-none")){
        alrtSignup.classList.add("d-none")
    }
    alrtRepeatEmail.classList.remove("d-none")
   }
   else{
    if(!alrtSignup.classList.contains("d-none")){
        alrtSignup.classList.add("d-none")
    }
    if(!alrtRepeatEmail.classList.contains("d-none")){
        alrtRepeatEmail.classList.add("d-none")
    }
     successSignup.classList.remove("d-none")
    arrusers.push(users)
    localStorage.setItem("users",JSON.stringify(arrusers))
   
   }
   signuserName.value=''
   signuserEmail.value=''
   signuserPass.value=""
   
})

console.log(arrusers);


logbtn.addEventListener('click',function(){
    
    if(!pattern.test(userEmail.value)|| !pattern.test(userPass.value)){
        lognAlrt.classList.remove("d-none")
    }
   
    for(let i=0;i<arrusers.length;i++){
        if(arrusers[i].email==userEmail.value && arrusers[i].pass==userPass.value){
             loginPart.classList.add("d-none")
             welcomPart.classList.remove("d-none")
             let temp=''
             temp+=`<h1 class="w-50 py-5  shadow-lg h-25">Welcome `+arrusers[i].name+`</h1>`
             txtWelcom.innerHTML=temp
        }
        else{
           
            alrtLogin.classList.add("d-none")
        }
    }
    



})
























outbtn.addEventListener('click',function(){
loginPart.classList.remove("d-none")
welcomPart.classList.add("d-none")


})