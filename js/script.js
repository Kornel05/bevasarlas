
    let nevszoveg =  document.getElementById("ertek1").value;
    let termekszoveg = document.getElementById("ertek2").value;
    let darabszoveg = document.getElementById("ertek3").value;
    let muv = document.getElementById("muvelet");
    let eredmeny = 0;
    let kiiras = document.getElementById("kiiras");

    
    let x = parseInt(termekszoveg);
    let y = parseInt(darabszoveg);

    if (muv === "*") {
        eredmeny = x * y;
        document.getElementById("ertek1").focus();

        kiiras.innerText = `${x} ${muv} ${y} = ${eredmeny}`;
    console.log(eredmeny);

     
    document.getElementById("ertek1").value = ""; 
    document.getElementById("ertek2").value = ""; 
    document.getElementById("ertek3").value = ""; 
    }
    document.getElementById("ertek1").focus();
    