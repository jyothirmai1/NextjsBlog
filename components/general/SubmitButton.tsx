"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
    const{pending} = useFormStatus()
  return (
   <Button className='w-[200px]  text-white bg-[#24899f] mt-2 m-auto' type='submit' disabled={pending}>{pending ? 'Submitting':'Submit'}</Button>
  )
}

export default SubmitButton