import styled from '@emotion/styled';

const Wrapper = styled('div')`
    background: ${props => props.theme.background};
    color: ${props => props.theme.body};
    hr {
        border-top: ${({ themeState }) => {
            if (themeState.dark) {
                return '1px solid rgba(255,255,255,.1)';
            }
            return '1px solid rgba(0,0,0,.1)';
        }}
    };
    transition: ${({ themeState }) => {
        if (themeState.dark) {
            return 'all 0.5s ease 0s';
        }
        return '0.5s';
    }}
`;

export default Wrapper;