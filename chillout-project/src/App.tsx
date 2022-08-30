import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate,  } from 'react-router-dom';
import { toast } from 'react-toastify';
import Sidebar from './components/Sidebar/Sidebar';
import { PrivateRoutes, PublicRoutes } from './helpers/paths';
import MainPage from './pages/HomePage/HomePage';
import { useAppDispatch, useAppSelector } from './store/hooks';
import userSlice, { actionsUser } from './store/reducers/userSlice';
import { getInfo } from './store/thunk/userThunks';

function App() {

  const {isLoading, isAuth, errors} = useAppSelector(state => state.user)
  const navigate = useNavigate();  
  const dispatch = useAppDispatch()
  const [isRedirect, setIsRedirect] = useState<boolean>(false)
  const {pathname} = useLocation()

  useEffect(() => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + "tokenChillOut".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    if(matches !== null && matches[1]){
      dispatch(getInfo(matches[1]))
      .then((data) => {
      })
    } else {
      console.log("changeLoading")
      dispatch(actionsUser.changeLoading({isLoading: false}))
      if(pathname !== "/"){
        setIsRedirect(true)
      }
    }
  }, [])

  useEffect(() => {
    toast(errors[0], {type: "error"})
  }, [errors])

  if (isRedirect) {
    return <Navigate to={'/'}/>
  }
  

  return (
    <>
     {!isLoading
     ?
      <div className="App">
        {isAuth ?
         <>
           <Sidebar />
           <main className='main'>
             <Routes>
                {PrivateRoutes.map(route => <Route path={route.path} key={route.path} element={route.component} />)}
                <Route path='/' element={<MainPage />}  /> 
             </Routes>
           </main>
         </>
         :
          <Routes>
            {PublicRoutes.map(route => <Route path={route.path} key={route.path} element={route.component} />)}
            {/* <Route path="/" element={<MainPage />}  />  */}
          </Routes>
        }
      </div>
    :
      <div>

      </div>
    }
    </>
  );
}

export default App;
