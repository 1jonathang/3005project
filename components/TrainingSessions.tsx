import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

type Props = {}

const TrainingSessions = (props: Props) => {
  return (
      <Card className='w-[200px]'>
         <CardHeader><p>Trainer Name</p></CardHeader>
         <CardContent><p className='text-sm text-muted-foreground'>blablabla</p></CardContent>
      </Card>
  )
}

export default TrainingSessions
