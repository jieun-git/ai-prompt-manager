import { Table, TableProps } from 'antd'
import styled from 'styled-components'

const S_TableWrapper = styled.div`
    border-radius: var(--radius-02);
    // padding: var(--spacing-04);
    //  background-color: transparent;
`
S_TableWrapper.displayName = 'S_TableWrapper'

const S_Table = styled(Table)<TableProps>`
    .ant-table {
        background: transparent;
    }

    .ant-table-thead > tr > th {
        background-color: transparent;
        color: var(--blue-z-02);
        font-weight: bold;
        border-bottom: 0.2rem solid var(--green-z-01);
    }

    .ant-table-thead > tr > th::before {
        background-color: transparent !important;
        opacity: 0.3;
    }

    .ant-table-tbody > tr > td {
        background: transparent;
        color: var(--white);
        border-bottom: 0.1rem solid var(--green-z-01);
    }

    .ant-table-tbody > tr:hover > td {
        background: transparent !important;
    }
`
S_Table.displayName = 'S_Table'

export { S_TableWrapper, S_Table }
