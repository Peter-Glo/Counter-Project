var date_string;
function formatAMPM() {
    var der = new Date();
    var DD = ("0" + der.getDate()).slice(-2);
    var MM = ("0" + (der.getMonth() + 1)).slice(-2);
    var YYYY = der.getFullYear();
    var hh = ("0" + der.getHours()).slice(-2);
    var mm = ("0" + der.getMinutes()).slice(-2);
    var ss = ("0" + der.getSeconds()).slice(-2);
    date_string = YYYY + "-" + MM + "-" + DD + " "+ hh + ":" + mm + ":" + ss;
    document.getElementById("timing").innerHTML = date_string;
    setTimeout('formatAMPM()',1000)
}
formatAMPM();
  $(function(){
		   $('#menu1').hide();
			$('#menu').on('click', function(){
				$('#sidebar').css('width','230px')
				$('#sidebar').css('display','block');
				$('#menu').hide();
				$('#menu1').show();
        })
			$('#menu1').on('click', function(){
				$('#sidebar').hide();
				$('#sidebar').css('width','0')
				$('#menu').show();
				$('#menu1').hide();
    })
}())
function start(){
$('#welcomePage').fadeOut(2000)
document.getElementById('welcomePage').style.display = "none";
//	$('#clearAll').css('display','none');
setTimeout('logIn()',1000)
}
setTimeout('start()',300);
function logIn (){
    $('#mainPage').fadeIn(2000)
document.getElementById('mainPage').style.display = "";
document.getElementById('add').style.display = "";
document.getElementById('menuBar').style.display = "";
}
// about page begins ....
$(function(){
	$('#aboutButton').on('click',function(){
		$('#aboutPage').fadeIn(1000);
		$('#mainPage,#calculatePage,#histPage').css('display','none');
		$('#aboutPage').css('display','block');
		 $('#sidebar').hide(200);
		$('#add').css('display','none');
	})
})
// about page ends ....

// exit page starts from here.....

$(function(){
	$('#exit').on('click',function(){
		$('#exitPage').fadeIn(1000);
		$('#exitPage').css('display','block');
		$('#sidebar').hide();
		$('#exitModal,#menuBar,#welcomePage,#mainPage,#aboutPage,#calculatePage,#add').css('display','none');
		$('#exampleModal').hide();
		setTimeout(bye(),2000);
	})
})
bye = () =>{
	window.close();
}
// exit page ends here.....

// History Page starts here 

$(function(){
	$('#histbtn').on('click',function(){
		$('#histPage').fadeIn(1000);
		 $('#sidebar').hide();
		$('#histPage').css('display','block');
		$('#exitPage,#exitModal,#mainPage,#aboutPage,#add,#welcomePage,#calculatePage').css('display','none');
		$('#exampleModal').hide()
		

	})


})

// History Page ends here

$(function(){
	$('#allContainer').on('click',function(){
	$('#sidebar').css('display','none')
	})
})
backToMainPage = () =>{
	$('#mainPage').fadeIn(1000);
	document.getElementById('mainPage').style.display = "";
    document.getElementById('add').style.display = "";
	$('#aboutPage').css('display','none');
	$('#histPage').css('display','none');
}

	function countMe(evt){
		inlineCheckbox1.value++;
	}
function countMe(evt){
		inlineCheckbox1.value++;
	}
function clickTocount(evt){
		inlineCheckbox2.value++;
	}
var fafa = '';

addEventListener('click', (event)=>{
	event.preventDefault();
	if( event.target.id == 'car1'){	
		fafa = '';
		fafa = 'fa fa-car';
		
	}
	if( event.target.id == 'car2'){	
		fafa = '';
		fafa = 'fa fa-bus-alt';
		
	}
	if( event.target.id == 'car3'){	
		fafa = '';
		fafa = 'fa fa-bicycle';
		
	}
	if( event.target.id == 'car4'){	
		fafa = '';
		fafa = 'fa fa-biking';
		
	}
	if( event.target.id == 'car5'){	
		fafa = '';
		fafa = 'fa fa-train';
	}
	if( event.target.id == 'car6'){	
		fafa = '';
		fafa = 'fa fa-truck ';
	}
//	console.log(JSON.stringify(event.target.className))
})

var	timpCap;

count= 1;

 function addItem(){
	 $('#myModal').modal('hide');
	 
    all = [];
	var c = Math.random();
    var s = Math.floor(c*1000);
    var v = 'ann'+ s;
    // var p=longpressCls
    var ar = document.getElementsByClassName('allcounters');
    for(var i = 0; i < ar.length;i++){
        all.push(ar[i].value);
    }
  

   var  e = itemList.value;
	defaltDiv.innerHTML += `<p><div class="input-group mb-3 rounded mt-5" id=`+v+s+`>
	<div class="input-group-prepend"><span class="input-group-text ${fafa} p-3 fa-1x text-white longpressCls" onmouseup="generalCount(`+s+`)" data-long-press-delay="2000" style="background: #0F0096 !important"> `+e+`
	</span></div><input type="number" class="form-control p-3 text-white allcounters" id=`+v+` value="0" readonly onmouseup="generalCount(`+s+`)"  data-long-press-delay="2000" style="height:73px; text-align:center; font-size:40px;background:#0F0096 !important">
	<div class="input-group-append" id=`+v+`><span class="input-group-text fa fa-minus p-3 fa-1x text-white" style="background:#0F0096 !important" onclick="subInp(`+s+`)"></span>
	<span class="input-group-text fa fa-times p-3 fa-1x text-white " style="background:#C60000 !important" onclick="generalDel(`+s+`)"></span></div></div></p>`;
    document.getElementById('defaltDiv').style.display= "block";
      
    
         for(var i = 0; i < ar.length;i++){
            ar[i].value = all[i];
		}
		itemList.value = ''; 
		myHistory();     
}   
let myHistory=()=>{
	var myall=[];
	var item=document.getElementsByClassName("myitem");
	var historyarray={
		categories:  item.value,
		timestart:date_string,
		timeend: date_string,
	}
	myall.push(myHistory);
	var l=Newcount=JSON.stringify(myall);
	console.log(historyarray);


}
function clearall(){
    defaltDiv.innerHTML = "";
    showtot.value = "";
}

calc = () =>{
	total = 0;
	var tt = document.getElementsByClassName('allcounters');
	for (let i = 0; i < tt.length; i++) {
		 total += Number(tt[i].value);		
	}
	showtot.value = total;	
}
var addInppt;
function generalCount(c){
   var addInppt = 'ann' + c;
   console.log(addInppt);
   document.getElementById(addInppt).value = Number(document.getElementById(addInppt).value)+1;
}
function generalDel(c){
   var removeAllll = 'ann' + c+c;
   console.log(removeAllll);
   document.getElementById(removeAllll).style.display = "none";

}
let subInp = c => {
   var rt = 'ann' + c;
  console.log(rt);
  var yy = document.getElementById(rt).value;
	if(yy > 0){
	document.getElementById(rt).value = Number(document.getElementById(rt).value)-1;
	}
}
let subDef =()=>{
	let bt = inlineCheckbox2.value;
	if(bt > 0){
		inlineCheckbox2.value--;
	}
}
let subDef2 =()=>{
	let bt = inlineCheckbox1.value;
	if(bt > 0){
		inlineCheckbox1.value--;
	}
}

// default delete buttons
$(function(){
	$('#del').on('click',function(){
		$('#carDiv').css('display','none');
	})
})
$(function(){
	$('#del1').on('click',function(){
		$('#bikeDiv').css('display','none');
	})
})





