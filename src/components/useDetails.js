import { Stack,Text,Input,Button } from "@chakra-ui/react"

 export const UserProfile=()=>{
     return<Stack w={400} p={20}>
     <Input placeholder="Your Name" width={300} type="text" name="name">

      
      

</Input>
<Button w={150} textAlign={'center'} alignSelf={'center'}
>Book</Button>
 </Stack>
 }