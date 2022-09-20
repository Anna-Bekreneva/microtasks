import React from "react";

type FooterType = {
    titleForFooter: string
}

export const Footer = (props: FooterType) => {
    return <footer> {props.titleForFooter} </footer>

}