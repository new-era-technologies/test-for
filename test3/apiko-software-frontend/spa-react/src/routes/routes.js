import ListPage from '../pages/ListPage/ListPage';
import ItemPage from '../pages/ItemPage/ItemPage';

export default [
    {
        path: '/movies',
        exact: true,
        component: ListPage
    },
    {
        path: '/movies/:id',
        exact: false,
        component: ItemPage
    }
]