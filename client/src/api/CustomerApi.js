import axios from "axios";
const VITE_BACKEND_LIVE_BASE_URL= import.meta.env.VITE_BACKEND_LIVE_BASE_URL;
 
const CUSTOMER_API_URL = `${VITE_BACKEND_LIVE_BASE_URL}/api/customers`;
 
const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getCustomerById = async (id) => {
  const res = await axios.get(`${CUSTOMER_API_URL}/${id}`, getAuthConfig());
  return res.data.data[0];
};

export const getCustomers = async (search,location,role,designation) => {
  let url =CUSTOMER_API_URL;

  const params = [];

  if (search) params.push(`search=${search}`);
  if (location) params.push(`location=${location}`);
  if (role) params.push(`role=${role}`)
  if (designation) params.push(`designation=${designation}`)

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  const res = await axios.get(url, getAuthConfig());
  return res.data.data;
};

export const getCustomerFilter = async() => {
  const res = await axios.get(`${CUSTOMER_API_URL}/filters`, getAuthConfig())
  return res.data.data
}


 
export const addCustomer = async (data) => {
  const res = await axios.post(CUSTOMER_API_URL, data, getAuthConfig());
  return res.data;
};
 
export const updateCustomer = async ({ id, data }) => {
  const res = await axios.put(`${CUSTOMER_API_URL}/${id}`, data, getAuthConfig());
  return res.data;
};
 
export const deleteCustomer = async (id) => {
  const res = await axios.delete(`${CUSTOMER_API_URL}/${id}`, getAuthConfig());
  return res.data;
};
 