import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Building2,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

function UserData() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    

  }, []);
  const handleSearch = () => {
    const results = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.city.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.street.toLowerCase().includes(searchTerm.toLowerCase())||
        user.address.zipcode.toLowerCase().includes(searchTerm.toLowerCase())||
        user.company.name.toLowerCase().includes(searchTerm.toLowerCase())||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
    setCurrentPage(1);
  };

  

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    if (indexOfLastUser < filteredUsers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-slate-300 border-t-blue-600 mb-4"></div>
          <p className="text-slate-600 text-lg">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-slate-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen p-6 sm:p-10">
   
      <div className="text-center mb-10">
        <div className="inline-flex justify-center rounded-full w-16 h-16 mb-4 items-center bg-blue-500">
          <User className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-slate-800">User Directory</h1>
      </div>

   
      <div className="flex flex-col sm:flex-row justify-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search by name or username..."
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value);
            handleSearch();
          }}
          className="bg-white border border-slate-300 rounded-xl px-4 py-2 w-full sm:w-1/3 outline-none"
        />
        
      </div>

     
      <div className="overflow-x-auto w-[95%] mx-auto bg-white rounded-2xl shadow-md">
        <table className="w-full border-collapse">
          <thead className="bg-blue-500 text-white text-left">
            <tr>
              <th className="py-3 px-4">Name & Username</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Company</th>
              <th className="py-3 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-200 hover:bg-slate-50 transition"
                >
                  <td className="py-3 px-4 text-slate-800">
                    <div>
                      <span className="font-semibold">{user.name}</span>
                      <br />
                      <span className="text-slate-500 text-sm">
                        @{user.username}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-700">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-500" />
                      <span>
                        {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-700">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-blue-500" />
                      <span>{user.company.name}</span>
                      
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-700">
                    <div className="flex items-center gap-2">
                      <Mail size={16} className="text-blue-500" />
                      <span>{user.email}</span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-6 text-center text-slate-500 font-medium"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    
      <div className="flex justify-center mt-8 items-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          <ChevronLeft size={18} /> Prev
        </button>
        <span className="text-slate-700 font-semibold">
          Page {currentPage} of {Math.ceil(filteredUsers.length / usersPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={indexOfLastUser >= filteredUsers.length}
          className={`flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl ${
            indexOfLastUser >= filteredUsers.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default UserData;
