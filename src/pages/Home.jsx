import React from "react";

function Home() {
  return (
  <div className="flex flex-col">
    <h1 className="text-slate-950 font-bold text-[30px] mt-5 ">Users</h1>
    <div className="flex gap-[15px] items-center mt-7 ">
        <button className="bg-slate-950 rounded-lg p-2.5  ">New</button>
        <button className="bg-slate-950 rounded-lg p-2.5  ">Add Filter</button>
    </div>
    <p className="text-blue-500"> API documentation for users </p>
      <div class="max-h-70  max-w-300 overflow-auto  ">
        
      <table class="min-w-full divide-y-2 divide-gray-200 ">
        <thead class="sticky top-0 bg-white ltr:text-left rtl:text-right">
          <tr class="*:font-medium *:text-gray-900">
            <th class="px-3 py-2 whitespace-nowrap">Name</th>
            <th class="px-3 py-2 whitespace-nowrap">DoB</th>
            <th class="px-3 py-2 whitespace-nowrap">Role</th>
            <th class="px-3 py-2 whitespace-nowrap">Salary</th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Nandor the Relentless</td>
            <td class="px-3 py-2 whitespace-nowrap">04/06/1262</td>
            <td class="px-3 py-2 whitespace-nowrap">Vampire Warrior</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Laszlo Cravensworth</td>
            <td class="px-3 py-2 whitespace-nowrap">19/10/1678</td>
            <td class="px-3 py-2 whitespace-nowrap">Vampire Gentleman</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Nadja</td>
            <td class="px-3 py-2 whitespace-nowrap">15/03/1593</td>
            <td class="px-3 py-2 whitespace-nowrap">Vampire Seductress</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Colin Robinson</td>
            <td class="px-3 py-2 whitespace-nowrap">01/09/1971</td>
            <td class="px-3 py-2 whitespace-nowrap">Energy Vampire</td>
            <td class="px-3 py-2 whitespace-nowrap">$53,000</td>
          </tr>

          <tr class="*:text-gray-900 *:first:font-medium">
            <td class="px-3 py-2 whitespace-nowrap">Guillermo de la Cruz</td>
            <td class="px-3 py-2 whitespace-nowrap">18/11/1991</td>
            <td class="px-3 py-2 whitespace-nowrap">Familiar/Vampire Hunter</td>
            <td class="px-3 py-2 whitespace-nowrap">$0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Home;
