import styled from 'styled-components';

type SearInputProps = {
    icon?: any
    placeholder?: string
    style?: object
}

const InputWrapper = styled.div`
    display: flex;
    width:19rem;
    height: 2rem;
    align-items: center;
    border-radius: 5px;
    gap: 12px;
    padding-left: 10px;
    background-color:#eff2f8;
    input{
        background-color:#eff2f8;
        border: none;
        padding: 2px;
        outline: none;
        width:19rem;
        height: 2rem;
        font-size: 1rem;
        
    }
`
const SearchInput = (props: SearInputProps) => {
    const { icon, placeholder, style } = props
    return (
        <InputWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" className="mercado-match" width="25" height="18" focusable="false">
                <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
            <input type="text" placeholder={placeholder} style={style} />
        </InputWrapper>
    )
}

export default SearchInput