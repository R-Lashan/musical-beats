const banner = document.querySelector(".mini-banner")
const close = document.querySelector(".mini-banner i")

const showBanner = () => {
    setTimeout(() => {
        banner.classList.add("show")
    },3000)
}

window.addEventListener("load",showBanner)

close.addEventListener("click",() =>{
  banner.classList.remove("show")  
})