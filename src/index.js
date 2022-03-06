// styles
import './styles/style.css';
import './styles/scss/_common.scss';
import './styles/scss/_colors.scss';
import './styles/scss/_fonts.scss';
import './styles/preloader.css';
// header
import header from './modules/header/header';
// cover
import cover from './modules/cover/cover';
// contacts
import map from './modules/contacts/contacts';
// principles
import './modules/principles/principles';
// services
import services from './modules/services/services';
// situation
import './modules/situation/situation';
// situations
import './modules/situations/situations';
// feedback
import feedback from './modules/feedback/feedback';
// popup
import closePopup from './modules/popup/popup';
// footer
import './modules/footer/footer';

header();
cover();
services();
feedback();
closePopup();
map([58.60066121, 49.66926593]);
