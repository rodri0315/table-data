var table_data = [{
    first_name: 'Rose',
    last_name: 'Tyler',
    home: 'Earth'
  },
  {
    first_name: 'Zoe',
    last_name: 'Heriot',
    home: 'Space Station W3'
  },
  {
    first_name: 'Jo',
    last_name: 'Grant',
    home: 'Earth'
  },
  {
    first_name: 'Leela',
    last_name: null,
    home: 'Unspecified'
  },
  {
    first_name: 'Romana',
    last_name: null,
    home: 'Gallifrey'
  },
  {
    first_name: 'Clara',
    last_name: 'Oswald',
    home: 'Earth'
  },
  {
    first_name: 'Adric',
    last_name: null,
    home: 'Alzarius'
  },
  {
    first_name: 'Susan',
    last_name: 'Foreman',
    home: 'Gallifrey'
  }
];

var drawRow = (first, last, home) => {
  $('#table-data')
      .append(`
      <tr>
        <td> ${first} </td>
        <td> ${last} </td>
        <td> ${home} </td>
      </tr>`)
}

const drawTable = (data) => {
  for (let index = 0; index < data.length; index++) {
    const user = data[index];
    
    if(user.last_name === null) {
      user.last_name = 'n/a'
    }

    drawRow(user.first_name, user.last_name, user.home)
  }
}



drawTable(table_data)