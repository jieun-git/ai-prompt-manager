import { S_BoxContainer, S_FlexWrapper } from '../styles/Page.style'
import PromptDetailCard, {PromptDetailCardProps} from "./components/card/PromptDetailCard";

const cardDetails = [
    {
        version: 'Ver.1',
        systemPrompt: 'ver1 system,ver1 system,ver1 system,ver1 system,ver1 system,ver1 system, ver1 system,ver1 system,ver1 system,ver1 system,ver1 system,ver1, ver1 system,ver1 system,ver1 system,ver1 system,ver1 system,ver1',
        userPrompt: 'ver1 user,ver1 user,ver1 user,ver1 user,ver1 user,ver1 user,',
        assistantPrompt: 'ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,',
        isActive: false,
        isDelete: false,
    },
    {
        version: 'Ver.2',
        systemPrompt: 'ver2 system,ver2 system,ver2 system,ver1 system,ver1 system,ver1 system,',
        userPrompt: 'ver2 user,ver2 user,ver2 user,ver1 user,ver1 user,ver1 user,',
        assistantPrompt: 'ver2 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,',
        isActive: false,
        isDelete: false,
    },
    {
        version: 'Ver.3',
        systemPrompt: 'ver3 system,ver3 system,ver3 system,ver1 system,ver1 system,ver1 system,',
        userPrompt: 'ver3 user,ver1 user,ver3 user,ver1 user,ver1 user,ver1 user,',
        assistantPrompt: 'ver3 assistant,ver3 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,',
        isActive: false,
        isDelete: false,
    },
    {
        version: 'Ver.4',
        systemPrompt: 'ver4 system,ver1 system,ver1 system,ver1 system,ver1 system,ver1 system,',
        userPrompt: 'ver5 user,ver1 user,ver1 user,ver1 user,ver1 user,ver1 user,',
        assistantPrompt: 'ver4 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,',
        isActive: false,
        isDelete: false,
    },
    {
        version: 'Ver.5',
        systemPrompt: 'ver5 system,ver1 system,ver1 system,ver1 system,ver1 system,ver1 system,',
        userPrompt: 'ver5 user,ver1 user,ver1 user,ver1 user,ver1 user,ver1 user,',
        assistantPrompt: 'ver5 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,ver1 assistant,',
        isActive: false,
        isDelete: false,
    },
]

const PromptDetailPage = () => {
    return <S_BoxContainer>
        <S_FlexWrapper
            gap={12}
        >
            {
                cardDetails.map((detail: PromptDetailCardProps) => (
                    <PromptDetailCard
                        key={detail.version}
                        version={detail.version}
                        systemPrompt={detail.systemPrompt}
                        userPrompt={detail.userPrompt}
                        assistantPrompt={detail.assistantPrompt}
                        isActive={detail.isActive}
                        isDelete={detail.isDelete}
                    />
                ))
            }
        </S_FlexWrapper>
    </S_BoxContainer>
}

export default PromptDetailPage;
