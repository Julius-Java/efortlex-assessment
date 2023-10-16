import {
        ListBulletIcon,
        HomeIcon,
        HeartIcon,
        BuildingStorefrontIcon,
        GlobeAltIcon,
        BuildingOffice2Icon,
        ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline"

const sideNavPrimary = [
    {
        path: "/",
        label: "Home",
        icon: <HomeIcon className="w-6" />,
    },

    {
        path: "/",
        label: "Categories",
        icon: <ListBulletIcon className="w-6" />,
    },

    {
        path: "/",
        label: "Favorites",
        icon: <HeartIcon className="w-6" />,
    },

    {
        path: "/",
        label: "My Orders",
        icon: <BuildingStorefrontIcon className="w-6" />,
    }
]

const sideNavSecondary = [
    {
        path: "/",
        label: "English | USD",
        icon: <GlobeAltIcon className="w-6" />,
    },

    {
        path: "/",
        label: "Contact Us",
        icon: <ChatBubbleLeftRightIcon className="w-6" />,
    },

    {
        path: "/",
        label: "Our Stores",
        icon: <BuildingOffice2Icon className="w-6" />,
    }
]

const bottomNav = [
    {
        path: "/",
        label: "User Agreement",
    },

    {
        path: "/",
        label: "Partnership",
    },

    {
        path: "/",
        label: "Privacy Policy",
    }
]

export { sideNavPrimary, sideNavSecondary, bottomNav}