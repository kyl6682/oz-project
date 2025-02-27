import styled from "styled-components"
import { SearchIcon } from "./Icons"

const StyledInput = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: ${(props) => props.width};
    height: 56px;
    padding: 16px;
    border-radius: 8px;
    background-color: #f5f5f5;
    input {
        border: none;
        background-color: transparent;
        &:focus {
            outline-style: none;
        }
        ::placeholder {
            color: #656565;
        }
    }
`

export const SearchInput = ({ width }) => {
    return (
        <>
            <StyledInput width={width}>
                <SearchIcon />
                <input placeholder="Search" />
            </StyledInput></>
    )
}