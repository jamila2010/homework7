import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  const [api, setApi] =useState("https://jsonplaceholder.typicode.com/users")


  useEffect(() => {
    axios
      .get(api)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [api]);

  return (
    <div className="flex flex-col">
      <h1 className="text-slate-950 font-bold text-[30px] mt-5">Users</h1>

      <div className="flex gap-[15px] items-center mt-7">
        <button className="bg-slate-950 rounded-lg p-2.5">New</button>
        <button className="bg-slate-950 rounded-lg p-2.5">Add Filter</button>
      </div>

      <p className="text-blue-500">API documentation for users</p>

      <div className="max-h-70 max-w-300 overflow-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          Users table
          <thead className="sticky top-0 bg-white ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900">
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Email</th>
              <th className="px-3 py-2 whitespace-nowrap">Username</th>
              <th className="px-3 py-2 whitespace-nowrap">City</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="*:text-gray-900 *:first:font-medium"
              >
                <td className="px-3 py-2 whitespace-nowrap">{user.name}</td>
                <td className="px-3 py-2 whitespace-nowrap">{user.email}</td>
                <td className="px-3 py-2 whitespace-nowrap">{user.username}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {user.address.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
