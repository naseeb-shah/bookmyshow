

let initialState = {
  seats: [
    {
      row: "A",
      seats: [0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      row: "B",
      seats: [0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      row: "C",
      seats: [1, 1, 0, 0, 0, 0, 0, 0],
    },
    {
      row: "D",
      seats: [0, 0, 0, 0, 1, 0, 0, 0],
    },
    {
      row: "F",
      seats: [0, 1, 0, 0, 0, 0],
    },
  ],
  tickets: [],
  booked:[]
};

export const TicketReducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case "book": {
      let row = action.row;
      let index = action.index;
      let newState = [...state.seats];
      console.log(row, index);
      newState[row]["seats"][index] = 1;
      let rowAlpha = ["A", "B", "C", "D", "E", "F"];
      let booked = [
        ...state.tickets,
        {
          row: rowAlpha[row],
          index: index,
        },
      ];
      return {
        ...state,
        seats: newState,
        tickets: booked,
      };
    }
    case"remove":{
        let row = action.row;
      let index = action.index;
      let newState = [...state.seats];
      console.log(row, index);
      newState[row]["seats"][index] = 0;
      let rowAlpha = ["A", "B", "C", "D", "E", "F"];
      let booked = 
        state.tickets.filter((e)=>e.row!=rowAlpha[row]&&e.index!==index)
        
    
      return {
        ...state,
        seats: newState,
        tickets: booked,
      };

    }

    case "ticketsBooked":{
        let currentTic=state.tickets
      let  booked=[...state.booked,
          {
              name:action.user,
          tickets:currentTic
          }
      ]
        return {
            ...state,tickets:[],booked:booked
        }

    }

    default:
      return state;
  }
};
