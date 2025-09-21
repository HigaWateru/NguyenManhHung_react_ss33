import './App.css'
import ListProduct from './components/ListProduct'
import YourCart from './components/YourCart'

function App() {

  return (
    <div className='w-[100vw] h-[100vh] p-6'>
      <h1 className='font-medium text-3xl mb-6'>Shopping Cart</h1>
      <div className='w-full flex justify-between'>
        <ListProduct/>
        <YourCart/>
      </div>
    </div>
  )
}

export default App
