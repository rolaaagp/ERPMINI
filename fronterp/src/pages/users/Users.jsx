import { useFetch } from "../../providers/getters/useFetch";

import { Table, TableTH, TableTD } from "../../styled/Table";

export default function Users() {
  const { data } = useFetch("http://localhost:3000/users/");

  return (
    <>
      <h1>Users!</h1>

      <Table>
        <thead>
          <TableTH>#</TableTH>
          <TableTH>Nombre</TableTH>
          <TableTH>Apellido</TableTH>
          <TableTH>Email</TableTH>
          <TableTH>Genero</TableTH>
        </thead>
        <tbody>
          {data?.map((d) => (
            <tr key={d.id}>
              <TableTD key={d.id}>{d.id}</TableTD>
              <TableTD key={d.id}>{d.first_name}</TableTD>
              <TableTD key={d.id}>{d.last_name}</TableTD>
              <TableTD key={d.id}>{d.email}</TableTD>
              <TableTD key={d.id}>{d.gender}</TableTD>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
