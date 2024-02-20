

import {Box,Flex,Text,Button, Input,Stack} from "@chakra-ui/react"


export const Login=()=>{

    return <Stack w={400} p={50}>
        <Input placeholder="Your Email" width={300} type="email" name="email">

         </Input>
         <Input placeholder="Your Password" width={300} type="password" name="password">

</Input>
<Button w={150} textAlign={'center'} alignSelf={'center'}
>Submit</Button>
    </Stack>
}