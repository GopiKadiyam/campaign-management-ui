import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/app/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Campaign',
    icon: 'layout-outline',
    children: [
      {
        title: 'List Campaign',
        icon: 'list-outline',
        link: '/app/campaigns',
      },
      {
        title: 'Create Campaign',
        icon: 'plus-circle-outline',
        link: '/app/campaigns/create-campaign',
      }      
    ],
  },
  {
    title: 'Templates',
    icon: 'file-text-outline',
    link: '/app/templates'
  },
  {
    title: 'Senders',
    icon: 'navigation-2-outline',
    link: '/app/senders'
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/app/layout/stepper',
      },
      {
        title: 'List',
        link: '/app/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/app/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/app/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/app/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/app/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/app/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/app/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/app/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/app/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/app/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/app/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/app/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/app/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/app/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/app/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/app/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/app/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/app/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/app/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/app/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/app/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/app/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/app/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/app/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/app/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/app/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/app/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/app/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/app/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/app/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/app/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/app/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/app/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/app/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/app/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/app/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
