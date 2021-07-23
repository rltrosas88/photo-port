import React from 'react';
//render function has jest create a simulated DOM in a Node.js environment to approximate the DOM(no component is actually visibly rendered)
//cleanup function is used to remove componenets from the DOM to prevent memory leaking, as well a varable or data collisions between tests that could corrupt test resutls
import { render, cleanup } from '@testing-library/react';
//the jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//this will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    //renders About test
    // First Test is the baseline to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})