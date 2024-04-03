function fun1()
    {
    var nam=form1.text1.value;
    var desi=form1.text2.value;
    var email=form1.Email.value;
    var location=form1.Location.value;
    
    if (nam=="" || desi=="" || email=="" || location==""){
        alert('Enter details');
        form1.text1.focus()
        return false
    }else{
        alert('Good')
    }
    }

function fun2(){
    var num1=eval(form1.num1.value);
    var num2=eval(form1.num2.value);
    var num3=eval(form1.num3.value);

    form1.ttlmks.value= (num1 + num2 + num3);
    form1.permks.value=( (num1 + num2 + num3)/3+'%');
}

function fun3(){
    var sal=eval(form1.num1.value);
    var per=form1.perfor.value;

    if (per=='a'){
        var bonu=sal*0.3;
        form1.bonus.value=bonu;
        form1.salary.value=sal+bonu

    }
    else if(per=='b'){
        var bonu=sal*0.1;
        form1.bonus.value=bonu;
        form1.salary.value=sal+bonu
    }
    else{
        form1.bonus.value='No Bonus'
        form1.salary.value=sal
    }
}

function fun4(){
    var q1=document.getElementsByName('q1')
    var q2=document.getElementsByName('q2')
    var marks=0

    for (i = 0; i < q1.length; i++) {
        if (q1[i].checked){
            ans=q1[i].value
            if (ans=='sp'){
                marks+=2
            }
    }}
    for (i = 0; i < q2.length; i++) {
        if (q2[i].checked){
            ans=q2[i].value
            if (ans=='Dp'){
                marks+=2
            }
    }}
    alert('you got ' +marks+ ' Marks')   
}

function fun5(){
    window.open("window.html","","height=400px width=1000px")
}