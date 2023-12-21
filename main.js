const wrapper = document.querySelector(".wrapper")
toast = wrapper.querySelector(".toast")
wifiIcon = wrapper.querySelector(".icon")
title = wrapper.querySelector("span")
subTitle = wrapper.querySelector("p")
closeIcon = wrapper.querySelector(".close-icon")


window.onload = () => {
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
        xhr.onload = () => {
            // debug lagi
            // console.log(event)
            // if()
            // debugiing
                // console.log(xhr.response)
            // saat http status 200 dan kurang dari 300 jalankan ini
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "You are online now";
                subTitle.innerText = "Hurray! Internet is connected";
                wifiIcon.innerHTML = `<i class="fa-solid fa-wifi"></i>`

                closeIcon.onclick = () => {
                    wrapper.classList.add("hide");
                }

                setTimeout(() => {
                    wrapper.classList.add("hide");
                }, 3000);

            } else {
                offline();
            }
            
        }
        // selain itu error
        xhr.onerror = () => {
            // debug error dengan menyalahkan nama dns url
            // console.log('offline')
            offline();
           
        }

        xhr.send()
    }

    // function offline
    function offline(){
        // remove class hide saat function offline
        wrapper.classList.remove("hide");
         toast.classList.add("offline");
         title.innerText = "You'are offline";
         subTitle.innerText = "Opps! Internet is disconected";
         wifiIcon.innerHTML = `<img width="48" height="48" src="https://img.icons8.com/pulsar-line/96/without-internet.png" alt="without-internet"/>`
    }
    // debugg
    // console.log(ajax())
    // memberikan jeda saat disconnect
    setInterval(() => {
         ajax();
    }, 100);
   
}