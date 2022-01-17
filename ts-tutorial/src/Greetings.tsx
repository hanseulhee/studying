import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
};

const Greetings = ({ name, mark }: GreetingsProps) => (
  <div>Hello, {name} {mark}</div>
);

Greetings.defaultProps = {
  mark: "!"
}

export default Greetings;