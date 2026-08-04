import { motion } from "motion/react"
import { SalesforceIcon , HubspotIcon, SheetsIcon} from "@/icons"
import { IconClipboardData, IconFeatherFilled, IconFileDotsFilled, IconFilter2Search, IconPointerUp } from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import {useState} from "react"

export const SkeletonFourth = () => {

const items =[{
    title : "Brand & Style",
    icon : <IconClipboardData className="size-4 text-blue-500"/>,
    className:"bg-blue-100 border border-blue-200",
    description: "Link CRMs, helpdesk and APIs to give agents secure, role-based access.",
    tags:[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]
},
{
    title : "Compliance & Policy",
    icon : <IconFileDotsFilled className="size-4 text-green-500"/>,
    className:"bg-green-100 border border-green-200",
    description: "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls.",
    tags:[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]
},
{
    title : "Content Safety Filters",
    icon : <IconFeatherFilled className="size-4 text-indigo-500"/>,
    className:"bg-indigo-100 border border-indigo-200",
    description: "Protect your brand from harmful content with built-in safety filters that block sensitive or inappropriate material",
    tags:[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]
},
{
    title : "Approval Triggers",
    icon : <IconPointerUp className="size-4 text-neutral-500"/>,
    className:"bg-neutral-100 border border-neutral-200",
    description: "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
    tags:[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]
},
{
    title : "Output Quality Checks",
    icon : <IconFilter2Search className="size-4 text-purple-500"/>,
    className:"bg-purple-100 border border-purple-200",
    description: "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
    tags:[
        {text:"Salesforce" , icon:<SalesforceIcon className="size-3"/>},
        {text:"Hubspot" , icon:< HubspotIcon className="size-3"/>},
        {text:"Sheet" , icon:<SheetsIcon className="size-3"/>},
        ]
},]
   const [selected, setSelected] = useState(items[0])

    return(
    <div>
    <div className="flex gap-4 items-center justify-center flex-wrap mb-4">
    {items.map((item, index)=>(
    <button key={index} className={cn("px-2 py-1 rounded-sm gap-1 flex items-center justify-center cursor-pointer active:scale-100 transition duration-200",
        item.className
    )} onClick={()=> setSelected(item)}>
        {item.icon}
        {item.title}
    </button>
    ))}
    </div>
   <div className="flex-1 gap-2 flex flex-col rounded-t-3xl bg-neutral-100  border border-neutral-200 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
        <div className="flex gap-4 items-center justify-center flex-wrap">
        </div>
        <Card 
        topIcon = {selected.icon}
        title= {selected.title} 
        description= {selected.description}
        tags={selected.tags}
        className={selected.className}/>
     </div>
     </div>
    )
}

const Card = ({topIcon, title, description, tags, className}) => {
    
    return(
    <div className="p-4 gap-4 shadow-black/10 border border-transparent bg-white ring-1 ring-black/10 rounded-[16px] flex items-start flex-col">
    <div className="flex items-center gap-2">
    <div className={cn("size-6 shrink-0  rounded-full mt-1 flex items-center justify-center", className)}
   >
    {topIcon}
   </div>
    <p className="text-lg font-bold text-neutral-800">{title}</p>
    </div>
  
   <div>
    
    <p className="text-base text-neutral-600">Tone Guidelines</p>
    <p className="text-sm mt-2 mb-4 text-neutral-600 rounded-sm border border-neutral-200 px-2 py-1 border-dashed">{description}</p>
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