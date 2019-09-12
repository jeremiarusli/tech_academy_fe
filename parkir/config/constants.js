export const MENU = [
  {
    name: 'Dashboard',
    path: '/in',
    index: '0',
    submenu: []
  },
  {
    name: 'Manajemen Gedung',
    path: '#',
    index: '1',
    submenu: [
      {
        name: 'Gedung',
        path: '/in/buildings',
        index: '1-0'
      },
      {
        name: 'Slot',
        path: '/in/slots',
        index: '1-1'
      }
    ]
  },
  {
    name: 'History',
    path: '#',
    index: '2',
    submenu: [
      {
        name: 'Transaksi',
        path: '/in/transactions',
        index: '2-0'
      },
      {
        name: 'Statistik',
        path: '/in/stats',
        index: '2-1'
      }
    ]
  }
]
