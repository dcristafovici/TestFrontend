import React from 'react';
import AppRouter from './routes/AppRouter';
import routes from './routes/routes'

const App:React.FC = () => (
  <AppRouter routes={routes} />
)

export default App;
