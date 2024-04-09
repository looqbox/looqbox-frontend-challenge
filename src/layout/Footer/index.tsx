import EmailIcon from "@/assets/icons/email";
import GithubIcon from "@/assets/icons/github";
import LinkedinIcon from "@/assets/icons/linkedin";
import WhatsappIcon from "@/assets/icons/whatsapp";
import { SocialButton, SocialButtonProps } from "@/components/SocialButton";

import { handleGotoSite } from "@/utils/navigate";

import { Tooltip } from "antd";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
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

export const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
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
        <Tooltip title="Portfolio" color={theme?.pokemon.colors.main.primary}>
          <S.Description
            type="link"
            onClick={() => handleGotoSite('"https://www.larissarabelo.com.br"')}
          >
            www.larissarabelo.com.br
          </S.Description>
        </Tooltip>
      </S.Info>
      <Tooltip title="Poke API" color={theme?.pokemon.colors.main.primary}>
        <S.Image
          src="/assets/images/pokeball-red.png"
          alt="Light theme icon"
          onClick={() => handleGotoSite("https://pokeapi.co/")}
        />
      </Tooltip>
    </S.Container>
  );
};
