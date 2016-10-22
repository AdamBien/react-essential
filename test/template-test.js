import React from 'react';
import { renderIntoDocument, findRenderedDOMComponentWithTag } from 'react-addons-test-utils';
import assert from 'assert';
import Template from '../src/Template';

describe('Template', () => {
    const expected = 'duke 42';
    it(`renders ${expected}`, () => {
        const component = renderIntoDocument(<Template />);
        const rendered = findRenderedDOMComponentWithTag(component, "div");
        assert.equal(rendered.textContent, expected);
    });
});
