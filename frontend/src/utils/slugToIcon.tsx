import React from 'react';
import slugs from '../constants/slugs';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import Fastfood from '@material-ui/icons/Fastfood';
import ChildFriendly from '@material-ui/icons/ChildFriendly';
import CameraAlt from '@material-ui/icons/CameraAlt';
import LocalFlorist from '@material-ui/icons/LocalFlorist';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import LocationCity from '@material-ui/icons/LocationCity';
import Free from '@material-ui/icons/FilterVintage';
import Entertainment from '@material-ui/icons/LocalBar'

export default function slugToIcon(slug: string, color: 'inherit' = 'inherit', fontSize: 'inherit' = 'inherit') {
    switch (slug) {
        case slugs.sport: {
            return <DirectionsWalk fontSize={fontSize} color={color}/>;
        }
        case slugs.children: {
            return <ChildFriendly fontSize={fontSize} color={color}/>;
        }
        case slugs.culture: {
            return <LocationCity fontSize={fontSize} color={color}/>;
        }
        case slugs.masterClasses: {
            return <CameraAlt fontSize={fontSize} color={color}/>;
        }
        case slugs.food: {
            return <Fastfood fontSize={fontSize} color={color}/>;
        }
        case slugs.shopping: {
            return <LocalGroceryStore fontSize={fontSize} color={color}/>;
        }
        case slugs.free: {
            return <Free fontSize={fontSize} color={color}/>;
        }
        case slugs.entertainment: {
            return <Entertainment fontSize={fontSize} color={color}/>;
        }
        case slugs.volunteerism: {
            return <LocalFlorist fontSize={fontSize} color={color}/>;
        }
        default: {
            return <DirectionsWalk fontSize={fontSize} color={color}/>;
        }
    }
}