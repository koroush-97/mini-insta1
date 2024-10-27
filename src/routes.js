
import Mainpage from '../src/pages/Mainpage/Mainpage';
import Explore from '../src/pages/Explore/Explore';
import Profile from '../src/pages/Profile/Profile';

const routes = [
    { path: '/', element: <Mainpage /> },
    { path: '/explore', element: <Explore /> },
    { path: '/profile', element: <Profile /> }
];

export default routes;
