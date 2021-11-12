import { createStore } from 'redux';
import {RootReducer} from '../Reducer/RootReducer';

export const store = createStore(RootReducer);
