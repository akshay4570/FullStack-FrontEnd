import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchHome from "./SearchHome";
import SearchResults from "./SearchResults";
import NavBar from "./NavBar";
import JobPosting from "./JobPosting";
import DeleteJob from "./DeleteJob";
import UpdateJob from "./UpdateJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <NavBar />
              <SearchHome />
            </>
          }
        />
        <Route
          path="/search/:searchTerm"
          element={
            <>
              <NavBar />
              <SearchResults />
            </>
          }
        />
        <Route
          path="/post"
          element={
            <>
              <NavBar />
              <JobPosting />
            </>
          }
        />
        <Route
          path="/delete/:id"
          element={
            <>
              <NavBar />
              <DeleteJob />
            </>
          }
        />
        <Route
          path="/update/:id"
          element={
            <>
              <NavBar />
              <UpdateJob />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
