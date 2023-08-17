
function getSeason(date){
    const month = date.getMonth() + 1;

    if (month >= 3 && month <= 5){
        return 'Primevera';
    } else if (month >= 6 && month <= 8){
        return 'Verão';
    } else if (month >= 9 && month <= 11){
        return 'Outono';
    } else {
        return 'Inverno';
    }
}

function showSeason() {
    const dateInput = document.getElementById('dateInput');
    const resultElement = document.getElementById('result');   

     const inputDate = new Date(dateInput.value);
     const season = getSeason(inputDate);
     
     resultElement.textContent = `A estação do ano para ${inputDate.toDateString()} é ${season}.`;
}

     
   