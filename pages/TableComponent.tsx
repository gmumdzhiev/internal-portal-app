import {
  SearchState,
  SortingState,
  FilteringState,
  PagingState,
  IntegratedSorting,
  IntegratedFiltering,
  IntegratedPaging,
  DataTypeProvider,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  Toolbar,
  SearchPanel,
  TableHeaderRow,
  ColumnChooser,
  TableColumnVisibility,
  TableFilterRow,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import ReactCountryFlag from 'react-country-flag';
import { Button, Paper } from '@material-ui/core';
import { generateRows } from '../utils/testDataGenerator';
import { Fragment, useState } from 'react';

const CountryFormatter = ({ value }: any) => <ReactCountryFlag countryCode={value} svg />;

const CountryTypeProvider = (props: any) => (
  <DataTypeProvider formatterComponent={CountryFormatter} {...props} />
);

const CurrencyFormatter = ({ value }: any) =>
  value.amount.toLocaleString('fr-FR', {
    style: 'currency',
    currency: value.currency,
  });

const CurrencyTypeProvider = (props: any) => (
  <DataTypeProvider formatterComponent={CurrencyFormatter} {...props} />
);

const ActionsFormatter = ({ value, row }: any) => {
  return (
    <Fragment>
      {value.map((action: any, index: any) => {
        return (
          <Button
            key={index}
            startIcon={action.icon}
            onClick={() => action.onClick(row.documentNumber)}
          >
            {action.label}
          </Button>
        );
      })}
    </Fragment>
  );
};

const ActionsTypeProvider = (props: any) => (
  <DataTypeProvider formatterComponent={ActionsFormatter} {...props} />
);

const TableComponent = () => {
  const [columns] = useState([
    { name: 'startDate', title: 'Start Date' },
    { name: 'endDate', title: 'End Date' },
    { name: 'emissionDate', title: 'Emission Date' },
    { name: 'country', title: 'Country' },
    { name: 'tollDomain', title: 'Toll Domain' },
    { name: 'invoiceDocument', title: 'Invoice Document' },
    { name: 'documentNumber', title: 'Document Number' },
    { name: 'amount', title: 'Amount' },
    { name: 'actions', title: 'Actions' },
  ]);
  const [rows] = useState(generateRows(100));

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        {/* First, Costum provider */}
        <CountryTypeProvider for={['country']} />
        <CurrencyTypeProvider for={['amount']} />
        <ActionsTypeProvider for={['actions']} />
        <SearchState />
        <FilteringState defaultFilters={[]} />
        <SortingState defaultSorting={[]} />
        <PagingState defaultCurrentPage={0} pageSize={5} />
        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <Table />
        <TableHeaderRow showSortingControls />
        <TableColumnVisibility />
        <TableFilterRow />
        <Toolbar />
        <ColumnChooser />
        <SearchPanel />
        <PagingPanel />
      </Grid>
    </Paper>
  );
};

export default TableComponent;
