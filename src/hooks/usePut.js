import { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function usePut(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putNow = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axiosClient.put(url, body);
      return { success: true, data: res };
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, putNow };
}
