import React     from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

function RLTable(props) {
    const { dataSources, columns} = props;

    return(
        <Table
            dataSource = {dataSources}
            columns    = {columns}
        />
    )
}

RLTable.propTypes = {
    dataSource : PropTypes.array,
    columns     : PropTypes.array,
};

RLTable.defaultProps = {
    dataSource : [],
    columns     : [],
};

export default RLTable;
