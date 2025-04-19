import EvaluationProgressForm from './components/form/EvaluationProgressForm'
import EvaluationAnalysisForm from './components/form/EvaluationAnalysisForm'
import { S_FlexWrapper } from '../styles/Page.style'

const ProceedEvaluation = () => {
    return (
        <S_FlexWrapper flexDirection="column" gap={24} padding="16px">
            <EvaluationProgressForm />
            <EvaluationAnalysisForm />
        </S_FlexWrapper>
    )
}

export default ProceedEvaluation
