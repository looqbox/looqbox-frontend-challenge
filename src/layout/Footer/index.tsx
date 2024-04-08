import EmailIcon from "@/assets/icons/email";
import GithubIcon from "@/assets/icons/github";
import LinkedinIcon from "@/assets/icons/linkedin";
import WhatsappIcon from "@/assets/icons/whatsapp";
import { SocialButton, SocialButtonProps } from "@/components/SocialButton";

import { handleGotoSite } from "@/utils/navigate";

import * as S from "./styles";

const socialsNetwork: SocialButtonProps[] = [
  {
    name: "GitHub",
    me: "@laripeanuts",
    url: "https://github.com/laripeanuts/",
    icon: <GithubIcon />,
  },
  {
    name: "LinkedIn",
    me: "@larisarabelolf",
    url: "https://www.linkedin.com/in/larissarabelolf/",
    icon: <LinkedinIcon />,
  },
  {
    name: "Whatsapp",
    me: "+55 (85) 998709-0655",
    url: "https://wa.me/5585987090655",
    icon: <WhatsappIcon />,
  },
  {
    name: "E-mail",
    me: "larissarabelolf@gmail.com",
    url: "mailto:larissarabelolf@gmail.com",
    icon: <EmailIcon />,
  },
];
console.log("🚀 ~ socialsNetwork:", socialsNetwork);

export const Footer = () => (
  <S.Container>
    <S.Social>
      {socialsNetwork.map((social) => (
        <SocialButton
          key={social.name}
          name={social.name}
          me={social.me}
          url={social.url}
          icon={social.icon}
        />
      ))}
    </S.Social>
    <S.Info>
      <S.Text>Developed by Larissa Rabelo</S.Text>
      <S.Description
        type="link"
        onClick={() => handleGotoSite('"https://www.larissarabelo.com.br"')}
      >
        www.larissarabelo.com.br
      </S.Description>
    </S.Info>
    <S.Image
      src="/assets/images/pokeball-red.png"
      alt="Light theme icon"
      onClick={() => handleGotoSite("https://pokeapi.co/")}
    />
  </S.Container>
);
