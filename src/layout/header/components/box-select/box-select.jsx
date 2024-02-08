import React from 'react'
import { Input } from '../input'
import { Select } from '../select'
export const BoxSelect = () => {
  return (
    <div className='flex gap-1 grow'>
        <Select/>
        <Input/>
    </div>
  )
}
