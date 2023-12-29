document.getElementById('btnwidrow').addEventListener('click',function(){

  const deposti = document.getElementById('depositfield');
  const totaldeposite = deposti.value;
  const depostiammount = parseFloat (totaldeposite)
  console.log( typeof (depostiammount));


  const privioustk = document.getElementById('total-deposite');
  const totalprivious = privioustk.innerText;
  const priviosammount = parseFloat (totalprivious);
  console.log(typeof(priviosammount));

  const totalammount = depostiammount + priviosammount;
  privioustk.innerText = totalammount;
  

  const blanace = document.getElementById('total-blanace')
  const totalblanace = blanace.innerText;
  const blanaceammount = parseFloat (totalblanace)

  const priviousblanace = depostiammount + blanaceammount;
  blanace.innerText = priviousblanace;
  priviousblanace.value = "";

})
document.getElementById('widrow-btn').addEventListener('click',function(){
  

  const widrow = document.getElementById('widrowfield');
  const priviouswidrow = widrow.value;
  const totalwidrow = parseFloat (priviouswidrow)
  console.log(typeof(totalwidrow));

  const widrowbox = document.getElementById('total-widrow');
  const widrowField = widrowbox.innerText;
  const totalwidrowfild = parseFloat (widrowField)
  console.log(typeof (totalwidrowfild));


  const result = totalwidrow + totalwidrowfild;
  widrowbox.innerText = result;


  const totalblanacefield = result - priviousblanace;
  result.innerText = totalblanacefield;
})
      

document.getElementById('book').addEventListener('click', function(){

  alert (" see more not have any information")
  
})
            
     