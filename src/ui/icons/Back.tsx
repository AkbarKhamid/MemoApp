import * as React from 'react'
import { SvgProps, SvgXml } from 'react-native-svg'

export function Back({ color = '#fff', ...props }: SvgProps) {
  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" 
      class="ionicon" 
      viewBox="0 0 512 512"><title>Arrow Back</title>
      <path fill="none" stroke=${color} 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="48" 
      d="M244 400L100 256l144-144M120 256h292"/>
    </svg>
  `
  return <SvgXml xml={xml} {...props} />
}
