
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import PaginaLayout from '../components/PaginaLayout'
import './NovoAluno.css'

function NovoAluno() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const navegar = useNavigate()

    function Voltar() {
        navegar('/Alunos')
        return
    }

   async function cadastrarAluno(e) {

        e.preventDefault()
        if (nome === '' || email === '') {
            alert('Preencha todos os campos!')
            return
        }

         const { error } = await supabase
            .from('alunos')
            .insert({
                nome: nome,
                email: email
            })

        if (error) {
            alert('Erro ao cadastrar aluno: ' + error.message)
        } else {

            alert('Aluno cadastrado com sucesso!')

            setNome('')
            setEmail('')

        }

        alert('Formulário preenchido com sucesso!')
    }

    return (
        <PaginaLayout>
            <div className="pagina-novo-aluno">
                <h1>Novo aluno</h1>
                <form onSubmit={cadastrarAluno}>
                    <div className="campo-formulario">
                        <label>Nome completo</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite o nome completo"
                        />

                    </div>

                    <div className="campo-formulario">
                        <label>E-mail</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite o e-mail"
                        />
                    </div>

                    
                    <button type="submit">
                        Cadastrar
                    </button>

                </form>
                <br />
                <button onClick={Voltar}>
                    Voltar
                </button>

            </div>

        </PaginaLayout>
    )
}

export default NovoAluno



