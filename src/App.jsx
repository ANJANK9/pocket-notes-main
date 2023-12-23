import Body from "./Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Chats from "./chats/Chats";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chats/:id",
          element: <Chats />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
