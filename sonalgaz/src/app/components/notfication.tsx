import { RocketIcon, StarFilledIcon } from "@radix-ui/react-icons"
import '../globals.css'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <div className='my-3'>
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    </div>
  )
}
export function AlertDemo2() {
    return (
      <div className='m-3'>
      
        
        <AlertTitle>Good morning <StarFilledIcon className="inline mx-2" /></AlertTitle>
        <AlertDescription>
            
          Zatout mohamed Hr manager.
        </AlertDescription>
      
      </div>
    )
  }
