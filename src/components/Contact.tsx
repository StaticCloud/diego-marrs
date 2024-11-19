import styled from "styled-components";
import Heading from "./Styled-Heading";
import contactImage from "../assets/images/contact.jpg";
import contactInfo from "../data/contact-data";
import ContactLink from "./Contact-Link";

const ContactWrapper = styled.div``;

const ContactContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 6rem 0;
    align-items: center;
`;

const ContactText = styled.div`
    h2 {
        color: ${props => props.theme.secondary};
    }

    span {
        font-weight: bold;
    }

    @media screen and (min-width: 690px) {
        flex: 2 0;
        margin-left: 2rem;
    }
`;

const ContactImage = styled.div`
    aspect-ratio: 1;
    width: 100%;
    background-image: url(${contactImage});
    background-size: contain;
    border-radius: 50%;
    margin-bottom: 2rem;

    @media screen and (min-width: 690px) {
        flex: 1 0;
        margin-bottom: 0;
    }
`;

const LinksWrapper = styled.div``;

export default function Contact() {
    return (
        <ContactWrapper>
            <Heading>Contact</Heading>
            <ContactContent>
                <ContactImage/>
                <ContactText>
                    <h2>Let's get in touch!</h2>
                    <br />
                    <p>Whether you're looking to add new talent to your team, or just wish to make an introduction and stay connected, I'd be happy to chat!</p>
                    <br />
                    <LinksWrapper>
                        {contactInfo.map((contact, i) => 
                            <ContactLink contact={contact} key={i}/>
                        )}
                    </LinksWrapper>
                </ContactText>
            </ContactContent>
        </ContactWrapper>
    );
}