import socialList from '../../data/dataFooter';

const SocialSet = () =>{
    return(
        <ul className="footer__social social">
        {
        socialList.listSocial.items.map(social => <li className="social__item" key={social.id}>{social.faIcon}</li> ) 
        }
    </ul>
    )
}

export default SocialSet;