import * as fromPersonActions from "./person.actions";
import { state } from "@angular/animations";
import { Person } from "../models/person.model";

export const initialState: Person[] = [];

export function reducer(state=initialState, action: fromPersonActions.PersonActions){
  switch(action.type) {
      case fromPersonActions.PersonActionTypes.PERSON_ALL:
        return state;

      case fromPersonActions.PersonActionTypes.PERSON_DELETE:
        return state.filter(p=>p.id != action.playload.id);

      case fromPersonActions.PersonActionTypes.PERSON_NEW:
        return state.concat([action.playload.person]);
        
      case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
        let people = state.slice();
        let i = people.findIndex(p=>p.id == action.playload.person.id);
        if (i>=0)
          people[i] = action.playload.person;
        return people;
      default:
        return state;
  }
}