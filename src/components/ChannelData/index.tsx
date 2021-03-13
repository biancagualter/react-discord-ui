import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
    let dateinfo = new Date()
    const day = dateinfo.toLocaleDateString()

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if(div) {
            div.scrollTop = div.scrollHeight
        }
    }, [messagesRef])

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="Beltrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Bianca Gualter"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Beltrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Sicrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Sicrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Beltrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Sicrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Bianca Gualter"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Beltrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Sicrano de Tal"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Bianca Gualter"
                    date={day}
                    content="Isso é uma mensagem" 
                />
                <ChannelMessage 
                    author="Fulano de Tal"
                    date={day}
                    content={
                        <>
                            <Mention>@Bianca Gualter </Mention>
                            It`s Britney, Bitch!
                        </>
                    }
                    hasMention
                    isBot 
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData