{/* General Types */ }

export interface TypeRouterConfig {
    id: string,
    name: string,
    path: string,
    isDefault?: boolean | undefined,
    soon?: boolean | undefined,
    layout?: string | undefined,
    layoutGroup?: string | undefined,
    children?: Array<any>
}