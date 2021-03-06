import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import tabReducers from './tabs';
import authReducer from './auth';
import notificationReducer from './notifications';
import { createMultilanguageReducer } from 'redux-multilanguage';

const language = localStorage.getItem('language') || 'en';

const rootReducer = (history) => combineReducers({
  ...tabReducers,
  auth: authReducer,
  notifications: notificationReducer,
  router: connectRouter(history),
  multilanguage: createMultilanguageReducer({ currentLanguageCode: language })
});

export default rootReducer;
