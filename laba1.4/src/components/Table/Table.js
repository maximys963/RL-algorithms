import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

function RLTable(props) {
  const { dataSource, columns } = props;

  // const dataSource = [
  //   {
  //     key: '1',
  //     x: 'Mike',
  //     valuation: 12,
  //     sum: 32,
  //     difference: 23,
  //   },
  //   {
  //     key: '1',
  //     x: 'Mike',
  //     valuation: 12,
  //     sum: 32,
  //     difference: 23,
  //   },
  // ];


  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
    />
  );
}

RLTable.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
};

RLTable.defaultProps = {
  dataSource: [],
  columns: [
    {
      title: 'X',
      dataIndex: 'x',
      key: 'x',
    },
    {
      title: 'Valuation',
      dataIndex: 'valuation',
      key: 'valuation',
    },
    {
      title: 'Sum',
      dataIndex: 'sum',
      key: 'sum',
    },
    {
      title: 'Difference',
      dataIndex: 'difference',
      key: 'difference',
    },
  ],
};

export default RLTable;
