import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllIssues } from "../Redux/Actions/issueAction";
import { getAllRows } from "../Redux/Actions/rowAction";

export function useFetch(initialActions: any) {
  const [actions] = useState(initialActions);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await Promise.all(
          Object.values(actions).map((action) => dispatch(action))
        );
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, actions]);

  return { loading };
}
