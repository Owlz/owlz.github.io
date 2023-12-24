
import { withTranslation } from "react-i18next";
import BackgroundSlider from 'react-background-slider';

import { SvgIcon } from "../../common/SvgIcon";
import { WelcomeScreen, WelcomeContent } from "./styles";

interface FullscreenBlockProps {
  title: string;
  content: string;
  logo: string;
  t: any;
}

const FullscreenBlock = ({ title, content, logo, t }: FullscreenBlockProps) => {
  // @ts-ignore Workaround for bug on react-background-slider 
  const Slider = BackgroundSlider['react-background-slider'].default;
  const bgImages = ['/img/pictures/_DSC5993.jpg', '/img/pictures/_FUR9211.jpg', '/img/pictures/DSC02475.jpg', '/img/pictures/PFOX2332.jpg'];

  return (
    <WelcomeScreen >
      <Slider images={bgImages} duration={3} transition={0.5} />
      <WelcomeContent>
        <img src={logo} />
        <h1>
          {title}
        </h1>
        <p>{content}</p>
      </WelcomeContent>
      <SvgIcon src={"chevron.svg"} width="100%" height="150px" />
    </WelcomeScreen>
  );
};

export default withTranslation()(FullscreenBlock);
