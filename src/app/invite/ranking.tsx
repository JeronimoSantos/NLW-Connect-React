import Image from "next/image";
import gold from '../../assets/medal-gold.svg';
import silver from '../../assets/medal-silver.svg';
import cooper from '../../assets/medal-cooper.svg';

export function Ranking() {
    return (
        <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
            Ranking de Indicações
        </h2>
        
        <div className="space-y-4">
            <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
                <span className="text-sm text-gray-300 leading-none">
                    <span className="font-semibold">1º</span> | Jerônimo Santos
                </span>

                <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
                    1200
                </span>

                <Image src={gold} alt='medalha de ouro' className="absolute top-0 right-8"/>
            </div>

            <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
                <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">2º</span> | Fernando Santos
                </span>

                <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
                    1130
                </span>

                <Image src={silver} alt='medalha de ouro' className="absolute top-0 right-8"/>
            </div>

            <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
                <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">3º</span> | Leandro de Jesus
                </span>

                <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
                    1030
                </span>

                <Image src={cooper} alt='medalha de ouro' className="absolute top-0 right-8"/>
            </div>
        </div>
    </div>
    )
} 
