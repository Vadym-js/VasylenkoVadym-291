let month = window.prompt("День тижня",[1]);
if (month){
    if (month == 1){
        alert("Понеділок");
    }
    if (month == 2){
        alert("Вівторок");
    }
    if (month == 3){
        alert("Середа");
    }
    if (month == 4){
        alert("Четвер");
    }
    if (month == 5){
        alert("П'ятниця");
    }
    if (month == 6){
        alert("Субота");
    }
    if (month == 7){
        alert("Неділя");
    }
    else if (month < 1 || month > 7)
        alert("Такого дня немає")
}

