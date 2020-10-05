import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";

const GET_USER = gql`
  query {
    org: organization(login: "facebook") {
      name
      description
    }
  }
`;
export default function Test(params) {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div>
      <p>{data.org.name}</p>
      <p>{data.org.description}</p>
    </div>
  );
}
