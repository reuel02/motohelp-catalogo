import About from "../components/About";
import CardMoto from "../components/CardMoto";
import Header from "../components/Header";
import { useEffect, useState } from "react"

export default function Home() {
    const [motos, setMotos] = useState([])
    const [erro, setErro] = useState(null)
    const [filtro, setFiltro] = useState('Todas')

    useEffect(() => {
        async function buscarDados() {
            try {
                const resposta = await fetch("/motos.json")
                if (!resposta.ok) throw new Error('Erro ao carregar os dados')

                const dados = await resposta.json()

                setMotos(dados)
            } catch (error) {
                console.error(error); // Adicionado para ver o erro no console
                setErro(error.message)
            }
        }
        buscarDados()
    }, [])

    let motosFiltradas = motos;

    if (filtro != 'Todas') {
        motosFiltradas = motos.filter((moto) => moto.categoria === filtro)
    }

    return (
        <div className="bg-zinc-950 min-h-dvh">
            <Header />

            {/* Container principal limitando a largura máxima da tela */}
            <main className="max-w-7xl mx-auto px-6 mt-10">

                <About />

                {/* Container do select alinhado à esquerda (start) */}
                <div className="flex justify-start mb-6">
                    <select
                        value={filtro}
                        onChange={(evento) => setFiltro(evento.target.value)}
                        className="bg-zinc-900 border border-zinc-700 text-zinc-300 py-2 px-4 rounded-md focus:outline-none focus:border-amber-500 cursor-pointer"
                    >
                        <option value="Todas">Filtrar por (Todas)</option>
                        <option value="Esportiva">Esportiva</option>
                        <option value="Naked">Naked</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>

                {/* Grid de cards que vai seguir a mesma linha imaginária do select */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                    {motosFiltradas.map((moto) => (
                        <CardMoto key={moto.id} moto={moto} />
                    ))}
                </div>
            </main>
        </div>
    )
}