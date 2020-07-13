import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth18819Reducer from '../features/EmailAuth18819/redux/reducers';
import CalendarView28817Reducer from '../features/CalendarView28817/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth18819: EmailAuth18819Reducer,
CalendarView28817: CalendarView28817Reducer,

});