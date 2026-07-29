import React from 'react'
import { IconCircleDashedCheck, IconClock , IconRipple} from '@tabler/icons-react'


export const FirstSkeleton = () => {
  return (
    <div>
        <SkeletonCard title="Campaign Planner" description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results" badge={<Badge text="1205" variant="danger"/>} icon={ <IconCircleDashedCheck className="size-4"/>}/>
    </div>
  )
}

const SkeletonCard = ({icon, title , description , badge}) => {
    return(
       <div className="max-w-[90%] mx-auto w-full p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-300">
        <div className="flex gap-3 items-center">
            {icon}
            <p className="text-sm font-bold text-black dark:text-white"> {title} 
            </p>
            {badge}
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3">
            {description}</p>
        <div className="flex items-center gap-2 flex-wrap mt-2">
            <Tag text="Google Ads"/>
            <Tag text="SaaS"/>
            <Tag text="Content"/>
        </div>
       </div> 
    )
}

const Tag = ({text}) => {
    return(
        <div className="px-2 text-xs py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700">{text}</div>
    )
}

const Badge = ({variant ="success", text}) => {
    return(
       <div className={`px-1 py-0.5 rounded-full flex items-center gap-1 w-fit border ${
        variant === "danger" 
          ? "bg-red-300/10 border-red-300 text-red-500" 
          : variant === "warning" 
          ? "bg-yellow-300/10 border-yellow-300 text-yellow-500" 
          : variant === "success" 
          ? "bg-green-300/10 border-green-300 text-green-500" 
          : ""
      }`}>
        <IconClock className="size-3"/>
        <IconRipple className="size-3"/>
        <p className="text-[10px] font-bold">{text}</p>
       </div> 
    )
}