// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },

  // {
  //   id: 'todo',
  //   title: 'Todo',
  //   icon: <CheckSquare size={20} />,
  //   navLink: '/apps/todo'
  // },



  // {
  //   id: 'roles-permissions',
  //   title: 'Roles & Permissions',
  //   icon: <Shield size={20} />,
  //   children: [
  //     {
  //       id: 'roles',
  //       title: 'Roles',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/roles'
  //     },
  //     {
  //       id: 'permissions',
  //       title: 'Permissions',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/permissions'
  //     }
  //   ]
  // },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // },
  {
    id: 'users',
    title: 'Employees',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'Employees List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/view'
      // }
    ]
  },
  {
    id: 'userss',
    title: 'Departments',
    icon: <User size={20} />,
    children: [
      {
        id: 'lisst',
        title: 'Departments List',
        icon: <Circle size={12} />,
        navLink: '/apps/dep/list'
      },
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/view'
      // }
    ]
  },
  {
    id: 'usersss',
    title: 'Projects',
    icon: <User size={20} />,
    children: [
      {
        id: 'lissst',
        title: 'Projects List',
        icon: <Circle size={12} />,
        navLink: '/apps/Projects/list'
      },
      // {
      //   id: 'view',
      //   title: 'View',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/user/view'
      // }
    ]
  },
  {
    id: 'invoiceApp',
    title: 'Invoice',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'invoiceList',
        title: 'Invoice List',
        icon: <Circle size={12} />,
        navLink: '/apps/invoice/list'
      },
      // {
      //   id: 'invoicePreview',
      //   title: 'Preview',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/invoice/preview'
      // },
      // {
      //   id: 'invoiceEdit',
      //   title: 'Edit',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/invoice/edit'
      // },
      // {
      //   id: 'invoiceAdd',
      //   title: 'Add',
      //   icon: <Circle size={12} />,
      //   navLink: '/apps/invoice/add'
      // }
    ]
  },
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={20} />,
    navLink: '/apps/email'
  },
  {
    id: 'chat',
    title: 'Chat',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'kanban',
    title: 'To Do',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/kanban'
  },
]
