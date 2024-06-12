
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

type Props = { 
  badges: string[]
}

export default function BadgePokemon({badges}:Props) {
  return (
    <Stack direction="vertical" gap={2}>
      <span>Skills:</span>
      { 
        badges.map((badge:string, index:number) => {
            return (<Badge key={index} bg="warning" text="dark">
              {badge}
            </Badge>)
          })
      }
    </Stack>
  )
}
