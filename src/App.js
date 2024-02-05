import "./App.css";
import ContactUs from "./ContactUs";
import GallerySuccess from "./components/GallerySuccess";
import Stories from "./components/Stories";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      {" "}
      <Stories />
      <GallerySuccess/>
      <Landing />
      <ContactUs />
    </>
  );
}

export default App;
