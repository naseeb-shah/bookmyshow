 import { Center, Stack,Text } from "@chakra-ui/react"
 import { IconButton } from '@chakra-ui/react'
 import { UnlockIcon,LockIcon,NotAllowedIcon } from "@chakra-ui/icons"
import { useDispatch } from "react-redux"
import {removeTicket,bookTicket} from '../redux/ticketAction'
 
 
 export const ShowAvailable=({data,index,button})=>{
    const dispatch=useDispatch()


    const handleClick=(row)=>{
     
     dispatch(bookTicket(index,row))
    }
    return <Center>
<Text fontWeight={'600'}  border={'1px'} p={2} borderRadius={10}
mr={10}>{data.row}
</Text>
{
    data?.seats?.map((e,index)=>e==0?<IconButton key={index+"sai"}  colorScheme='green'   variant='outline'

    aria-label='Search database' icon={<UnlockIcon />} mr={10} onClick={()=>button?handleClick(index):null} />:<IconButton mr={10}  colorScheme='teal'  key={index+"sai"}
    aria-label='Search database' icon={<LockIcon />} />)


}
    </Center>
 }