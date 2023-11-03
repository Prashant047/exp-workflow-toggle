"use client"
import React, { useState } from 'react';
import {
  UnfoldVertical,
  ArrowDownToLine,
  ArrowUpToLine,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="mx-auto my-10 max-w-xl border-2 rounded-lg p-4">
      <div className='flex flex-col gap-1'>
        <NestedToggle>
          <NestedToggle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit reprehenderit nesciunt quasi voluptatibus eos atque 
            impedit, consectetur, dolores sapiente aliquam voluptates 
            alias. Doloribus blanditiis aliquam eaque quod repellendus commodi quidem!
          </NestedToggle>
          <NestedToggle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit reprehenderit nesciunt quasi voluptatibus eos atque 
            impedit, consectetur, dolores sapiente aliquam voluptates 
            alias. Doloribus blanditiis aliquam eaque quod repellendus commodi quidem!
          </NestedToggle>
        </NestedToggle>
        <NestedToggle>
          <NestedToggle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit reprehenderit nesciunt quasi voluptatibus eos atque 
            impedit, consectetur, dolores sapiente aliquam voluptates 
            alias. Doloribus blanditiis aliquam eaque quod repellendus commodi quidem!
          </NestedToggle>
        </NestedToggle>
        <NestedToggle>
          <NestedToggle>
            <NestedToggle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Suscipit reprehenderit nesciunt quasi voluptatibus eos atque 
              impedit, consectetur, dolores sapiente aliquam voluptates 
              alias. Doloribus blanditiis aliquam eaque quod repellendus commodi quidem!
            </NestedToggle>
          </NestedToggle>
        </NestedToggle>
      </div>
    </main>
  );
}

function NestedToggle({ children }: {children: React.ReactNode}){
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
      <div className="h-7 bg-blue-500 mb-1 rounded-lg"></div>
      <div className="grid grid-cols-[30px_1fr] gap-2 ">
        <div 
          onClick={() => setExpanded(prev => !prev)}
          className='cursor-pointer'
        >
          {expanded ? (
            <motion.div whileTap={{scale:0.95}} className='group flex flex-col items-center h-full text-green-500'>
              <div className='transition-all duration-100 grid grid-rows-[0fr] group-hover:grid-rows-[1fr]'>
                <span className='overflow-hidden'>
                  <ArrowDownToLine size={15}/>
                </span>
              </div>
              <div className='transition-all duration-75  flex-1 group-hover:w-[2px] w-[1px] bg-green-500 rounded-full'></div>
              <div className='transition-all duration-100  grid grid-rows-[0fr] group-hover:grid-rows-[1fr]'>
                <span className='overflow-hidden'>
                  <ArrowUpToLine  size={15}/>
                </span>
              </div>
            </motion.div>
          ):(
            <motion.button 
              initial={{opacity:0}}
              animate={{opacity:1}}
              whileTap={{scale:0.9}}
              className='bg-green-500 hover:opacity-75 transition flex items-center justify-center aspect-square w-full rounded-lg'
            >
              <UnfoldVertical size={15}/>
            </motion.button>
          )}
        </div>
        <div className={`transition-all ease-[cubic-bezier(0.32,0.72,0,1)] duration-300 grid ${expanded?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'} overflow-hidden`}>
          <div className='overflow-hidden flex flex-col gap-1'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}