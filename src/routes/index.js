import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "../pages/home";
import { ShowTickets } from "../pages/ticket";
import { DetailsPage } from "../pages/details";



export const AllRoutes=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path="/" index Component={Home}>
        

        </Route>
        <Route path="booking" Component={ShowTickets}/>
        <Route path="details" Component={DetailsPage}/>
    </Routes>
    </BrowserRouter>
}