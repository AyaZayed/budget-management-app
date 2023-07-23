import { Provider } from './context'
import './css/App.css'
import Budget from './components/Budget'
import Expenses from './components/Expenses'
import AddExpense from './components/AddExpense'

export default function App() {
  return (
    <Provider>
      <Budget />
      <Expenses />
      <AddExpense />
    </Provider>
  )
}
