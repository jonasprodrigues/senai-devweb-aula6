
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'
import PaginaLayout from '../components/PaginaLayout'
import './NovoAluno.css'

function Aluno() {

    const { id } = useParams()
    const navegar = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {

        async function buscarAluno() {
            const { data, error } = await supabase
                .from('alunos')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                alert('Erro ao consultar aluno: ' + error.message)
            } else {
                setNome(data.nome)
                setEmail(data.email)
            }
        }
        buscarAluno()
    }, [id])

    async function atualizarAluno(e) {
        e.preventDefault()
        if (nome === '' || email === '') {
            alert('Preencha todos os campos!')
            return
        }
        const { error } = await supabase
            .from('alunos')
            .update({
                nome: nome,
                email: email
            })
            .eq('id', id)

        if (error) {
            alert('Erro ao atualizar aluno: ' + error.message)
        } else {
            alert('Aluno atualizado com sucesso!')
            navegar('/alunos')
        }

    }

    return (
        <PaginaLayout>
            <div className="pagina-novo-aluno">
                <h1>Editar aluno</h1>
                <form onSubmit={atualizarAluno}>
                    <div className="campo-formulario">
                        <label>Nome completo</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="campo-formulario">
                        <label>E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">
                        Salvar alterações
                    </button>
                </form>
            </div>
        </PaginaLayout>
    )
}

export default Aluno



