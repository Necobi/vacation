document.getElementById("vacation-form").onsubmit = () => {
    let isValid = true;
//alert("hi");
    clearErrors();

    let dest = document.getElementById("destination").value;
    if(dest == "none"){
        document.getElementById("err-destination").style.display = "block";
        isValid = false;
    }

    let num_of_trav= document.getElementById("travelers").value;
    if(num_of_trav<1){
        document.getElementById("err-num").style.display="block";
            isValid=false;
        
    }

    




    return isValid;
};
function clearErrors(){
        let errors= document.getElementsByClassName("err");
        for(let i=0; i<errors.length; i++){
            errors[i].style.display = "none";
        }
    }
