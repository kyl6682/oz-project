import { CamerasIcon, ComputersIcon, GamingIcon, HeadphonesIcon, PhonesIcon, SmartWatchesIcon } from "../../components/common/Icons";

export const categories = [
    {
      name: 'Clothes',
      icon : <PhonesIcon />,
      link: '/phones'
    },
    {
      name: 'Electronics',
      icon : <ComputersIcon />,
      link: '/computers'
    },
    {
      name: 'Furniture',
      icon : <SmartWatchesIcon />,
      link: '/smartwatches'
    },
    {
      name: 'Shoes',
      icon : <CamerasIcon />,
      link: '/cameras'
    },
    {
      name: 'Miscellaneous',
      icon : <HeadphonesIcon />,
      link: '/headphones'
    },
    {
      name: 'string',
      icon : <GamingIcon />,
      link: '/gaming'
    }
  ];