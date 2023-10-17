import { Icon } from '@iconify/react';

const footerSocials = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/nextjs.org',
        icon:<Icon icon="ic:baseline-facebook" color="#bdc4cd" width={24} height={24} />
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/nextdotjs/',
        icon: <Icon icon="ri:instagram-fill" color="#bdc4cd" width={24} height={24} />,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/nextjs',
        icon: <Icon icon="simple-icons:x" color="#bdc4cd" width={24} height={24} />,
    }
]

const footerAbout = [
    {
        name: 'About Us',
        href: '/',
    },
    {
        name: 'Contact Us',
        href: '/',
    },
    {
        name: 'Terms & Conditions',
        href: '/',
    },
    {
        name: 'Privacy Policy',
        href: '/',
    }
]

const footerPartnership = [
    {
        name: 'Sell on Efortlex',
        href: '/',
    },
    {
        name: 'Become a Partner',
        href: '/',
    },
    {
        name: 'Advertise with Us',
        href: '/',
    },
    {
        name: 'Become a Vendor',
        href: '/',
    }
]

const footerInfo = [
    {
        name: 'FAQs',
        href: '/',
    },
    {
        name: 'Track Your Order',
        href: '/',
    },
    {
        name: 'Delivery Info',
        href: '/',
    },
    {
        name: 'Return & Refund Policy',
        href: '/',
    }
]

const footerUser = [
    {
        name: 'My Account',
        href: '/',
    },
    {
        name: 'My Orders',
        href: '/',
    },
    {
        name: 'My Wishlist',
        href: '/',
    },
    {
        name: 'My Cart',
        href: '/',
    }
]

export {footerSocials, footerAbout, footerPartnership, footerInfo, footerUser}