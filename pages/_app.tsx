import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='grid grid-cols-12 gap-4 px-5 my-5 sm:my-20 lg:px-20 sm:px-20 h-fit'>
      <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 md:col-span-4 rounded-2xl'>
        <Sidebar/>
      </div>
      <div className='col-span-12 p-4 bg-white lg:col-span-9 md:col-span-8 rounded-2xl'>
        <Navbar />
        <Component {...pageProps} /> 
      </div>
    </div>
    </>
  )
}

export default MyApp
