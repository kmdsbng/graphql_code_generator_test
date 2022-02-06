import {proxy} from 'valtio'
import {FormContent} from "../domain/FormContent";
import {AppState} from "../domain/AppState";

export const formContent = proxy(new FormContent());
export const appState = proxy(new AppState());




