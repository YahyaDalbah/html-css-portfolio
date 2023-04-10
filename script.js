let icon = document.querySelector('.icon')
let list = document.querySelector('.slide-bottom')

console.log(icon, list)

icon.addEventListener('click', e => {
    console.log('kig')
    if(list.classList.contains('hidden')){
        icon.innerHTML=`X`
        list.classList.remove('hidden')
    }else{
        icon.innerHTML = `<img src="./images/menu.png" alt="">`
        list.classList.add('hidden')
    }
})