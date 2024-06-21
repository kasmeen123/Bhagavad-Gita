'use client'

import {useRouter} from 'next/navigation'
import {Button} from '../ui/button'
import { ArrowBigLeft } from 'lucide-react'

const BackBtn = () => {
    const router = useRouter()
  return (
    <div>
      <Button onClick={() => router.back()}>
        <ArrowBigLeft className='h-5 w-5 mr-2'/>
        Back</Button>
    </div>
  )
}

export default BackBtn
