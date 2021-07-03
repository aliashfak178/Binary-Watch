// B - Houer
const H32 = document.querySelector('#H32');
const H16 = document.querySelector('#H16');
const H8 = document.querySelector('#H8');
const H4 = document.querySelector('#H4');
const H2 = document.querySelector('#H2');
const H1 = document.querySelector('#H1');

// B - Minutes

const M32 = document.querySelector('#M32');
const M16 = document.querySelector('#M16');
const M8 = document.querySelector('#M8');
const M4 = document.querySelector('#M4');
const M2 = document.querySelector('#M2');
const M1 = document.querySelector('#M1');

// B - Seconds

const S32 = document.querySelector('#S32');
const S16 = document.querySelector('#S16');
const S8 = document.querySelector('#S8');
const S4 = document.querySelector('#S4');
const S2 = document.querySelector('#S2');
const S1 = document.querySelector('#S1');

// Get Analog Hour, Second, Minutes

const Hour = document.querySelector('#Hour');
const Min = document.querySelector('#Min');
const Sec = document.querySelector('#sec');

function UnCheckedHour()
{
    // Unchecked Hour
    H32.checked = false;
    H16.checked = false;
    H8.checked = false;
    H4.checked = false;
    H2.checked = false;
    H1.checked = false;

    
}
function UnCheckedMinutes()
{
     // Unchecked Minutes
     M32.checked = false;
     M16.checked = false;
     M8.checked = false;
     M4.checked = false;
     M2.checked = false;
     M1.checked = false;
}
function UnCheckedSeconds()
{
    // Unchecked Seconds
    S32.checked = false;
    S16.checked = false;
    S8.checked = false;
    S4.checked = false;
    S2.checked = false;
    S1.checked = false;
}

function SetHouer(hour)
{
    UnCheckedHour();
    if(hour >= 32)
    {
        H32.checked = true;
        hour = hour - 32;
    }
    if(hour >= 16)
    {
        H16.checked = true;
        hour = hour - 16;
    }
    if(hour >= 8)
    {
        H8.checked = true;
        hour = hour - 8;
    }
    if(hour >= 4)
    {
        H4.checked = true;
        hour = hour - 4;
    }
    if(hour >= 2)
    {
        H2.checked = true;
        hour = hour - 2;
    }
    if(hour >= 1)
    {
        H1.checked = true;
        hour = hour - 1;
    }  
}
function SetMinutes(minu)
{
    UnCheckedMinutes();
    if(minu >= 32)
    {
        M32.checked = true;
        minu = minu - 32;
    }
    if(minu >= 16)
    {
        M16.checked = true;
        minu = minu - 16;
    }
    if(minu >= 8)
    {
        M8.checked = true;
        minu = minu - 8;
    }
    if(minu >= 4)
    {
        M4.checked = true;
        minu = minu - 4;
    }
    if(minu >= 2)
    {
        M2.checked = true;
        minu = minu - 2;
    }
    if(minu >= 1)
    {
        M1.checked = true;
        minu = minu - 1;
    } 
}
function SetSeconds(sec)
{
    UnCheckedSeconds();
    if(sec >= 32)
    {
        S32.checked = true;
        sec = sec - 32;
    }
    if(sec >= 16)
    {
        S16.checked = true;
        sec = sec - 16;
    }
    if(sec >= 8)
    {
        S8.checked = true;
        sec = sec - 8;
    }
    if(sec >= 4)
    {
        S4.checked = true;
        sec = sec - 4;
    }
    if(sec >= 2)
    {
        S2.checked = true;
        sec = sec - 2;
    }
    if(sec >= 1)
    {
        S1.checked = true;
        sec = sec - 1;
    } 
}
function Show_Digital_Time(current_houer,current_minute,current_second)
{
    if(current_houer < 10 || current_minute < 10 || current_second < 10)
    {
        if(current_houer < 10)
            Hour.innerText =  "0"+current_houer;
        if(current_minute < 10)
            Min.innerText = "0"+current_minute;
        if(current_second < 10)
        Sec.innerText = "0"+current_second;
    }
    else
    {
        Hour.innerText = current_houer;
        Min.innerText = current_minute;
        Sec.innerText = current_second;
    }
}
function Show_Time()
{
    // Showing Digital Clock
    var D=new Date();
    let current_houer=D.getHours();
    let current_minute=D.getMinutes();
    let current_second=D.getSeconds();

    // showing Digital Clock
    Show_Digital_Time(current_houer,current_minute,current_second);

    // Showing Binary Clock
    SetHouer(current_houer);
    SetMinutes(current_minute);
    SetSeconds(current_second);
}

setInterval("Show_Time()",1000);