import {Table, TableProps} from 'antd'
import styled from 'styled-components'

const S_TableWrapper = styled.div`
    border-radius: var(--radius-02);
    padding: var(--spacing-04);
    background-color: var(--white);
`
S_TableWrapper.displayName = 'S_TableWrapper'

const S_Table = styled(Table)<TableProps>`
    .ant-table-thead > tr > th {
        background-color: var(--blue-z-02);
        color: var(--gray-06);
        font-weight: bold;
    }

    .ant-table-thead > tr > th::before {
        background-color: var(--blue-z-04) !important;
        opacity: 0.3;
    }
`
S_Table.displayName = 'S_Table'


export {
    S_TableWrapper, S_Table
}
