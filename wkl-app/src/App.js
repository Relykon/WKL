import { useRoutes } from 'hookrouter';
import routes from './router'
import NotFoundPage from './components/NotFoundPage.jsx'


const App = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />
};

export default App;
