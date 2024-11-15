import pretty from 'pretty';
import { render } from '@testing-library/react';
import Section from '../components/Section';
import 'jest-styled-components';

describe('Section Component Tests', () => {
    it('Should render a section with desired styling.', () => {
        render(
            <Section>
                <p>Hello world!</p>
            </Section>
        );

        const section = document.querySelector('section');
    
        expect(section).toHaveStyleRule('background-color', '#1E3554');
    })

    it('Should render a section with one child element.', () => {
        render(
            <Section>
                <p>Hello world!</p>
            </Section>
        );

        const text = document.querySelector('p');

        expect(text?.textContent).toBe('Hello world!');
    })

    it('Should render a section with a background image.', () => {
        render(
            <Section background='test.png'>
                <p>Hello world!</p>
            </Section>
        );

        const section = document.querySelector('section');

        expect(section).toHaveStyleRule('background-image', 'test.png');
    })
})