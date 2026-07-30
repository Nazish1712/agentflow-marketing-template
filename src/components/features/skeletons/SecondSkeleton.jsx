import React from 'react'
import { IconCircleDashedCheck , IconCircleCheckFilled} from '@tabler/icons-react'

export const SecondSkeleton = () => {
  return (
        <div className="max-w-[85%] h-full my-auto mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 shadow-2xl
        [--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 flex flex-col">
        <div className="flex gap-3 items-center">
        <IconCircleDashedCheck className="size-4"/>
            <p className="text-sm font-normal text-black dark:text-white"> Campaign Planner 
            </p>
        </div> 
        <div className="relative overflow-hidden flex-1 mt-4 border border-neutral-200 rounded-2xl bg-neutral-200">
        <Pattern/>
        <div className="absolute inset-0 bg-white h-full w-full">
            <div className="flex items-center">
            <IconCircleCheckFilled className="size-4 text-green-500"/>
            </div>
        </div>
        </div>
    </div>
 );
};

const Pattern = () => {
    return(
        <div className="absolute inset-0 
         bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
    )
}
