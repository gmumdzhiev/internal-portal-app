import VisibilityIcon from '@material-ui/icons/Visibility';

const pickRandomCurrency = () => {
  const index = Math.floor(Math.random() * 2);
  const currencies = ['USD', 'EUR'];
  return currencies[index];
};

export const generateRows = (number: number) => {
  let rows: any[] = [];
  for (let index = 0; index < number; index++) {
    rows.push({
      startDate: new Date().toString(),
      endDate: new Date().toString(),
      emissionDate: new Date().toString(),
      country: 'BE', // iso country code
      tollDomain: 'BE-LiefTun',
      invoiceDocument: 'Invoice',
      documentNumber: `BE20_${Math.floor(Math.random() * 100000 + 1)}`,
      amount: {
        amount: Math.floor(Math.random() * 100 + 1),
        currency: pickRandomCurrency(),
      },
      actions: [
        {
          label: 'Preview',
          icon: <VisibilityIcon />,
          onClick: (value: any) => alert(value),
        },
      ],
    });
  }
  return rows;
};
