var text = document.querySelector('#inputText')
var win = document.querySelector('#win')
var loader = document.querySelector('.loader')
var x = ["الأول","الثاني","الثالث","الرابع"]
var i = 0
var num = 0
var submit = document.querySelector('#submit')
var winers =["zainab_ibrahim_99","sfsf_safa","ahmed","moha"]
submit.addEventListener('click',(e)=>{
    
    var str = text.value
    var final
    var str2= str.split("\n")
    // var randnum = randomIntFromInterval(0,str2.length-1)
    // final = str2[randnum]
    final = winers[num]
    
    loader.style.display = "block"
    win.style.display = "none"
    setTimeout(function(){ 
        loader.style.display = "none"
        
        // win.innerHTML = `<h3>The winer number ${i} is :</h3><h2> ${final}</h2>`
        win.innerHTML = `<h3>:الفائز ${x[i]} هو</h3><h2>${final}</h2>`
        win.style.display = "block"
        
        i++
        num++
        
     }, 3000);
     
})

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


