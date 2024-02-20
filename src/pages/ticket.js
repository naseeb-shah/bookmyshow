import {
  Button,
  Center,
  Flex,
  IconButton,
  Stack,
  Text,
  Input,useToast
} from "@chakra-ui/react";
import { ShowAvailable } from "../components/showSeat";
import { useDispatch, useSelector } from "react-redux";
import { UserProfile } from "../components/useDetails";
import {
  UnlockIcon,
  LockIcon,
  NotAllowedIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { removeTicket, userTickets } from "../redux/ticketAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShowTickets = () => {
    const toast = useToast()
    const navigation=useNavigate()

    const [user,setUser]=useState('')
  const initialRoom = useSelector((state) => state.seats);
  const bookedTickets = useSelector((state) => state.tickets);
  const sai = useSelector((state) => state.booked);
  console.log(sai)
  const dispatch = useDispatch();
  const book=()=>{
    if(user.length<5){
        toast({
            title: 'User Name Not Found !',
            description: "Please fill user name .",
            status: 'warning',
            duration: 9000,
            isClosable: true,
            position:'top'
        })
    }
dispatch(userTickets(user))
toast({
    title:'Successfully Booked .',
    description:'Thanks for using.',
    status:'success',
    isClosable:true,
    duration:1000,
    position:'top'
})
navigation('/details')
  }

  return (
    <Stack>
      <Center
        border={"1px"}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        bg={"green"}
      >
        <Text color={"white"} fontWeight={"900"}>
          {" "}
          Screen Here
        </Text>
      </Center>

      {initialRoom?.map((e, index) => (
        <ShowAvailable data={e} key={e.row} index={index} button={true} />
      ))}
      <Center p={10}>
        <Flex
          flexDir={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"} // Horizontally center align items
          alignItems={"center"} // Vertically center align items
          alignContent={"center"} // Center content along the cross-axis
          w="50%"
        >
          {bookedTickets.map((e, index) => (
            <Button
              m={1}
              key={e.row + index}
              onClick={() => dispatch(removeTicket(e.row, e.index))}
            >
              {e.row + "" + (e.index + 1)}
              <DeleteIcon ml={4} />
            </Button>
          ))}
        </Flex>
      </Center>

      <Center>
        <Stack w={400} p={20}>
          <Input
            placeholder="Your Name"
            width={300}
            type="text"
            name="name"
            onChange={(e)=>setUser(e.target.value)}
          ></Input>
          <Button w={150} textAlign={"center"} alignSelf={"center"} onClick={book}>
            Book
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
};
