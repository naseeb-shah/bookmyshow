
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,






Text,Button} from '@chakra-ui/react'





export const CardDetails=({data})=>{
    console.log(data)
    return <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
   
  
    <Stack>
      <CardBody>
        <Heading size='md' mb={10}>{data.name}</Heading>
  
        {
            data?.tickets?.map((e,index)=><Button m={2}variant='solid' colorScheme='blue'>
            {e.row+" "+(e.index+1)}
          </Button>)
        }
        
      </CardBody>
  
    
    </Stack>
  </Card>
}