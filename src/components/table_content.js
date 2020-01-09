import React from 'react';
import Navigation from '../utils/navigation';
import * as styled from './table_content.styled';

function TableOfContent() {
  return (
    <div>
      <styled.Header><h1>Sommaire</h1></styled.Header>
      <styled.Ul>
        <styled.Li className="who"><a href={"#" + Navigation.whoIsIt.page}>{Navigation.whoIsIt.label}</a></styled.Li>
      </styled.Ul>
    </div>
  );
}

export { TableOfContent };

