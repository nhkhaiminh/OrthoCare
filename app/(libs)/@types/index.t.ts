export interface IMobileNavbar {
    openState: boolean;
}

export type MobileNavbarContextType = {
    openState: IMobileNavbar['openState']
    setOpenState: (openState: IMobileNavbar['openState']) => void;
}