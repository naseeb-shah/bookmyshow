import { Box, Button, Center, Stack, Text } from "@chakra-ui/react"

import { CardDetails } from "../components/card"
import { ShowAvailable } from "../components/showSeat"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const DetailsPage=()=>{
const navigation=useNavigate()
const seats=useSelector((state)=>state.seats)

const booked=useSelector((state)=>state.booked)
console.log(booked)
    return <Box>
        <Text textAlign={'center'} fontWeight={'600'} p={5}>Seats</Text>
        <Stack mb={10}>
        {seats?.map((e, index) => (
        <ShowAvailable data={e} key={e.row} index={index} button={false} />
      ))}
      </Stack>
      <Stack w='60%' margin={'auto'}>
      {booked.map((e,index)=> <CardDetails data={e}key={JSON.stringify(e)} />)}
       
       <Button onClick={()=>navigation('/booking')} >Book More</Button></Stack>
    </Box>
}