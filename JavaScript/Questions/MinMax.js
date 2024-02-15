const Minno = () => {
    let minno = 11
    for(let i =0; i < 1000; i++) {
     
        if( i % 11 == 0) {
            if(i > minno) {
                minno = i;
                console.log(minno);
                break;
            }
        }
    }
}

const Maxno = () => {
    let maxno = 1000;
    for(let i = 1000; i > 0 ; i--) {
       
        if(i % 11 == 0){
            
            if(i < maxno) {
                maxno = i;
                console.log(maxno);
                break;
            }
        }
        
    }

}


Minno();
Maxno();
