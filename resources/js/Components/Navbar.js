import React from 'react';
import NavLink from '../Components/NavLink';

export default function Navbar() {
    return(
        <>
            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                Dashboard
            </NavLink>
            <NavLink href={route('announcements')} active={route().current('announcements')}>
                Announcements
            </NavLink>
            <NavLink href={route('calendar')} active={route().current('calendar')}>
                Calendar
            </NavLink>
            <NavLink href={route('team')} active={route().current('team')}>
                Team
            </NavLink>
        </>
    )
}