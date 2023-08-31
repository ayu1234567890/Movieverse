import React  from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware}  from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
// function logger(obj,next,action) 
// logger (obj)(next)(action)
// const logger = function ({dispatch,getState }){
//   return function (next) {
//     return function (action){
//       //middleware code log
//       console.log('ACTION_TYPE = ',action.type);
//       next(action);
//     }
//   }

// }
const logger = ({dispatch, getState}) => (next) => (action) => {

 
    console.log('ACTION',action);

  
  next(action);
}

// const thunk = ({dispatch,getState}) => (next) => (action) => {
//   // console.log('ACTION_TYPE = ',action.type);
//   if (typeof action === 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger,thunk));
console.log('state', store.getState());

// export const StoreContext = createContext();
// console.log('StoreContext',StoreContext);

// class Provider extends React.Component {
//   render(){
//     const { store } = this.props;
//     return (
//     <StoreContext.Provider value={store}>

//       {this.props.children}
//     </StoreContext.Provider>
//     );
//   }
// }
// export function connect (callback) {
//   return function (Component) {
//      class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//         this.unsubscribe =  this.props.store.subscribe(()=> {this.forceUpdate();
//       });
//     }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const {store} = this.props; 
//         const state = store.getState();
//             const dataToBePassdAsProps = callback(state);
//             return (<Component dispatch={store.dispatch}{...dataToBePassdAsProps} 
            
//             />
//       );
//     }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render()
//       {
//         return(
//           <StoreContext.Consumer>
//             {(store) => {
//                return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };


// }
// console.log('BEFORE STATE',store.getState());
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman '}]
// });
// console.log('AFTER STATE',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
   </Provider>,
  </React.StrictMode>
);


