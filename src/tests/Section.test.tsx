import pretty from 'pretty';
import { render } from '@testing-library/react';
import Section from '../components/Section';

describe('Section', () => {
    it('Should render a section with one child element.', () => {
        render(
            <Section>
                <p>Hello world!</p>
            </Section>
        );

        const text = document.querySelector('p');

        expect(text?.textContent).toBe('Hello world!');
    })
})