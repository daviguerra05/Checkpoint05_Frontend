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
        <div id='ca_section'>
            <h1>Carrinho</h1>

            <div className='ca_container'>
                <div id='carrinho'></div>
                <div id='contador'>0</div>
            </div>

            <>
                <Button className='ct_bt' variant="dark" onClick={add}>Adicionar Item</Button>
                <Button className='ct_bt' variant="danger" onClick={remove}>Remover Item</Button>
            </>
        </div>
    )
}

export default Carrinho