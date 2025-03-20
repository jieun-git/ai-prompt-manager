import React from 'react'
import {
    RobotFilled,
    FileTextOutlined,
    LikeOutlined,
    DatabaseOutlined,
    RightOutlined
} from '@ant-design/icons';
import {S_HomeContent, S_HomeWrapper, S_HomeTitle, S_HomeMenuWrapper, S_HomeMenu} from "./Home.style";

const Home = () => {
    return <S_HomeWrapper>
        <S_HomeContent>
            <S_HomeTitle
            >
                <RobotFilled /> &nbsp;AI PROMPT MANAGER
            </S_HomeTitle>
            <S_HomeMenuWrapper>
                <S_HomeMenu><span><FileTextOutlined /> Prompt</span><RightOutlined /></S_HomeMenu>
                <S_HomeMenu><span><LikeOutlined /> Evaluation </span><RightOutlined /></S_HomeMenu>
                <S_HomeMenu><span><DatabaseOutlined /> Data</span><RightOutlined /></S_HomeMenu>
            </S_HomeMenuWrapper>
        </S_HomeContent>
    </S_HomeWrapper>
}

export default Home
