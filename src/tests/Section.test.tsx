import { render } from '@testing-library/react';
import Section from '../components/Section';
import 'jest-styled-components';

describe('Section Component Tests', () => {
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

    it('Should render a section with multiple child elements.', () => {
        render(
            <Section>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <span>
                    <p>Paragraph</p>
                </span>
            </Section>
        );

        const section = document.querySelector('section');

        expect(section).toContain(document.querySelector('h1'));
        expect(section).toContain(document.querySelector('h2'));
        expect(section).toContain(document.querySelector('span'));
        expect(section).toContain(document.querySelector('p'));
    })
})