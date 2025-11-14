import { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function usePost(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postNow = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post(url, body);
      return { success: true, data: response };
    } catch (err) {
      setError(err.response?.data?.message || "request failed");
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, postNow };
}
