import { Table } from '../../../../components'

interface EvaluationResultTableProps {
    data: any
    columns: any
}

const EvaluationResultTable = ({
    data,
    columns,
}: EvaluationResultTableProps) => {
    return <Table columns={columns} dataSource={data} pagination={false} />
}

export default EvaluationResultTable
