import logo from '../../assets/logo.svg';
import Image from 'next/image';
import { Ranking } from './ranking';
import { Stats } from './stats';
import { InviteLinkInput } from './invite-link-input';

export default function InvitePage() {
    const inviteLink = "http://localhost:3000/984558893985";

    return (
        <div className="flex justify-between items-center flex-col md:flex-row gap-16 min-h-dvh">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
               <Image src={logo} alt="DevStage" width={108.5} height={30}/>

                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold font-heading leading-none text-gray-100">Inscrição confirmada!</h1>
                    <p className="text-gray-300">Para entrar no evento, acesse o link enviado para seu e-mail.</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-semibold font-heading leading-none">Indique e Ganhe</h2>
                        <p className="text-gray-300">
                            Convide mais pessoas para o evento e concorra a prêmios exclusivos! 
                            É só compartilhar o link abaixo e acompanhar as inscrições:
                        </p>
                    </div>

                    <InviteLinkInput inviteLink={inviteLink}/>

                    <Stats />
                </div>
            </div>

            <Ranking />
        </div>
    )
}
