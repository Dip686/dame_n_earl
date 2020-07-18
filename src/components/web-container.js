import React from 'react';
import styled from 'styled-components';

const WebContainerEle = styled.div`
  background-color: gray;
`;
export default function WebContainer({props, children}){
return (<WebContainerEle>{children}</WebContainerEle>);
}