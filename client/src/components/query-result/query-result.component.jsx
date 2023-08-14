import React from "react";
import "./query-result.styles.css";
import { Spinner } from "react-bootstrap";

const QueryResult = ({ error, loading, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (data) {
    return children;
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (loading) {
    return (
      <div className="SpinnerContainer">
        <Spinner animation="grow" />
      </div>
    );
  }
};

export default QueryResult;
