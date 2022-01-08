import React from 'react';
import './reset.css';
import './App.css';
import Home from './components/Home/Home.jsx';
import Authorization from './components/Authorization/Authorization.jsx';
import Messenger from './components/Messenger/Messenger.jsx';
import {Route, Routes} from 'react-router-dom';
import store from './redux/redux-store';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileConteiner from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = () => {
    
    return (
            <div className='app_wrapper'>
                <HeaderContainer/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path="profile" element={<ProfileConteiner />}>
                        <Route path=":userId" element={<ProfileConteiner />} />
                    </Route>
                    <Route path='/friends' element={<FriendsContainer/>} />
                    <Route path='/logIn' element={<Authorization/>}/>
                    <Route path="/messenger/*" element={<Messenger messengerPages={store.getState().messengerPages}/> }/>
                </Routes>
            </div>
    );
}


export default App;
