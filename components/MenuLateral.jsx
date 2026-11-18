import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import './MenuLateral.css'


function MenuLateral() {

{/* COMENTARIO: Adicionei a função sair para redirecionar o
usuário para a página de login ao clicar no botão de sair
*/ }

      const navegar = useNavigate()
      
      async function sair() {
         const { error } = await supabase.auth.signOut()
         console.log("Usuario fez logout no Supabase")
         if (error) {
         alert('Erro ao sair do sistema!')
         return
         }
         navegar('/')
      }

      return (
         <aside className="menu-lateral">
          <h2>Menu</h2>
         <ul>
            <li>
                <a href="#">Dashboard</a>
               </li>
               <li>
                   <a href="/alunos">Alunos</a>
               </li>
               <li>
                    <a href="#">Professores</a>
             </li>
         </ul>

      {/* COMENTARIO: Adicionei um botão */}
      
      <br />
      <button onClick={sair}>
         Sair
      </button>
      
      </aside>
   )
}

export default MenuLateral