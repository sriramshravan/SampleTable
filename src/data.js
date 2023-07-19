export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'email',
    headerName: 'EmailId',
    width: 150,
    editable: true,
  },
  {
    field: 'sal',
    headerName: 'Salary',
    type: 'number',
    width: 110,
    editable: true,
  },
];

export const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 3.5, email: 'tes1t@test.com', sal: 100000.89 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'test2@test.com', sal: 100001.89  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'test3@test.com', sal: 100002.89  },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,  email: 'test4@test.com', sal: 100003.89 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: 'test5@test.com', sal: 100004.89  },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, email: 'test6@test.com', sal: 1000005.89  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'tes7t@test.com', sal: 1000060.89  },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'test8@test.com', sal: 1007000.89  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'test9@test.com', sal: 1008000.89  },
];