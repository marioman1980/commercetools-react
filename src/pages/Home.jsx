import { gql } from 'graphql-request';
import { useEffect, useState } from 'react';

import commercetools from '../utils/commercetools';

// import shopify from "../utils/shopify";
// import ProductCard from '../components/ProductCard';

const Home = () => {

  const getCustomers = async () => {
    const query = gql`
      query getCustomers {
        customers {
          results {
            id
            firstName
          }
        }
      }
   `;
    const data = await commercetools(query, {});
    console.log(data);
  }

	useEffect(() => {
		getCustomers();
	}, []);  

  return (
    <h1>Home</h1>
  )
}

export default Home;