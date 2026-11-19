import './Alunos.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

import reactLogo from '../assets/react.svg'
import Botao from '../components/Botao'
import CampoTexto from '../components/CampoTexto'
import CartaoIndicador from '../components/CartaoIndicador'
import PaginaLayout from '../components/PaginaLayout'

function Alunos() {
    
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)

    const navegar = useNavigate()

    async function NovoAlunoPage() {
        navegar('/NovoAluno')
    }

    useEffect(() => {

        async function buscarAlunos() {
            const { data, error } = await supabase
            .from('alunos')
            .select('*')
            .order('nome')

            if (error) {
                alert('Erro ao consultar alunos: ' + error.message)
            } else {
                setAlunos(data)
            }

            setCarregando(false)
        }
        buscarAlunos()
    }, [])

    return (
    <>
        <PaginaLayout>


            <div className="pagina-alunos">
                    <div className="cabecalho-alunos">
                            <h1>Alunos cadastrados</h1>

                            <button className="botao-novo-aluno" onClick={NovoAlunoPage}>
                                Novo aluno
                            </button>
                    </div>

                    <table className="tabela-alunos">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                                <tbody>

                                    {carregando? (
                                        <tr>
                                            <td colspan="3">
                                                Carregando alunos...
                                            </td>
                                        </tr>
                                    ): alunos.length === 0? (
                                        <tr>
                                            <td colspan="3">
                                                Nenhum aluno cadastrado
                                            </td>
                                        </tr>
                                    ) : (
                                        alunos.map((aluno) => (
                                            <tr key={aluno.id}>
                                                <td>{aluno.nome}</td>
                                                <td>{aluno.email}</td>
                                                <td>
                                                <button className="botao-acao">
                                                Editar
                                                </button>
                                                <button className="botao-acao botao-excluir">
                                                Excluir
                                                </button>
                                                </td>
                                            </tr>
                                      ))    
                                    )}
                                </tbody>
                    </table>
            </div>

            
        </PaginaLayout>


    </>
 )
}
export default Alunos

/*
*/

