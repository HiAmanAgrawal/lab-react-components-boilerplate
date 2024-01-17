import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import ImageGallery from './components/GalleryImages';



function App() {
  return (
    <div>
      
    <GallaryHeader />
      <ImageGallery />
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
