import React from 'react'
import { motion } from "motion/react"
import { FirstIcon, SecondIcon, ThirdIcon, FourthIcon, FifthIcon, SixthIcon, ClockIcon } from "@/icons/bento-icons"

const activityData = [
  {
    icon: <SecondIcon />,
    iconClassName: "bg-blue-500",
    title: "Personalized Email",
    description: "Personalize Image sent to * * * @gmail.com",
    badge: (
      <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-100/10 dark:bg-neutral-100/10">
        <ClockIcon className="size-3" />
        <p className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">15s</p>
      </div>
    )
  },
  {
    icon: <ThirdIcon />,
    iconClassName: "bg-green-500",
    title: "Peer Review",
    description: "Reviewed and approved 2 outputs from content drafting agent",
    badge: (
      <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-red-100 dark:bg-red-100/10 border border-red-200 dark:border-red-100/10">
        <p className="text-[10px] font-bold text-red-500">FAILED</p>
      </div>
    )
  },
  {
    icon: <FourthIcon />,
    iconClassName: "bg-purple-500",
    title: "Content Drafting",
    description: "Generated draft campaign brief",
    badge: (
      <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-orange-100 dark:bg-orange-100/10 dark:border-orange-100/10  border border-orange-200">
        <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
      </div>
    )
  },
  {
    icon: <FifthIcon />,
    iconClassName: "bg-blue-500",
    title: "Admin Approval",
    description: "Final approval of marketing copy before publishing",
    badge: (
      <div className="flex gap-1 items-center px-1 py-0.5 rounded-md bg-orange-100 dark:bg-orange-100/10 dark:border-orange-100/10  border border-orange-200">
        <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
      </div>
    )
  },
  {
    icon: <SixthIcon />,
    iconClassName: "bg-green-500",
    title: "Weekly Campaign Report",
    description: "Generated campaign performance report",
    badge: (
      <div className="flex gap-1 items-center px-1 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-100/10 dark:bg-neutral-100/10">
        <ClockIcon className="size-3" />
        <p className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400">2m</p>
      </div>
    )
  }
];

export const SkeletonOne = () => {
  return (
    <div className="flex-1 gap-2 flex flex-col rounded-t-3xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mx-auto w-full h-full absolute inset-x-10 pt-2 px-2 inset-y-2">
      <Card>
        {activityData.map((item, index) => (
          <CardItem 
            key={index} 
            {...item} 
            index={index} 
          />
        ))}
      </Card>
    </div>
  )
}

const Card = ({ children }) => {
  return (
    <div className="gap-4 shadow-black/10 border border-transparent bg-white dark:bg-neutral-900 ring-1 ring-black/10 rounded-tl-[16px] flex flex-col items-start flex-1 overflow-hidden">
      <div className="flex items-center gap-2 border-b w-full py-2 px-4">
        <FirstIcon />
        <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Recent Activity</p>
      </div>
      {children}
    </div>
  )
}

const CardItem = ({ icon, title, description, badge, iconClassName, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="w-full"
    >
      <div className="flex justify-between items-center w-full pl-4 relative overflow-hidden">
        <div className="gap-2 flex items-center">
          <div className={`size-4 rounded-sm text-white flex items-center justify-center ${iconClassName}`}>
            {icon}
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{title}</p>
          {badge}
        </div>
        <p className="text-sm text-neutral-500 flex-nowrap max-w-[16rem] whitespace-nowrap w-full text-left truncate dark:text-neutral-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
