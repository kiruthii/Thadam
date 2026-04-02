import axios from "axios";
const VITE_BACKEND_LIVE_BASE_URL= import.meta.env.VITE_BACKEND_LIVE_BASE_URL;
 
const API_URL = `${VITE_BACKEND_LIVE_BASE_URL}/api/customers`;
 
const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getCustomerById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`, getAuthConfig());
  return res.data.data[0];
};

export const getCustomers = async (search) => {
  const url = search
    ? `${API_URL}?search=${search}`
    : API_URL;
    
  const res = await axios.get(url, getAuthConfig());
  return res.data.data;
};

// export const getCustomers = async () => {
//   const res = await axios.get(API_URL, getAuthConfig());
//   return res.data.data;
// };
 
export const addCustomer = async (data) => {
  const res = await axios.post(API_URL, data, getAuthConfig());
  return res.data;
};
 
export const updateCustomer = async ({ id, data }) => {
  const res = await axios.put(`${API_URL}/${id}`, data, getAuthConfig());
  return res.data;
};
 
export const deleteCustomer = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, getAuthConfig());
  return res.data;
};
 