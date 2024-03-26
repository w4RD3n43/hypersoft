import Border from './components/Border';
import image from './assets/profile-user-svgrepo-com.svg'


function App() {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-pink-200 to-purple-300">
      <div className="absolute top-5 left-3 lg:left-16" >
        <h1 className="font-sans text-3xl font-bold cursor-pointer " >
          Task Board
        </h1>
      </div>
      <div className="absolute top-5 right-5 lg:right-32 " >
        <img src={image} alt="" width={40} className='cursor-pointer' />
      </div>
      <Border/>
    </div>
  );
}

export default App;
