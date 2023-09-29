import React, { } from 'react'
import ReactDOM from 'react-dom/client'
/* importando as dependencias do browserRouter e Router Provider*/
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
 /* importando os elementos */
import App from './App.jsx'
import Home from './Home.jsx'
import Error from './Error.jsx'
import Casual from './Casual.jsx'
import { Masculino } from './Masculino.jsx'
import Feminino from './Feminino.jsx'
import Outlet from './Outlet.jsx'
import Carrinho from './Carrinho.jsx'
import Login from './Login.jsx'

 /* criando a função createBrowser */
const router =createBrowserRouter([
{
   /* chamando o elemento principal(pai) */
  path: '/', element: <App />,
   /*  chamando o elemento de erro*/
  errorElement: <Error />,

   /* chamando elementos filhos */
children:[
  {path: '/', element:<Home />},
  {path: '/Casual', element:<Casual />},
  {path: '/Masculino', element:<Masculino/>},
  {path: '/Feminino',element:<Feminino/>},
  {path: '/Outlet',element:<Outlet/>},
  {path: '/Carrinho',element:<Carrinho/>},
  {path:'/Login',element:<Login/>}
]

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/*chamando a função que será renderizada */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)

