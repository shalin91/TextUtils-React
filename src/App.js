import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [colorpicker, setcolorPicker] = useState("#ffffff");
  const [textcolor, setTextColor] = useState("#000000");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  document.body.style.backgroundColor = colorpicker;
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Enabled Dark Nav", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Nav", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          colorpicker={colorpicker}
          setcolorPicker={setcolorPicker}
          textcolor={textcolor}
          setTextColor={setTextColor}
          toggleMode={toggleMode}
        />

          <Alert alert={alert} />
        <div
          className="container my-3"
          style={{ backgroundColor: colorpicker, color: textcolor }}
        >

        <Routes>
          <Route
            path="/"
            element={
              <TextForm
              showAlert = {showAlert}
                mode={mode}
                heading="Enter Your Text Here"
                colorpicker={colorpicker}
                setcolorPicker={setcolorPicker}
                textcolor={textcolor}
                setTextColor={setTextColor}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                colorpicker={colorpicker}
                setcolorPicker={setcolorPicker}
                textcolor={textcolor}
                setTextColor={setTextColor}
              />
            }
          />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
