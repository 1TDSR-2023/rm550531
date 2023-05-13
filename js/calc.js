
function insereNumeroNoVisor(botao,visor){
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/"){
    
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value.length-1] == "-" || visor.value[visor.value.length-1] == "*" || visor.value[visor.value.length-1] == "/"){
            visor.value.slice(visor.value.length)
           
        }else{
            visor.value += botao.value
        }
        
    }else{
        visor.value += botao.value    
    }
}

const calculoDoVisor = (visor)=>{
    visor.value = eval (visor.value)
} 