document.addEventListener("DOMContentLoaded", ()=>{
    const html = document.querySelector('html')
    let themeBtn = document.getElementById("navbar-item-theme");
    let resumeBody = document.querySelector('.resume-body');
    let darkTheme = String(localStorage.getItem("darkTheme"));
   
    if(darkTheme == null) darkTheme = false;
    function applyLightTheme()
    {
        themeBtn.classList.add('dark-mode-toggled')
        resumeBody.classList.add('dark-mode-toggled')

        localStorage.setItem("darkTheme", false)
        themeBtn.innerHTML = "🌙"
    }
    function applyDarkTheme()
    {
        themeBtn.classList.remove('dark-mode-toggled')
        resumeBody.classList.remove('dark-mode-toggled')
        localStorage.setItem("darkTheme", true)
            themeBtn.innerHTML = "☀️"

    }
    if(darkTheme == "true")
    {
        applyDarkTheme()
    }
    else
    {
        html.classList.toggle('invert')
        applyLightTheme()
    }
    themeBtn.addEventListener("click", ()=>{
      
        html.classList.toggle('invert')
        if (html.classList.contains('invert'))
        {
            applyLightTheme()
        }
        else
        {
           applyDarkTheme()
        }

    })

})