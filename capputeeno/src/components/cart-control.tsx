import {styled} from "styled-components";
import { useLocalStore } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius:100%;
    padding:0px 5px;
    font-size:10px;

    background-color: var(--delete-color);
    color:white;

    maegin-left:10px;
`

const Container = styled.div`
    position:relative;
`
export function CartControl(){
    const{value} = useLocalStore('cart-items');
    return(
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}