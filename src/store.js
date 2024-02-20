import { createStore } from 'redux';

import { TicketReducer } from "./redux/ticketReducer";

const store= createStore(
    TicketReducer
)

export default store