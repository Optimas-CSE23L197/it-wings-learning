import { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function useDelete(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteNow = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axiosClient.delete(url);
      return { success: true, data: res };
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, deleteNow };
}
