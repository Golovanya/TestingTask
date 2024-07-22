import { Table, TableColumn } from "@consta/uikit/Table";
import { Users } from "../types";
interface TablezProps {
    users: Users;
}
export const Tablez: React.FC<TablezProps> = ({ users }) => {
    const data = users.map(user => ({
        id: user.id.toString(),
        fullName: `${user.firstName} ${user.lastName}`,
        age: user.age,
        gender: user.gender,
        phone: user.phone,
        address: `${user.address.address}, ${user.address.city}`
    }));  
    const columns: TableColumn<(typeof data)[number]>[] = [
      { title: "ФИО", accessor: "fullName" },
      { title: "Возраст", accessor: "age" },
      { title: "Пол", accessor: "gender" },
      { title: "Номер телефона", accessor: "phone" },
      { title: "Адрес", accessor: "address" },
    ];
  return <Table columns={columns} rows={data}/>;
}

