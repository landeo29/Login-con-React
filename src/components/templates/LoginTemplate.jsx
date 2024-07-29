import styled from "styled-components";
import { Btnsave, v,useAuthStore } from "../../index";
export function LoginTemplate() {
  const {signInWithGoogle} = useAuthStore();
  return (
    <Container imgfondo={v.imagenfondo}>
      <div className="contentCard">
        <div className="contentImg">
          <img src={v.logo}/>
        </div>
        <Titulo>UNDC</Titulo>
        <p className="frase">Registra tu matricula aqui</p>
        <ContainerBtn>
          <Btnsave titulo="Iniciar con google" icono={<v.iconogoogle />} bgcolor={v.colorSecundario} funcion={signInWithGoogle}/>
        </ContainerBtn>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-image: url(${(props) => props.imgfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;

  .contentCard {
    background-color: #D8D8D8;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
  }

    .contentImg {
      img {
        max-width: 60%;
        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }

    .frase {
      color: #000000;
      font-size: 1.2rem;
    }
  }

  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  
`;
