import { Home, Beauty, CellPhones, Laptops, Furniture, Contacts } from '../pages'

const publicRoutes = [
  { path: '/', component: Home, title: 'Home' },
  {
    path: '/cellphones',
    component: CellPhones,
    title: 'Cell Phones',
  },
  {
    path: '/laptops',
    component: Laptops,
    title: 'Latops',
  },
  {
    path: '/beauty',
    component: Beauty,
    title: 'Beauty',
  },
  {
    path: '/furniture',
    component: Furniture,
    title: 'Furniture',
  },
  {
    path: '/Contacts',
    component: Contacts,
    title: 'Contacts',
  },
];

export default publicRoutes;
