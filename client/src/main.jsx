import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import RegisterScreen from './pages/RegisterScreen.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import Welcome from './pages/Welcome.jsx';



const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<RegisterScreen />} />
			<Route path="/welcome" element={<Welcome />} />
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
);
