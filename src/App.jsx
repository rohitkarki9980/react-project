
import './App.css'
import MyCarousel from './components/Carousel'

function App() {

  return (
    <>
    <div className='w-[90%] m-auto'>
      <MyCarousel autoPlay interval showArrows={true} showThumbs={false} showStatus={false} infiniteLoop  showIndicator={false} />
      
    </div>
     
    </>
  )
}

export default App
