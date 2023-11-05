"use client"
import React, { useState } from 'react';
import {
  UnfoldVertical,
  ArrowDownToLine,
  ArrowUpToLine,
  Share2,
  Trash2,
  Send,
  PlaySquare,
  ArrowUpRightSquare,
  ArrowDownRightSquare,
} from 'lucide-react';
import { motion } from 'framer-motion';

const workflowBlockMap = {
  check: {
    title: 'Check',
    icon: <Share2 size={15}/>,
    color: '#65c6e7'
  },
  match: {
    title: 'Match',
    icon: <ArrowUpRightSquare size={15}/>,
    color: '#8c90a7'
  },
  noMatch: {
    title: 'No Match',
    icon: <ArrowDownRightSquare size={15}/>,
    color: '#8c90a7'
  },
  runWorkflow: {
    title: 'Run Workflow',
    icon: <PlaySquare size={15}/>,
    color: '#db78f0'
  },
  message: {
    title: 'Message',
    icon: <Send size={15}/>,
    color: '#f6b529'
  },
}

export default function Home() {
  return (
    <main className="mx-2 sm:mx-auto my-10 max-w-2xl border-2 rounded-lg bg-blue-50 p-4">
      <div className='flex flex-col gap-1'>
        <NestedToggle workFlowType='check' expanded>
          <NestedToggle workFlowType='match' expanded>
            <NestedToggle workFlowType='runWorkflow' expanded>
              <NestedToggle workFlowType='message' expanded>
                <div className='border border-neutral-400 rounded-lg overflow-hidden'>
                  <ul className='flex bg-neutral-300 text-neutral-500 uppercase text-xs font-bold gap-3 p-2'>
                    <li>template</li>
                    <li>variable</li>
                    <li>emoji</li>
                    <li>medial</li>
                  </ul>
                  <textarea className='h-32 w-full p-3 text-xs outline-none block' name='message' />
                </div>
              </NestedToggle>
            </NestedToggle>
          </NestedToggle>
          <NestedToggle workFlowType='message'>
            <p className='text-xs font-semibold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Suscipit reprehenderit nesciunt quasi voluptatibus eos atque 
              impedit, consectetur, dolores sapiente aliquam voluptates 
              alias. Doloribus blanditiis aliquam eaque quod repellendus commodi quidem!
            </p>
          </NestedToggle>
        </NestedToggle>
        <NestedToggle workFlowType='runWorkflow'>
          <NestedToggle workFlowType='noMatch'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Suscipit reprehenderit nesciunt quasi voluptatibus eos atque 
            impedit, consectetur, dolores sapiente aliquam voluptates 
            alias. Doloribus blanditiis aliquam eaque quod repellendus commodi quidem!
          </NestedToggle>
        </NestedToggle>
      </div>
    </main>
  );
}

interface NestedToggleProp {
  children: React.ReactNode,
  workFlowType: string,
  expanded?: boolean
}

function NestedToggle({ children, workFlowType, expanded:initialExpanded = false }: NestedToggleProp){
  const [expanded, setExpanded] = useState<boolean>(initialExpanded);
  // @ts-ignore
  const { title, icon, color } = workflowBlockMap[workFlowType];

  return (
    <div>
      <div className="flex-1 p-2 flex gap-1 items-center bg-neutral-50 rounded-lg shadow mb-2" style={{color}} >
        <span>{icon}</span>
        <span className='text-xs font-bold uppercase'>{title}</span>
        <motion.button 
          initial={{opacity:0}}
          animate={{opacity:1}}
          whileTap={{scale:0.9}}
          className='ml-auto transition px-2 text-red-500 border-l'
        >
          <Trash2 size={15}/>
        </motion.button>
      </div>
      <div className="grid grid-cols-[30px_1fr] gap-2 ">
        <div 
          onClick={() => setExpanded(prev => !prev)}
          className='cursor-pointer min-h-[30px]'
        >
          {expanded ? (
            <motion.div whileTap={{scale:0.95}} className='group flex flex-col items-center h-full text-green-500'>
              <div className='transition-all duration-100 grid grid-rows-[0fr] group-hover:grid-rows-[1fr]'>
                <span className='overflow-hidden' style={{color}}>
                  <ArrowDownToLine size={15}/>
                </span>
              </div>
              <div className='transition-all duration-75  flex-1 group-hover:w-[2px] w-[1px] rounded-full' style={{backgroundColor: color}}></div>
              <div className='transition-all duration-100  grid grid-rows-[0fr] group-hover:grid-rows-[1fr]'>
                <span className='overflow-hidden' style={{color}}>
                  <ArrowUpToLine  size={15}/>
                </span>
              </div>
            </motion.div>
          ):(
            <motion.button 
              initial={{opacity:0}}
              animate={{opacity:1}}
              whileTap={{scale:0.9}}
              className='hover:opacity-75 transition flex items-center justify-center aspect-square w-full rounded-lg'
              style={{backgroundColor: color}}
            >
              <UnfoldVertical size={15}/>
            </motion.button>
          )}
        </div>
        <div className={`transition-all ease-[cubic-bezier(0.32,0.72,0,1)] duration-300 grid ${expanded?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'} overflow-hidden`}>
          <div className='overflow-hidden flex flex-col gap-1 mb-3'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}