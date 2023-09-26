import styled from 'styled-components';
import SubHeader from '../../components/SubHeader';
import {gql, useQuery} from "@apollo/client";
import ProductItem from "../../components/ProductItem";

const ProductItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 2% 5%;
`;

const GET_PRODUCTS = gql`
    query getProducts {
        products {
            id
            title
            price
            thumbnail
        }
    }
`;

function Products() {
    const {loading, data} = useQuery(GET_PRODUCTS);

    return (
        <>
            <SubHeader title='Available products' goToCart/>
            {
                loading
                    ? <span>Loading...</span>
                    : (
                        <ProductItemsWrapper>
                            {data &&
                                data.products &&
                                data.products.map(product => (
                                    <ProductItem
                                        key={product.id}
                                        data={product}
                                    />
                                ))}
                        </ProductItemsWrapper>
                    )
            }
        </>
    );
}

export default Products;
