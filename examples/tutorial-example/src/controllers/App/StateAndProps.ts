
import * as ReactRedux from 'react-redux'; 
import { iActionType, Dictionary } from '../../models/models';
export const STATE_KEY = 'app';


export interface AppProps extends ReactRedux.DispatchProp<any>{
	appState:AppState;
	loadData:(e)=>iActionType;
	// componentName:string;
	// isMobile:boolean; 
	// injector:any;
	// dataService:DataService;
}
export enum WINDOW_VIEWS {
	SPLASH, 
	CONTENT
}

export interface AppState{
}
export const AppInitState:AppState = {
}

export interface inAppState{
}

export const inAppInitialState:inAppState = {
}
