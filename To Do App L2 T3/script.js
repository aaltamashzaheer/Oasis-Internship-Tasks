const input=document.querySelector(".inputFields input")
const addbtn=document.querySelector(".inputFields button")

input.onkeyup=()=>{
    let altamash=input.value;
    if (altamash.trim() !=0) {
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active");
    }
}
addbtn.onclick=()=>{
    let altamash=input.value
    let aftab =localStorage.getItem("");
    if (aftab==null) {
        listArr=[];

    }else{
        listArr=JSON.parse(aftab);
    }
    listArr.push("");
    localStorage.setItem;{"",JSON.stringify(listArr)};

}
function showtasks() {

    let aftab =localStorage.getItem("");
    if (aftab==null) {
        listArr=[];

    }else{
        listArr=JSON.parse(aftab);
    }
    let newLiTag="";
    listArr.array.forEach((element,index) => {
        newLiTag=`<li> $(element)  <span><i class="fas fa-trash"></i></span></li>`
    });
}