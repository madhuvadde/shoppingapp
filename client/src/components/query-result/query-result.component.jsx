import React from "react";
import "./query-result.styles.css";
import { Spinner } from "react-bootstrap";

const QueryResult = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <div className="SpinnerContainer">
        <Spinner animation="grow" />
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryResult;
