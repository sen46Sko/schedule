import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss'
import { ScheduleBlock } from './components/ScheduleBlock'

export const App = () => {

  return (
    <div className='app'>
      <ScheduleBlock />
      <ToastContainer />
    </div>
  )
}
