import { FaInstagram, FaShoppingCart } from "react-icons/fa";


export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center h-38 bg-zinc-900 text-zinc-200 antialiased border-b border-zinc-800">
            <h1 className="ml-20 text-4xl text-zinc-200 font-light">Moto<span className="text-amber-500 font-bold">Garage</span></h1>

            <div className="flex flex-row gap-5 items-center mr-10">
                <div className="flex flex-row items-center gap-5 text-zinc-200 text-1xl mr-10">
                    <a href="" className="hover:text-amber-500 transition-colors">Catálogo</a>
                    <a href="" className="hover:text-amber-500 transition-colors">Sobre</a>
                    <a href="" className="hover:text-amber-500 transition-colors">Contato</a>
                </div>

                <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="size-8 hover:text-amber-500" /></a>
                <a href="#" target="_blank"><FaShoppingCart className="size-8 hover:text-amber-500" /></a>
            </div>
        </div>

    )
}