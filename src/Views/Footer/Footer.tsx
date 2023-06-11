
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
   return (
    <footer className="footer">
    <div className="container">
     <div className="row justify-content-between">
       <div className="footer-col">
         <h4>Компания</h4>
         <ul>
           <li><a target="_blank" rel="noreferrer" href="https://sfedu.ru/">ЮФУ</a></li>
           <li><a target="_blank" rel="noreferrer" href="#">Политика конфиденциальности</a></li>
         </ul>
       </div>
       <div className="footer-col">
         <h4>Социальные сети</h4>
         <div className="social-links">
           <a target="_blank" href="https://t.me/yborisovp" rel="noreferrer"><FontAwesomeIcon icon={faTelegram}/></a>
         </div>
       </div>
     </div>
    </div>
 </footer>
   )

}
