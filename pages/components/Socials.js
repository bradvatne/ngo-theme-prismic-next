import {RichText} from "prismic-reactjs";

//Current step : map through socials list

const Socials = ({socials}) => {
    console.log("socials: ")
    console.log(socials)
    const main = socials.primary
    const socialsList = socials.items;
    return (
        <RichText render={socials.primary.socials_widget_title}/>
    )
}

export default Socials;