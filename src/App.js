import classes from './App.module.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
