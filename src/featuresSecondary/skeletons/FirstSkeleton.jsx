import { motion } from "motion/react"
import { FileIcon, SalesforceIcon , HubspotIcon} from "@/icons"

export const SkeletonOne = () => {
    return(
     <div className="flex-1 rounded-t-3xl bg-neutral-100  border border-neutral-200 max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
        <Card title=""/>
     </div>
    )
}

const Card = ({topIcon, title, description, tags}) => {
    return(
    <div className="p-4 gap-4 shadow-black/10 border border-transparent bg-white ring-1 ring-black/10 rounded-[16px] flex items-start">
   <div className="size-6 shrink-0 rounded-full bg-red-500 mt-1 flex items-center justify-center">
    {/* <FileIcon className="size-4  text-white"/> */}
    {topIcon}
   </div>
   <div>
    <p className="text-lg font-bold text-neutral-800">{title}</p>
    <p className="text-base text-neutral-600">{description}</p>
    <div className="mt-2 flex flex-row flex-wrap gap-2">
    <Tag text="Salesforce" icon={<SalesforceIcon className="size-3"/>}/>
    <Tag text="HubspotIcon" icon={<HubspotIcon className="size-3"/>}/>
    <Tag text="Sheets" icon={<HubspotIcon className="size-3"/>}/>
    </div>
   </div>
   </div>)
}

const Tag = ({text, icon}) => {
    return(
        <div className="flex items-center gap-1 px-1 py-0.5 border border-neutral-100 text-sm">
            {icon}
            <p className="text-xs text-neutral-500">{text}</p>
        </div>
    )
}