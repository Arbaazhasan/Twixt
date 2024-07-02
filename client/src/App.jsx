import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import Background from './components/background/Background';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/action/userLogin';
import { ProtectedRoute } from 'protected-route-react';
import Loading from './components/loading/Loading';
import { socketContextAction } from './redux/action/socketContextAction';
import { io } from 'socket.io-client';
import { getSocketIsOnline } from './redux/reducer/socketContextReducer';


function App() {

  const { loading: userLoginLoading, userAuthenticated, userData, error: userLoginError } = useSelector(state => state.userLogin);
  const { loading: conversationsLoading, error: conversationError } = useSelector(state => state.conversations);
  const { loading: messagesReducerLoading, error: messagesError } = useSelector(state => state.messagesReducer);


  const dispatch = useDispatch();

  useEffect(() => {

    // console.log(userAuthenticated);

    if (userLoginError) toast.error(userLoginError);
    if (conversationError) toast.error(conversationError);
    if (messagesError) toast.error(messagesError);

  }, [userLoginError, conversationError, messagesError]);


  useEffect(() => {

    let createSocketConnection;

    try {
      createSocketConnection = socketContextAction(dispatch, userAuthenticated, userData);
    } catch (error) {
      console.log(error);
    }

    return () => {
      if (createSocketConnection) createSocketConnection();
    };


  }, [userAuthenticated, userData]);


  return (
    <div className='app'>

      <Router>

        <Toaster
          toastOptions={{
            style: {
              fontFamily: "sans-serif",
              fontWeight: "bold"
            },
          }}
        />


        <Background />



        {
          //Loading Component
          userLoginLoading ||
          conversationsLoading ||
          messagesReducerLoading && <Loading />
        }



        <Routes>

          {/* <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={!userAuthenticated} redirect="/">

                <Login />

              </ProtectedRoute>
            }
          />

          <Route element={<ProtectedRoute isAuthenticated={userAuthenticated}></ProtectedRoute>}>
            <Route path='/' element={<Home />} />;
          </Route> */}


          <Route path="/" element={userAuthenticated ? <Home /> : <Navigate to={'/login'} />} />

          <Route path='/login' element={userAuthenticated ? <Navigate to={'/'} /> : <Login />} />;

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
