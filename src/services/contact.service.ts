import axiosInstance from "@/config/axios.config";

const contactService = {
  contact: async (data: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject: string;
    message: string;
  }) => {
    const response = await axiosInstance.post("/general/contact", data);
    return response.data;
  },
};
export default contactService;
