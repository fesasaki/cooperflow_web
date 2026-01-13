import logo from '@/public/img/brand/cooperflow_minilogo.png';
import Image from 'next/image';
import { LuWorkflow } from "react-icons/lu";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaList } from "react-icons/fa";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { MdPallet } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi2";

interface Props {
    name: string
    alt?: string
    className: string
}

export default function Icon({ name, alt = "", className }: Props) {

    switch (name) {
        case 'brand-mini': return <Image src={logo} alt={''} className={className} />
        case 'chart': return <FaRegChartBar className={className} />
        case 'fruit': return <GiFruitBowl className={className} />
        case 'location': return <IoLocationOutline className={className} />
        case 'material': return <LuInbox className={className} />
        case 'pallet': return <MdPallet className={className} />
        case 'people': return <MdOutlinePeopleAlt className={className} />
        case 'princing': return <GrMoney className={className} />
        case 'profile': return <RiUserSettingsLine className={className} />
        case 'records': return <FaList className={className} />
        case 'sidebar-collapse': return <TbLayoutSidebarLeftCollapseFilled className={className} />
        case 'sidebar-expand': return <TbLayoutSidebarLeftExpandFilled className={className} />
        case 'user': return <HiOutlineUserCircle className={className} />
        case 'workflow': return <LuWorkflow className={className} />
        default: return <></>
    }

}

