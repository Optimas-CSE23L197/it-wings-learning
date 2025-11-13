import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function useGet(url, autoFetch = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchNow = async () => {
    if (!url) return;
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.get(url);
      setData(response);
    } catch (err) {
      setError(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) fetchNow();
  }, [url]);

  return { data, loading, error, refetch: fetchNow };
}
