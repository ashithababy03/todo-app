import './App.css';
import AddItemsForm from './components/AddItemsForm';
import List from './components/List';
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className='App-header'>
      <AddItemsForm />
      <List />
      </div>
    </div>
    </Provider>
  );
}

export default App;
