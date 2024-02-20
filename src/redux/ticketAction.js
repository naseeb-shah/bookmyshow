


export const bookTicket=(row,index)=>{
   
    
    
    return  {type:'book',row:row,index:index}

}
export const removeTicket=(row,index)=>{
    let rowAlpha = ["A", "B", "C", "D", "E", "F"];
let x=rowAlpha.findIndex((e)=>e==row)
    console.log(row,index,'inactionjs',x)
    return {type:'remove',row:x,index:index}}


export const userTickets=(username)=>{
    
return {
    type:"ticketsBooked",
    user:username
}

}   