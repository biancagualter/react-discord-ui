import React from 'react'

import { Container, User, Role, Avatar } from './styles'

interface UserProps {
    nickname: string
    isBot?: boolean
}

const UserRow: React.FC <UserProps> = ({ nickname, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : '' } />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span> }
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Bianca Gualter"/>

            <Role>Offline - 16</Role>
            <UserRow nickname="Fulano de Tal" isBot />
            <UserRow nickname="Sicrano de Tal" />
            <UserRow nickname="Beltrano de Tal" />
            
        </Container>
    )
}

export default UserList