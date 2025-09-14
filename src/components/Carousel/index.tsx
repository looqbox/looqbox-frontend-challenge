import { Carousel } from 'antd';
import imgAsh from '../../assets/image/ash.png';
import imgBrock from '../../assets/image/brock.png';
import imgMisty from '../../assets/image/misty.png';
import * as S from './styles';

const items = [
  {
    title: 'Ash Ketchum',
    desc: 'Treinador determinado e sonhador, sempre em busca de se tornar um Mestre Pokémon. Sua coragem e amizade com Pikachu são suas maiores marcas.',
    img: imgAsh,
    bg: 'ash' as const,
  },
  {
    title: 'Misty',
    desc: 'Líder do Ginásio de Cerulean, especialista em Pokémon do tipo Água. Forte, confiante e companheira de jornada de Ash, traz equilíbrio e firmeza ao grupo.',
    img: imgMisty,
    bg: 'misty' as const,
  },
  {
    title: 'Brock',
    desc: 'Líder do Ginásio de Pewter e especialista em Pokémon do tipo Pedra. Cuidadoso e responsável, atua como guia e “irmão mais velho” durante as aventuras.',
    img: imgBrock,
    bg: 'brock' as const,
  },
];

export default function HeaderCarousel() {
  return (
    <S.Container>
      <Carousel autoplay autoplaySpeed={7000}>
        {items.map((item) => (
          <S.Slide key={item.title} $bg={item.bg}>
            <S.ContentLeft>
              <S.Title>{item.title}</S.Title>
              <S.SubTitle>{item.desc}</S.SubTitle>
            </S.ContentLeft>
            <S.Image src={item.img} alt={item.title} />
          </S.Slide>
        ))}
      </Carousel>
    </S.Container>
  );
}
