
    let nevszoveg =  document.getElementById("ertek1").value;
    let termekszoveg = document.getElementById("ertek2").value;
    let darabszoveg = document.getElementById("ertek3").value;
    let muv = document.getElementById("muvelet").value;
    let eredmeny = 0;
    let kiiras = document.getElementById("kiiras");

    
    let x = parseInt(termekszoveg);
    let y = parseInt(darabszoveg);

    if (muv === "*") {
        eredmeny = x * y;
    }
     
    