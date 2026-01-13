export const ROUTES = {
    login: '/login',
    dashboard: '/dashboard',
    track: '/track',
    records: '/records',
    report: '/report',
    pricing: '/pricing',

    people: '/people',
    products: '/products',
    locations: '/locations',
    pallets: '/pallets',
    materials: '/materials',

    profiles: '/profiles'
}

export const MAIN_MENU = [
    {
        name: 'Rastreabilidade',
        path: ROUTES.track,
        icon: 'workflow'
    },
    {
        name: 'Registros',
        path: ROUTES.records,
        icon: 'records'
    },
    {
        name: 'Relatório',
        path: ROUTES.report,
        icon: 'chart'
    },
    {
        name: 'Precificação',
        path: ROUTES.pricing,
        icon: 'princing'
    }
]

export const REGISTER_MENU = [
    {
        name: 'Pessoas',
        path: ROUTES.people,
        icon: 'people'
    },
    {
        name: 'Produtos',
        path: ROUTES.products,
        icon: 'fruit'
    },
    {
        name: 'Localização',
        path: ROUTES.report,
        icon: 'chart'
    },
    {
        name: 'Paletes',
        path: ROUTES.pallets,
        icon: 'pallet'
    },
    {
        name: 'Materiais',
        path: ROUTES.materials,
        icon: 'material'
    }
]

export const SYSTEM_MENU = [
    {
        name: 'Perfis',
        path: ROUTES.profiles,
        icon: 'profile'
    },
]