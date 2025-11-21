document.addEventListener("DOMContentLoaded", ()=>{
    const body = document.querySelector('body')
    let themeBtn = document.getElementById("navbar-item-theme");
    let images = document.querySelectorAll('img');
    let emojis = document.querySelectorAll('.emoji')
    let darkTheme = String(localStorage.getItem("darkTheme"));
  
    if(darkTheme == null) darkTheme = false;
    function applyLightTheme()
    {
        themeBtn.classList.add('dark-mode-toggled')
        images.forEach((image)=>{
            image.classList.add('dark-mode-toggled')
        })
        emojis.forEach((image)=>{
            image.classList.add('dark-mode-toggled')
        })

        localStorage.setItem("darkTheme", false)
        themeBtn.innerHTML = "🌙"
    }
    function applyDarkTheme()
    {
        themeBtn.classList.remove('dark-mode-toggled')
            images.forEach((image)=>{
                image.classList.remove('dark-mode-toggled')
            })
            emojis.forEach((image)=>{
                image.classList.remove('dark-mode-toggled')
            })
            localStorage.setItem("darkTheme", true)
            themeBtn.innerHTML = "☀️"

    }
    if(darkTheme == "true")
    {
        applyDarkTheme()
    }
    else
    {
        body.classList.toggle('invert')
        applyLightTheme()
    }
    themeBtn.addEventListener("click", ()=>{
        console.log(images)
        body.classList.toggle('invert')
        if (body.classList.contains('invert'))
        {
            applyLightTheme()
        }
        else
        {
           applyDarkTheme()
        }

    })


   
})