function busca(inp, div){
    inp.addEventListener('keyup', function(){
            [...div.children].map(e=>{
                    if(!e.getAttribute('alt').includes(this.value))
                            e.style.display='none'
                    else
                            e.removeAttribute('style')
            })
    })
}

for(i of document.querySelectorAll("[busca]")){
    d = document.querySelector("#"+i.getAttribute('busca'))
    busca(i, d)
}