import '../src/css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';

function Login(){
    
    
    const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
   
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length < 5 || username.length < 5) {
      alert('O usuário e a senha devem ter pelo menos 5 caracteres');
      setData({
        username: "",
        password: "" 
      });
      console.log(data, "Criação de login ivalido");
      
    }else{
        console.log(data, "Criação de login validada");
        alert("Criação de login feita com sucesso ")
    }

    
  };

  const submitLogin = (e) => {
    e.preventDefault();
    let usernamelogin = document.getElementById("username").value;
    let passwordlogin = document.getElementById("password").value;

    if (username === usernamelogin && password === passwordlogin) {
      console.log("deu bom");
      alert("Login realizado com sucesso");
    } else {
      console.log("deu ruim");
      alert("Usuario ou senha incorretos")
    }
  };
    
    
        
        return(
            <section>
                {showLogin ? (
            <div id='login' className=" container-sm border border-3 rounded-3  just p-3 d-flex justify-content-center mt-5">

            <form onSubmit={submitLogin} >

                <h1 className='text-center'>Login</h1>
                
                <div className='mt-5 mb-3' >
                    
                    <label htmlFor="username"><i class="bi bi-person p-1"></i></label>
                    <input className='border-dark border rounded-3 p-1' i type="text" name="username" id="username"  placeholder=' Usuario:'  required/>
                </div>

                <div className='mb-4'>
                
                    <label htmlFor="password"><i class="bi bi-lock p-1"></i></label>
                    <input className='border-dark border rounded-3 p-1' type="password" name="password" id="password" placeholder=' Senha:' required/>
                </div>
            
                 <div className='text-center'>
                    <button className='border bg-secondary rounded-2 p-1 w-75 '  type="submit" name="submit" id='button'>Entrar</button>
                </div>

                <div className='text-center'>
                <a className=' p-1 w-75 '  onClick={toggleForm}>Criar Login</a>    
                </div>
                        
            </form>
            </div>

            ) : (

            

            <div id='create-login' className=" container-sm border border-3 rounded-3 p-3 d-flex justify-content-center mt-5">

            <form onSubmit={submitHandler} >

                <h1 className='text-center'>Registrar</h1>
                

                <div className=' mt-5 mb-3' >
                    
                    <label htmlFor="username"><i class="bi bi-person p-1"></i></label>
                    <input className='border-dark border rounded-3 p-1' i type="text" name="username" placeholder="Crie seu Usuario" value={username} onChange={changeHandler}  required/>
                </div>

                <div className='mb-4'>

                    <label htmlFor="password"><i class="bi bi-lock p-1"></i></label>
                    <input className='border-dark border rounded-3 p-1' type="password" name="password" placeholder="Crie sua Senha" value={password} onChange={changeHandler} required/>
                </div>

               
               <div className='text-center'>
                     <button className='border bg-secondary rounded-2 p-1 w-75 ' type="submit" name="submit" id='button'>Criar</button>
               </div>

               <div className='text-center'>
                <a className=' p-1 w-75 '  onClick={toggleForm}>Acessar</a>    
             </div>          
            </form>
            
        </div>

        

)}
        </section> 
            
    
    
            
        );
}

export default Login