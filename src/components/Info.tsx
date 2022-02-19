import React from 'react';

interface IProps {
  a: string;
  b: number;
  c: boolean;
}

class Info extends React.Component {
  componentWillUnmount() {
    console.log("<Info /> has trigger componentWillUnmount()")
  }
  render(): React.ReactNode {
      return <h1>hai</h1>;
  }
}

export default Info;