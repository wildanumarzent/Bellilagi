export const SidebarMenu = [
    { name: "Home", icon: null, current: true, url: "/" },
    {
        name: "Launchpad",
        icon: null,
        current: false,
        children: [
            { name: "Create Launchpad", url: "/launchpad/create/presale" },
            { name: "Presale Detail", url: "/launchpad/:address", show: false },
        ],
    },
    { name: "Locker", icon: null, current: false, url: "/locker" },
    {
        name: "VIP Sale",
        icon: null,
        current: false,
        soon: true,
        children: [
            // {name: "Create Private Sale", soon: true, url: "/privatesale/create"},
            { name: "VIP Sale Listing", url: "/vipsale" },
            { name: "VIP Detail", url: "/vipsale/:address", show: false },
        ],
    },
];