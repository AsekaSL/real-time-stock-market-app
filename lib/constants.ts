interface NAV_ITEMS_Interface {
    href: string,
    label: string
}

export const NAV_ITEMS : NAV_ITEMS_Interface[]  = [
    {href: '/', label: 'Dashboard'},
    {href: '/search', label: 'Search'},
    {href: '/watchlist', label: 'Watchlist'}
]