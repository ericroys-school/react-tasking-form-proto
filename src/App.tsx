import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import TaskContainer from './components/tasks';

function App() {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <main className='flex  mx-3 grow pb-10 mt-3 w-full flex-col items-center'>
        <TaskContainer />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default App;
