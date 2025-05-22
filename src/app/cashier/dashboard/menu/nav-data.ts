import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: '/dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard',
        roles: ['admin', 'rh', 'employe']
    },


   {
    routeLink: '/article',
    icon: 'fal fa-file-alt',  
    label: 'Article',
    roles: ['admin', 'employe']
},

   /*  {
        routeLink: 'bank',
        icon: 'fal fa-box-open',
        label: 'Bank',
        roles: ['admin', 'rh', 'employe'],

        items: [
            {
                routeLink: '/bank/createbank',
                label: 'Add Bank'
            },
            {
                routeLink: '/bank/banklist',
                label: 'Bank List'
            },
            
        ]
    }, */
    {
        routeLink: 'payment',
        icon: 'fal fa-sack-dollar',
        label: 'Payment',
        roles: ['admin', 'rh', 'employe'],
        items: [
            {
                routeLink: '/payment/createpayment',
                label: 'Create Payment',
                items: [
                    /* {
                        routeLink: '/payment/createpayment',
                        label: 'Payment Quote'
                    }, */
                    {
                        routeLink: '/payment/createpaymentinvoice',
                        label: 'Create Payment'
                    }
                ]
            },
            {
                routeLink: '/payment/paymentlist',
                label: 'Payment List',
                items: [
                    /* {
                        routeLink: '/payment/paymentlist',
                        label: 'Payment List Quote'
                    }, */
                    {
                        routeLink: '/payment/paymentlistinvoice',
                        label: 'Payment List '
                    }
                ]
            }
        ]
    },
    {
        routeLink: 'voucher',
        icon: 'fal fa-ballot',
        label: 'Purchase Order',
        roles: ['admin', 'employe'],

        items: [
            {
                routeLink: '/voucher/createdebitvoucher',
                label: 'Debit Purchase Order',
                items: [
                    {
                        routeLink: '/voucher/createdebitvoucher',
                        label: 'Create Purchase Order'
                    },
                    {
                        routeLink: '/voucher/debitlist',
                        label: 'Purchase Order List'
                    }
                ]
            },
            {
                routeLink: '/voucher/createcreditvoucher',
                label: 'Credit Purchase Order',
                items: [
                    {
                        routeLink: '/voucher/createcreditvoucher',
                        label: 'Create Purchase Order'
                    },
                    {
                        routeLink: '/voucher/creditlist',
                        label: 'Purchase Order List'
                    }
                ]
            },
            /* {
                routeLink: '/voucher/createjournal',
                label: 'Journal',
                items: [
                    {
                        routeLink: '/voucher/createjournal',
                        label: 'Create Journal'
                    },
                    {
                        routeLink: '/voucher/journallist',
                        label: 'Journal List'
                    }
                ]
            } */
        ]
    },
    {
        routeLink: 'ledger',
        icon: 'fal fa-tags',
        label: 'Stock Movement',
        roles: ['admin',  'employe'],

        items: [
            {
                routeLink: '/ledger/createledger',
                label: 'Create Stock Movement'
            },
            {
                routeLink: '/ledger/ledgerlist',
                label: 'Stock Movement List'
            },
            /* {
                routeLink: '/ledger/ledgergroup',
                label: 'Ledger Group'
            } */
        ]
    },
    {
        routeLink: 'bill',
        icon: 'fal fa-chart-bar',
        label: 'Bill',
        roles: ['admin',  'employe'],

        items: [
            {
                routeLink: '/bill/addbill',
                label: 'Vendor Bill',
                items: [
                    {
                        routeLink: '/bill/addbill',
                        label: 'Add Bill'
                    },
                    {
                        routeLink: '/bill/managebill',
                        label: 'Manage Bill'
                    }
                ]
            },
            {
                routeLink: '/bill/customerbill',
                label: 'Customer Bill',
                items: [
                    {
                        routeLink: '/bill/customerbill',
                        label: 'Add Bill'
                    },
                    {
                        routeLink: '/bill/customermanagebill',
                        label: 'Manage Bill'
                    }
                ]
            }
        ]
    },
  
    {
        routeLink: 'people',
        icon: 'fal fa-users',
        label: 'People',
        roles: ['admin', 'rh'],

        items: [

            {
                routeLink: '/people/supplier',
                label: 'Supplier People'
            },
  
            {
                routeLink: '/people/customer',
                label: 'Customer People'
            }
        ]
    },
    {
        routeLink: 'user',
        icon: 'fal fa-user',
        label: 'User Management',
        roles: ['admin'],

        items: [
            {
                routeLink: '/user/adduser',
                label: 'Add User'
            },
            {
                routeLink: '/user/userlist',
                label: 'User List'
            },
            {
                routeLink: '/user/userrole',
                label: 'User Role'
            }
        ]
    },
    {
        routeLink: 'report',
        icon: 'fal fa-inventory',
        label: 'Reports',
        roles: ['admin'],

        items: [
            {
                routeLink: '/report/transection',
                label: 'Transection'
            },
            {
                routeLink: '/report/accountsbalance',
                label: 'Account Balance'
            },
            {
                routeLink: '/report/incomereport',
                label: 'Income'
            },
            {
                routeLink: '/report/expensereport',
                label: 'Expense'
            },
            {
                routeLink: '/report/trialbalance',
                label: 'Trial Balance'
            },
            {
                routeLink: '/report/profitreport',
                label: 'Income vs Expense'
            },
            {
                routeLink: '/report/netincomereport',
                label: 'Profit & Loss'
            },
            {
                routeLink: '/report/balancesheet',
                label: 'Balance Sheet'
            }
        ]
    }
    
];