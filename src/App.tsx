import ReactModal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContextProvider } from './contexts/AuthContext';
import { ProjectContextProvider } from './contexts/ProjectContext';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

ReactModal.setAppElement("#root");

function App() {
  return (
    <AuthContextProvider>
      <ProjectContextProvider>
        <Home />
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </ProjectContextProvider>
    </AuthContextProvider>
  )
}

export default App
