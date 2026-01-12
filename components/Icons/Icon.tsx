import React from 'react'
import logo from '@/public/img/brand/cooperflow_logo.png';
import Image from 'next/image';
import { LuWorkflow } from "react-icons/lu";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaList } from "react-icons/fa";

interface Props {
    name: string
    alt?: string
    className: string
}

export default function Icon({ name, alt = "", className }: Props) {

    switch (name) {
        case 'workflow': return <LuWorkflow />
        case 'sidebar': return <TbLayoutSidebarLeftCollapseFilled  />
        case 'records': return <FaList  />
        default: return <></>
    }
}

