import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import NewQuestionScreen from './screens/NewQuestionScreen';
import QuestionDetailsScreen from './screens/QuestionDetailsScreen';
import ErrorScreen from './screens/ErrorScreen';
import { CheckAuthLoader } from './loaders/authLoader';
import { CheckQuestionIdLoader } from './loaders/questionDetailsLoader';
import { handleInitialData } from './actions/sharedActions';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
    // errorElement: <ErrorScreen />, 
    loader: CheckAuthLoader,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: 'leaderboard', element: <LeaderboardScreen /> },
      { path: 'add', element: <NewQuestionScreen /> },
      { path: 'questions/:question_id', element: <QuestionDetailsScreen />, loader: CheckQuestionIdLoader },
      { path: 'error', element: <ErrorScreen /> }
    ]
  },
  {
    path: 'login',
    element: <LoginScreen />
  }
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
