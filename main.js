function lab(an,av,co){
    var ele = document.createElement("label");
    ele.setAttribute(an,av);
    ele.innerHTML = co;
    return ele;

}
function br(){
    var br = document.createElement("br");
    return br;
}

function inp(an1,av1,an2,av2){
    var ele = document.createElement("input");
    ele.setAttribute(an1,av1);
    ele.setAttribute(an2,av2);
    return ele;
    }

function cb(bn,bv,bn2,bv2){
    var ele = document.createElement("input");
    ele.setAttribute(bn,bv);
    ele.setAttribute(bn2,bv2);
    return ele;
}

/* function extract(id){
    var ele = document.getElementById(id).value;
    return ele;
    
}

function divs(name,val){
    var ele = document.createElement("div");
    ele.innerHTML = `${name} : ${val}`
    return ele;
} */

var head = document.createElement("h1");
head.innerHTML = "Form Submission :";
var l1 = lab("for","fir","FirstName :");
var b1 = br();
var i1 = inp("type","text","id","fir");
var b2 = br();

var l2 = lab("for","la","LasttName :");
var b3 = br();
var i2 = inp("type","text","id","la");
var b4 = br();

var l3 = lab("for","ad","Address 1 :");
var b5 = br();
var i3 = inp("type","text","id","ad");
var b6 = br();

var l4 = lab("for","ad2","Address 2 :");
var b7 = br();
var i4 = inp("type","text","id","ad2");
var b8 = br();

var l5 = lab("for","pin","PIN :");
var b9 = br();
var i5 = inp("type","text","id","pin");
var b10 = br();

var l6 = lab("for","gen","Gender");
var b11 = br();

var i7 = document.createElement("input");
i7.setAttribute("type","radio");
i7.setAttribute("name","gender");
i7.setAttribute("id","male");
var l7 = lab("for","male","Male")

var i8 = document.createElement("input");
i8.setAttribute("type","radio");
i8.setAttribute("name","gender");
i8.setAttribute("id","female");
var l8 = lab("for","female","Female");

var para = document.createElement("p");
para.innerHTML = "Choice of Food : <i>(must choose atleast 2 out of 5 options)</i>";
var c1 = cb("type","checkbox","id","food");
var ch1 = lab("for","food","North Indian");
var ba = br();
var c2 = cb("type","checkbox","id","food");
var ch2 = lab("for","food","South Indian");
var bb = br();
var c3 = cb("type","checkbox","id","food");
var ch3 = lab("for","food","Chinese");
var bc = br();
var c4 = cb("type","checkbox","id","food");
var ch4 = lab("for","food","Japanese");
var bd = br();
var c5 = cb("type","checkbox","id","food");
var ch5 = lab("for","food","SeaFood");
var be = br();
var bz = br();

var state = lab("for","st","State :");
var bf = br();
var si = document.createElement("input");
si.setAttribute("type","text");
si.setAttribute("placeholder","state")
si.setAttribute("id","st");
var bg = br();

var country = lab("for","co","Country :");
var bh = br();
var ci = document.createElement("input");
ci.setAttribute("type","text");
ci.setAttribute("placeholder","country")
ci.setAttribute("id","co");
var bj = br();
var sub = document.createElement("button");
sub.setAttribute("type","button");
sub.setAttribute("onclick","data()");
sub.innerHTML = "Submit";

function display(){
    var ele = document.getElementsByName("gender")
    for(var i=0;i<ele.length;i++){
        if(ele[i].checked){
           return ele[i].id;
        }
    }
}

function address(){
    var ele = document.getElementById("ad").value;
    var ele2 = document.getElementById("ad2").value;
    return `${ele},${ele2}`;
}

    function data(){
        var fd = document.getElementById("fir").value;
        tb1.innerHTML = fd;
        var ld = document.getElementById("la").value;
        tb2.innerHTML = ld;
        var ad1 = address();
        tb3.innerHTML = ad1;
        
        var pin = document.getElementById("pin").value;
        tb5.innerHTML = pin;
        var gen = display();
        tb6.innerHTML = gen;
        var state = document.getElementById("st").value;
        tb8.innerHTML = state
        var country = document.getElementById("co").value;
        console.log(country);
        tb9.innerHTML = country;
 }
document.body.append(head,l1,b1,i1,b2,l2,b3,i2,b4,l3,b5,i3,b6,l4,b7,i4,b8,l5,b9,i5,b10,l6,b11,i7,l7,i8,l8,para,c1,ch1,ba,c2,ch2,bb,c3,ch3,bc,c4,ch4,bd,c5,ch5,be,bz,state,bf,si,bg,country,bh,ci,bj,sub);

function tr(){
    var ele = document.createElement("tr");
    return ele;
}

function th(tn,at,av,c){
    var ele = document.createElement(tn);
    ele.setAttribute(at,av);
    ele.innerHTML = c;
    return ele;
}

function td(tn,val){
    var ele = document.createElement(tn);
    ele.id = val;
    return ele;
}

var table = document.createElement("table");
        table.className = "table";
        var thead = document.createElement("thead");
        thead.className = "thead-dark"
        var tr1 = tr();
        var th1 = th("th","scope","col","First Name");
        var th2 = th("th","scope","col","Last Name");
        var th3 = th("th","scope","col","Address");
        
        var th5 = th("th","scope","col","Pincode");
        var th6 = th("th","scope","col","Gender");
        
        var th8 = th("th","scope","col","State");
        var th9 = th("th","scope","col","Country");
        tr1.append(th1,th2,th3,th5,th6,th8,th9);
        thead.append(tr1);

        var tbody = document.createElement("tbody");
        var tr2 = tr();
        var tb1 = td("td","fnc");
        var tb2 = td("td","lnc");
        var tb3 = td("td","adc");
        
        var tb5 = td("td","pinc");
        var tb6 = td("td","genc");
        
        var tb8 = td("td","state");
        var tb9 = td("td","country");

  
        tr2.append(tb1,tb2,tb3,tb5,tb6,tb8,tb9);
        tbody.append(tr2);
        table.append(thead,tbody);
        document.body.append(table);