let homescore = 0
let guestscore = 0


function add1point(x){
    
        if (x.includes("home")) { 
        homescore ++; 
        document.getElementById(x).textContent = homescore;
    } else {
        guestscore ++; 
        document.getElementById(x).textContent = guestscore;
    }
}



function add2points(x){
    
        if (x.includes("home")) { 
        homescore += 2; 
        document.getElementById(x).textContent = homescore;
    } else {
        guestscore += 2; 
        document.getElementById(x).textContent = guestscore;
    }
        
}


function add3points(x){
        if (x.includes("home")) { 
    homescore += 3; 
    document.getElementById(x).textContent = homescore;
} else {
    guestscore += 3; 
    document.getElementById(x).textContent = guestscore;
}
    
}