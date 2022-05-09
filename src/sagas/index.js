import { all } from 'redux-saga/effects';
import  mySaga  from '../store/sagas';
import  { gistsWatcher }  from './APIsaga';

export function* rootWatcher() {
	yield all([mySaga(), gistsWatcher()])
} 
