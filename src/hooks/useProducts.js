import { useState } from "react";
import api from "../api";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAllProducts = async (page, limit, sortBy, order) => {
    try {
      setIsLoading(true);
      const res = await api.getAll(page, limit, sortBy, order);
      setData(res.data);
      // console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [data, getAllProducts, isLoading];
};
export { useProducts };
