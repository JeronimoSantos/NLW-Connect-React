'use client'

import { IconButton } from "@/componentes/icon-button";
import { InputRoot, InputIcon, InputField } from "@/componentes/input";
import { Link, Copy } from "lucide-react";

interface InviteLinkInputProps {
    inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
    function CopyLinkInput() {
        navigator.clipboard.writeText(inviteLink)
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className="size-5"/>
            </InputIcon>

            <InputField readOnly defaultValue={inviteLink} />

            <IconButton className="-mr-2" onClick={CopyLinkInput}>
                <Copy className="size-5" />
            </IconButton>
        </InputRoot>
    )
}