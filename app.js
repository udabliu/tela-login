//peguei do html o icone da lua
const lua = document.getElementById('moon');
//adicionei um evento que quando clicar na lua chama uma função anonima
lua.addEventListener('click', () =>{
    const form = document.querySelector('.login-form')
    //criei uma condição que se a lua estiver "existindo"(contains),irá remover o ícone da lua(remove) 
    //e adicionará (add) o do sol
    if(lua.classList.contains('fa-moon')){
        lua.classList.remove('fa-moon')
        lua.classList.add('fa-sun')
        form.classList.add('dark')
    }

    else{
        lua.classList.remove('fa-sun')
        lua.classList.add('fa-moon')
        form.classList.remove('dark')
        
    }
})

