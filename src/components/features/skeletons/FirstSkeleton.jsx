import React from 'react'
import { IconCircleDashedCheck, IconClock , IconRipple, IconExclamationCircle, IconPrison} from '@tabler/icons-react'


export const FirstSkeleton = () => {
  return (
    <div style={{
        transform: "rotateZ(15deg) rotateY(-20deg) rotateX(30deg) scale(1.2)"
    }} 
     className=" absolute perspective-distant h-full w-full -translate-x-6 mask-radial-from-50% mask-r0from-50%">
        <SkeletonCard className="absolute bottom-0 left-12 z-30 max-w-[90%]" title="Campaign Planner" description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results" badge={<Badge text="120s" variant="danger"/>} icon={ <IconCircleDashedCheck className="size-4"/>}/>
        
        <SkeletonCard className="absolute bottom-10 left-8 z-20" title="Issue Tracker" description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results" badge={<Badge text="105s" variant="success"/>} icon={ <IconExclamationCircle className="size-4"/>}/>
        
        <SkeletonCard className="absolute bottom-20 left-4 max-w-[80%]" title="Risk Analysis" description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results" badge={<Badge text="40s" variant="warning"/>} icon={ <IconPrison className="size-4"/>}/>
    
    </div>
  )
}

const SkeletonCard = ({icon, title , description , badge , className=""}) => {
    return(
       <div className={`max-w-[85%] h-fit my-auto mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 shadow-2xl ${className}`}>
        <div className="flex gap-3 items-center">
            {icon}
            <p className="text-sm font-normal text-black dark:text-white"> {title} 
            </p>
            {badge}
        </div>
        <p className="text-sm text-neutral-400/80 dark:text-neutral-400 font-medium mt-3">
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