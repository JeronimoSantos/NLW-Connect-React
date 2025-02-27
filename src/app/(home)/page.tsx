import Image from 'next/image';
import logo from '../../assets/logo.svg';
import { Radio } from 'lucide-react';
import { SubscriptionForm } from './subscription-form';

export default function Home() {
  return ( 
      <div className="flex flex-col justify-center gap-16 min-h-dvh">
        <div className="flex flex-col items-center gap-8 md:items-start">
          <Image src={logo} alt="DevStage" width={108.5} height={30}/>

          <h1 className=" flex flex-col text-4xl text-center leading-none font-heading md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft</span> Summit 2025
          </h1>

        </div>

        <div className="flex flex-col items-stretch gap-5 md:flex-row">
          <div className="flex-1 rounded-2xl p-8 bg-gray-700 border-gray-600 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-heading font-semibold text-gray-200 text-xl">
                Sobre o evento
              </h2>

              <span className="flex items-center gap-2 text-purple font-semibold text-xs">
                <Radio className="size-5" />
                AO VIVO
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. 
              Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, 
              arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito 
            </p>
          </div>

          <SubscriptionForm />
        </div>
      </div>
  )
};
