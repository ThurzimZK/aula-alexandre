function mudouTamanho() {
    if (window.innerWidth >= 833){
        itens.style.display = 'block'
    } else{
        itens.style.display = 'none'
    }
}
function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

const tabs = document.querySelectorAll('.tab')
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
        if(tab.classList.contains('select')){
            return;
        }
        selectTab(tab)
    })
});

function selectTab(tab){
    const tabSelect = document.querySelector('.tab.select')
    tabSelect.classList.remove('select')
    tab.classList.add('select')
}