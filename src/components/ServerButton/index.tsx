import React from 'react'
import { Button, ImgSvg } from './styles'
import chat from '../../assets/chat.svg'

export interface Props {
    isSelected?: boolean
    isHome?: boolean
    hasNotifications?: boolean
    mentions?: number
}

const ServerButton: React.FC <Props> = ({
    isSelected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={isSelected ? 'active' : ''}

        >
            {isHome && <ImgSvg src={chat} />}
        </Button>
    )
}

export default ServerButton