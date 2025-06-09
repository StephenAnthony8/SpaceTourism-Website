import "./App.css";
import NavigationTab from "./Components/GroupedComponents/Navigation/NavigationTab";
import MainPage from "./MainPage/MainPage";
import { CurrentDevice } from "./UtilityComponents";

function App() {
  return (
    <>
      <CurrentDevice>
        <NavigationTab />
        <MainPage />
        {/*
         */}
        {/* <CompTest /> */}
      </CurrentDevice>
    </>
  );
}

export default App;
