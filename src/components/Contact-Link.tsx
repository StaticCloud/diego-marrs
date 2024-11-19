import styled from "styled-components";
import contact from "../utils/contact-interface";

const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    i[class^="devicon-"] {
        color: ${props => props.theme.secondary};
        margin-right: 7px;
        font-size: 2rem;
    }

    h3 {
        border-bottom: 2px ${props => props.theme.secondary} solid;
    }
`

export default function ContactLink({ contact }: { contact:contact }) {
    return (
        <ContactWrapper>
            {contact.icon && (
                <i className={contact.icon}></i>
            )}
            <a href={contact.link} target="_blank">
                <h3>{contact.name}</h3>
            </a>
        </ContactWrapper>
    );
}

