export default function CardMoto({ moto }) {
    return (
        <div key={moto.id} className="flex flex-col gap-3 bg-zinc-900 p-4 rounded-md text-zinc-200 mb-7 border border-zinc-900 hover:border-zinc-700 transition-colors">
            <div>
                <img src={moto.imagem}
                    alt="Imagem da moto"
                    className="w-100 h-80 rounded-md"
                />
            </div>
            <div className="flex flex-row gap-7 items-center">
                <span className="bg-red-700 rounded-md p-1 text-white font-bold">{moto.condicao}</span>
                <p className="font-thin text-zinc-600">Código: {moto.codigo}</p>
            </div>
            <div className="flex flex-row gap-6 items-center">
                <p className="text-2xl font-thin">{moto.fabricante}</p>
                <span className="text-2xl font-bold text-amber-500">{moto.modelo}</span>
            </div>
            <p className="font-thin text-sm text-zinc-400">{moto.descricao}</p>
            <p className="text-2xl">{moto.preco}</p>
            <div className="grid grid-cols-3 items-center w-full mt-2 text-zinc-400 border-t border-zinc-800 pt-3">
                <p className="font-thin text-left">{moto.categoria}</p>
                <p className="font-medium text-center">{moto.ano}</p>
                <p className="font-medium text-right">{moto.km}</p>
            </div>
        </div>
    )
}