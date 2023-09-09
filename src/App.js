import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Tab1 from "./Tabs/Tab1";
import Tab2 from "./Tabs/Tab2";
import Tab3 from "./Tabs/Tab3";

function App() {
  const navigate = useNavigate();
  return (
    <main class="flex items-center justify-center gap-10 w-screen mt-[100px] flex-col">
      <div>Hello</div>

      <div className="flex items-center gap-6">
        <button
          className="bg-violet-400 py-1 px-2 rounded-md hover:scale-95 shadow-md shadow-orange-50 transition-all ease-in-out duration-200"
          onClick={() => navigate("/tab1")}
        >
          Tab1
        </button>
        <button
          className="bg-violet-400 py-1 px-2 rounded-sm hover:scale-95 transition-all ease-in-out duration-200"
          onClick={() => navigate("/tab2")}
        >
          Tab2
        </button>
        <button
          className="bg-violet-400 py-1 px-2 rounded-sm hover:scale-95 transition-all ease-in-out duration-200"
          onClick={() => navigate("/tab3")}
        >
          Tab3
        </button>
      </div>

      <Routes>
        <Route path={"/tab1"} element={ <Tab1 />}></Route>

        <Route path={"/tab2"} element={<Tab2 />}></Route>
        <Route path={"/tab3"} element={<Tab3 />}></Route>
      </Routes>
    </main>
  );
}

export default App;
