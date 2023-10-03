import Button from 'react-bootstrap/Button';
import '../src/css/carrinho.css'
function Carrinho(){
    const add = ()=>{
        const contador = document.getElementById('contador')
        let itens = parseInt(contador.innerHTML) + 1
        contador.innerHTML = itens
    }
    const remove = ()=>{
        const contador = document.getElementById('contador')
        let itens = parseInt(contador.innerHTML)
        if (itens > 0){
            contador.innerHTML = itens - 1
        }
    }
    return(
        <div>
            <h1>Carrinho</h1>
            <div id='carrinho'></div>
            <div id='contador'>0</div>
            <>
                <Button variant="dark" onClick={add}>Adicionar Item</Button>
                <Button variant="dark" onClick={remove}>Remover Item</Button>
            </>
        </div>
    )
}

export default Carrinho