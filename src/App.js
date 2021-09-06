import { Navigate, Route, Routes, useLocation } from "react-router";
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { Layout } from "./components/UI";
import { Books, BookById } from './pages';
import { theme } from "./styles";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const { pathname } = useLocation();
  return (
  <StylesProvider injectFirst>
  <ThemeProvider theme={theme}>
    <AnimatePresence exitBeforeEnter key={pathname}>
      <Routes>
        <Layout>
          <Route path="/" element={<Navigate to="/all-books" />}/>
          <Route path="/all-books" element={<Books />}/>
          <Route path="/all-books/:bookId" element={<BookById />}/>
          <Route path="*" element={<div>page not found</div>}/>
        </Layout>
      </Routes>
    </AnimatePresence>
  </ThemeProvider>
  </StylesProvider>
  );
}

export default App;
