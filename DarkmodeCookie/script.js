setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 1);
})

cookieMessage = () => {
    if(!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);
// ======
document.addEventListener("DOMContentLoaded", () => {

    let darkInfo;
    if (!localStorage.getItem("dark"))
        localStorage.setItem("dark", false); 
    darkInfo = JSON.parse(localStorage.getItem("dark"));

    const switchDark = () =>{
        // document.querySelector("body").classList.toggle('dark');
        // document.querySelector(".dark-mode-icon").classList.toggle('dark');
      
        // if (darkInfo){
        //     document.querySelector("body").classList.add('dark');
        //     document.querySelector(".dark-mode.icon").classList.add('dark');
        // } else {
        //     document.querySelector("body").classList.remove('dark');
        //     document.querySelector(".dark-mode.icon").classList.remove('dark');
        // }

        document.querySelector("body").classList.add('dark');
        document.querySelector(".dark-mode-icon").classList.add('dark')
    }

    const switchLight = () => {
        document.querySelector("body").classList.remove('dark');
        document.querySelector(".dark-mode-icon").classList.remove('dark')
    }


    if (darkInfo === true)
        switchDark();
    else
        switchLight();
    
    document.querySelector(".btn").addEventListener('click', () => {
        // alert("click!");

        // darkInfo = !darkInfo;
        if (darkInfo){
            darkInfo = false;
            switchLight();
        } else {
            darkInfo = true;
            switchDark();
        }
        localStorage.setItem("dark", darkInfo);
    })

})