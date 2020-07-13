import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth18819Saga from '../features/EmailAuth18819/redux/sagas';
import CalendarView28817Saga from '../features/CalendarView28817/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth18819Saga,
CalendarView28817Saga,
    
  ]);
}