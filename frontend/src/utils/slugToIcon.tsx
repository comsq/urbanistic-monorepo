import React from 'react';
import slugs from '../constants/slugs';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import Fastfood from '@material-ui/icons/Fastfood';
import ChildFriendly from '@material-ui/icons/ChildFriendly';
import CameraAlt from '@material-ui/icons/CameraAlt';
import LocalFlorist from '@material-ui/icons/LocalFlorist';
import LocalGroceryStore from '@material-ui/icons/LocalGroceryStore';
import LocationCity from '@material-ui/icons/LocationCity';

export default function slugToIcon(slug: string) {
    const color = 'inherit';
    switch (slug) {
        case slugs.sport: {
            return <DirectionsWalk color={color}/>;
        }
        case slugs.children: {
            return <ChildFriendly color={color}/>;
        }
        case slugs.culture: {
            return <LocationCity color={color}/>;
        }
        case slugs.masterClasses: {
            return <CameraAlt color={color}/>;
        }
        case slugs.food: {
            return <Fastfood color={color}/>;
        }
        case slugs.shopping: {
            return <LocalGroceryStore color={color}/>;
        }
        case slugs.volunteerism: {
            return <LocalFlorist color={color}/>;
        }
        default: {
            return <DirectionsWalk color={color}/>;
        }
    }
}
