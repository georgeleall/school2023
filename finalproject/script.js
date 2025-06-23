function display (){
    dispWin = window.open('certificate.html', 'NewWin',
        'toolbar=no,status=no,titlebar=no,width=800,height=600')

// send the name over to certificate.html
awardee = document.form1.name.value;

// reset the value
document.form1.name.value = "";

}



