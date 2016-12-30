import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

// Intro to shallow rendering
const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}!</div>
  </div>
);

// with shallow components are rendered one level deep
describe('CoolComponent', () => {
  it('should...', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting="hello world" />);
    // const output = renderer.getRenderOutput();
    // console.log(output);
    const actual = renderer.getRenderOutput();
    const expected = <div>hello world!</div>;
    expect(actual).toIncludeJSX(expected);
  });
});
