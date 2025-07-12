import { Button, Tooltip, Search } from '../../components'
import { S_FlexWrapper } from '../styles/Page.style'
import DatasetsTable from './components/table/DatasetsTable'
import { PlusOutlined } from '@ant-design/icons'

const DatasetsContent = () => {
    const handleClickNewDatasets = () => {
        // open modal
    }

    return (
        <S_FlexWrapper flexDirection="column" gap={8}>
            <S_FlexWrapper width="100%" justifyContent="flex-end">
                <Tooltip title="New Datasets">
                    <Button type="text" onClick={handleClickNewDatasets}>
                        <PlusOutlined />
                    </Button>
                </Tooltip>
            </S_FlexWrapper>
            <S_FlexWrapper flexDirection="column">
                <Search placeholder="Search prompt" width="280px" />
                <DatasetsTable />
            </S_FlexWrapper>
        </S_FlexWrapper>
    )
}

export default DatasetsContent
