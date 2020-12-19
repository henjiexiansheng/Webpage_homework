function check()
{
    //邮箱验证
    var email = form1.email.value;
    document.getElementById(mailin);
    if(email=="")
    {
        mailin.innerHTML = "邮箱不能为空";
        return false;
    }

    //手机验证
    var phone = form1.phone.value;
    document.getElementById(phonein);
    if(phone=="")
    {
        phonein.innerHTML = "号码不能为空";
        return false;
    }

    //登录密码验证
    var password = form1.password.value;
    document.getElementById(passin);
    if(password=="")
    {
        passin.innerHTML = "密码不能为空";
        return false;
    }    

    //昵称验证
    var name = form1.name.value;
    document.getElementById(namein);
    if(name=="")
    {
        namein.innerHTML = "邮箱不能为空";
        return false;
    }  

}

function check1()
{
    //登录账号验证
    var phone = myform.phone.value;
    document.getElementById(phonein);
    if(phone=="")
    {
        phonein.innerHTML = "邮箱不能为空";
        return false;
    }

    //登录密码验证
    var password =myform.password.value;
    document.getElementById(passin);
    if(password=="")
    {
        passin.innerHTML = "密码不能为空";
        return false;
    }    

}