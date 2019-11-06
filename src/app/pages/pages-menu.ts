import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'View Membership Data',
    icon: 'layout-outline',
    children: [
      {
        title: 'Current Position Of Member',
        link: '/pages/view-membership-data/currentpositionofmember',
      },
      {
        title: 'Loan Verification',
        link: '/pages/view-membership-data/loanverification',
      },
      {
        title: 'All Details',
        icon: '', 
        children: [
         {
          title: 'Personal Detail',
          link: '/pages/view-membership-data/personaldetail',
         },
         {
          title: 'Balance As On',
          link: '/pages/view-membership-data/balance',
         },
         {
          title: 'Share Details',
          link: '/pages/view-membership-data/sharedetails',
         },
         {
          title: 'Thrift Credit Details',
          link: '/pages/view-membership-data/thriftcreditdetails',
         },
         {
          title: 'FD Details',
          link: '/pages/view-membership-data/fddetails',
         },
         {
          title: 'Loan Details',
          link: '/pages/view-membership-data/loandetails',
         },
         {
          title: 'Loan Credit & Withdrawal',
          link: '/pages/view-membership-data/loancreditwithdrawal',
         },
         {
          title: 'RD Details',
          link: '/pages/view-membership-data/rddetails',
         },
         {
          title: 'Rd Credit & Withdrawal',
          link: '/pages/view-membership-data/rdcreditwithdrawal',
         },
         {
          title: 'Final Payment Details',
          link: '/pages/view-membership-data/finalpaymentdetails',
         },
         {
          title: 'Yearly Details',
          link: '/pages/view-membership-data/yearlydetails',
         },
         {
          title: 'Current Position',
          link: '/pages/view-membership-data/currentposition',
         },
         {
          title: 'Guarantor Recovery',
          link: '/pages/view-membership-data/guarantorrecovery',
         },
         {
          title: 'MRN',
          link: '/pages/view-membership-data/mrn',
         },
        
       ],
      },
    ],
  },   
                        {
                          title: 'Forms',
                          icon: 'edit-2-outline',
                          children: [
                            {
                              title: 'Membership Forms',
                              icon: 'star-outline', 
                              children: [
                            // {
                            //   title: 'Form Inputs',
                            //   link: '/pages/forms/inputs',fd-application-form
                            // },
                                {
                                  title: 'Membership Form',
                                  link: '/pages/forms/membership',
                                },
                                {
                                  title: 'Share Forms',
                                  link: '/pages/forms/shareforms',
                                },
                                {
                                  title: 'Thrift Deposit',
                                  link: '/pages/forms/thriftdeposite',
                                },
                                
                                {
                                  title: 'Recurring Forms',
                                  link: '/pages/forms/recurringforms',
                                },
                              ],              
                            },
                            {
                              title: 'FD Application Forms',
                              icon: 'star-outline', 
                              children: [
                                {
                                  title: 'FD Application Forms',
                                  link: '/pages/forms/fdforms',
                                },
                                {
                                  title: 'FD Details',
                                  link: '/pages/forms/fddetails',
                                },
                                {
                                  title: 'Online FD Request',
                                  link: '/pages/forms/fdrequestforms',
                                },
                              ],              
                            },
                            {
                              title: 'Loan Application Form',
                              icon: 'star-outline',
                              children: [
                                {
                                  title: 'Loan Application Form',
                                  link: '/pages/forms/loanapplicationform',
                                },
                                {
                                  title: 'Loan Details',
                                  link: '/pages/forms/loandetails',
                                },
                                {
                                  title: 'LSF Details',
                                  link: '/pages/forms/lsfdetails',
                                },
                                {
                                  title: 'Loan Balance',
                                  link: '/pages/forms/loanbalance',
                                },
                                {
                                  title: 'Grossary Loan',
                                  link: '/pages/forms/grossaryloan',
                                },
                              ],              
                            },
                            {
                              title: 'Loan Deposite Form',
                              icon: 'star-outline',
                              children: [
                                {
                                  title: 'Loan Deposit',
                                  link: '/pages/forms/loandeposit',
                                },
                              ],              
                            },
                            {
                              title: 'RD Application Form',
                              icon: 'star-outline',
                              children: [
                                {
                                  title: 'RD Application',
                                  link: '/pages/forms/rdapplication',
                                },
                                {
                                  title: 'RD Details',
                                  link: '/pages/forms/rddetails',
                                },
                                {
                                  title: 'RD Transaction',
                                  link: '/pages/forms/rdtransaction',
                                },
                                {
                                  title: 'Online RD Request',
                                  link: '/pages/forms/rdrequest',
                                },
                              ],              
                            },
                            {
                              title: 'Share Certificate Print',
                              icon : 'star-outline',
                              link: '/pages/forms/sharecertificate',
                            },
                            {
                              title: 'PassBook Details',
                              icon: 'star',
                              link: '/pages/forms/passbookdetails',  
                            },
                            {
                              title: 'Voucher Details',
                              icon: 'star',
                              link: '/pages/forms/voucherdetails',
                            },
                            {
                              title: 'Cheque Transactions ',
                              icon: 'star-outline',
                              children: [
                                {
                                  title: 'Cheque Transactions',
                                  link: '/pages/forms/chequetransactions',
                                },
                                {
                                  title: 'All Cheque List',
                                  link: '/pages/forms/allchequelist',
                                },
                              ],              
                            },
                            {
                              title: 'Loan Request Form',
                              icon: 'star',
                              link: '/pages/forms/loanrequestform',
                            },
                            {
                              title: 'MRN Details',
                              icon: 'star',
                              link: '/pages/forms/mrndetails',
                            },
                            // {
                            //   title: 'partner-ship',
                            //   link: '/pages/forms/partnership',
                            // },
                            // {
                            //   title: 'forms-layout',
                            //   link: '/pages/forms/formsLayout',
                            // },
                         ],
                       },

  {
    title: 'Credit & Withdrawal',
    icon: 'keypad-outline',
    children: [
      {
        title: 'Thrift Credit Details',
        link: '/pages/credit-withdrawal/thriftcreditdetails',
      },
      {
        title: 'RD Credit & Withdrawal',
        link: '/pages/credit-withdrawal/rdcreditwithdrawal',
      },
      {
        title: 'Loan Credit',
        link: '/pages/credit-withdrawal/loancredit',
      },
    ],
  },  
  {
    title: 'Payroll Application',
    icon: 'browser-outline',
    children: [
      {
        title: 'Personal Details',
        link: '/pages/payroll-application/personaldetails',
      },
      {
        title: 'Payroll Advice',
        link: '/pages/payroll-application/payrolladvice',
      },
      {
        title: 'Payroll Deduction',
        link: '/pages/payroll-application/payrolldeduction',
      },
      {
        title: 'Excess Details',
        link: '/pages/payroll-application/excessdetails',
      },
      {
        title: 'Thrift Details',
        link: '/pages/payroll-application/thriftdetails',
      },
      {
        title: 'Loan Details',
        link: '/pages/payroll-application/loandetails',
      },
      {
        title: 'Loan Credit & Withdrawal',
        link: '/pages/payroll-application/loancreditwithdrawal',
      },
      {
        title: 'Rd Details',
        link: '/pages/payroll-application/rddetails',
      },
      {
        title: 'Rd Credit & Withdrawal',
        link: '/pages/payroll-application/rdcreditwithdrawal',
      },
      {
        title: 'Current Position Of Loan',
        link: '/pages/payroll-application/currentpositionofloan',
      },
      {
        title: 'Grossary Loan',
        link: '/pages/payroll-application/grossaryloan',
      },
    ],
  },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
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
