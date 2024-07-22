import { useState,useEffect } from "react";
import { getUsers } from "../Api/api";
import { Tablez } from "../Components/Table";
import { Input } from "../Components/Input";
import { filterUsers } from "../Api/api";
function FirstTask() {
  const [users, setUsers] = useState([])
  const [search,setScreach] = useState<string | null>(null)
  useEffect(() => {
      const fetchUsers = async () => {
          try {
            const usersData = await getUsers();
            setUsers(usersData);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
        
        fetchUsers();
  }, [])
  useEffect(() => {
    const fetchFilteredUsers = async () => {
      try {
        if (search) {
          const filteredUsers = await filterUsers(search);
          setUsers(filteredUsers);
        } else {
          const usersData = await getUsers();
          setUsers(usersData);
        }
      } catch (error) {
        console.error('Error filtering users:', error);
      }
    };

    fetchFilteredUsers();
  }, [search])
  
    return (
      <>
      <h1>Задание 1</h1>
      <Input  setSearch={setScreach} search={search}/>
      <Tablez users={users}/>
      </>
      );
}

export default FirstTask;
// Альтернативный вариант поиска во всем столбцам

// useEffect(() => {
//   if (search) {
//     const lowerCaseTerm = searchTerm.toLowerCase();
//     const filtered = users.filter((user: User) =>
//       user.firstName.toLowerCase().includes(lowerCaseTerm) ||
//       user.lastName.toLowerCase().includes(lowerCaseTerm) ||
//       user.age.toString().includes(lowerCaseTerm) ||
//       user.gender.toLowerCase().includes(lowerCaseTerm) ||
//       user.phone.includes(lowerCaseTerm) ||
//       user.address.city.toLowerCase().includes(lowerCaseTerm) ||
//       user.address.street.toLowerCase().includes(lowerCaseTerm)
//     );
//     setFilteredUsers(filtered);
//   } else {
//     setFilteredUsers(users);
//   }
// }, [search, users]);
