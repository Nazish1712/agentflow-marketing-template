import { motion } from "motion/react"
import { FileIcon, SalesforceIcon , HubspotIcon, SheetsIcon, CogIcon, ErrorIcon} from "@/icons"

export const SkeletonOne = () => {
    return(
     <div className="flex-1 gap-2 flex flex-col rounded-t-3xl bg-neutral-100  border border-neutral-200 max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
        <Card 
        topIcon = {<FileIcon className="size-4  text-white"/>}
        title="Human-in-the-Loop" 
        description ="Add reviews, approvals and escalations without slowing work."
        tags={[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]}/>

        <Card 
        topIcon = {<CogIcon className="size-4  text-white"/>}
        title="Define Processing Logic" 
        description ="Create workflows, decision points, and conditional actions for each task."
        tags={[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]}/> 

        <Card 
        topIcon = {<ErrorIcon className="size-4  text-white"/>}
        title="Connect Data" 
        description ="Link CRMs, helpdesks, and APIs to give agents secure, role-based access."
        tags={[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]}/>    
     </div>
    )
}

const Card = ({topIcon, title, description, tags}) => {
    const randomColors = [
        "bg-blue-500",
        "bg-green-500",
        "bg-red-500",
    ]

    const randomBg = randomColors[Math.floor(Math.random() * randomColors.length)]

    return(
    <div className="p-4 gap-4 shadow-black/10 border border-transparent bg-white ring-1 ring-black/10 rounded-[16px] flex items-start">
   <div className={`size-6 shrink-0 bg-blue-500 rounded-full mt-1 flex items-center justify-center ${randomBg}`}
   >
    {topIcon}
   </div>
   <div>
    <p className="text-lg font-bold text-neutral-800">{title}</p>
    <p className="text-base text-neutral-600">{description}</p>
    <div className="mt-2 flex flex-row flex-wrap gap-2">
    {tags.map((tag)=>(
        <Tag key={tag.text} text={tag.text} icon={tag.icon}/>
    ))}
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