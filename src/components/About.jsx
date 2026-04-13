
import Header from "./Header";

export default function About() {
    return (
        <div className="bg-zinc-950 min-h-dvh flex flex-col">
            <main className="flex-1 max-w-7xl mx-auto px-6 py-16 flex items-center">
                <section className="flex flex-col lg:flex-row gap-12 items-center">

                    <div className="flex flex-col lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
                            Nossa <span className="text-amber-500">Essência</span>
                        </h2>
                        <h3 className="text-xl md:text-2xl font-light text-zinc-400 mt-4 leading-relaxed">
                            Engenharia, potência e design a um clique de distância.
                        </h3>

                        <div className="w-20 h-1 bg-amber-500 rounded-full mt-6 mb-8"></div>

                        <p className="text-zinc-400 text-lg leading-relaxed font-light mb-6">
                            O mundo das duas rodas mescla tecnologia de ponta com um design visceral.
                            No <strong className="text-zinc-200">MotoGarage</strong>, aplicamos esse mesmo conceito ao desenvolvimento de software.
                        </p>

                        <p className="text-zinc-400 text-lg leading-relaxed font-light">
                            Filtramos o ruído dos classificados tradicionais para entregar uma plataforma direta, rápida e focada no que importa: a ficha técnica e a estética da máquina.
                            Encontre o modelo ideal para o seu estilo de pilotagem com a melhor experiência digital.
                        </p>
                    </div>

                    {/* Bloco de Imagem com Efeitos */}
                    <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/10 border border-zinc-800 group">
                            <img
                                src="/assets/about_motogarage.png"
                                alt="Garagem Premium MotoGarage"
                                className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay escuro em gradiente na base da imagem para dar clima cinematográfico */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}