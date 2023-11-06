import React from 'react'
import Header from '../Header'
import Fondo from "../../asset/fondo/leones.png";
import Facebook from "../../asset/redes/facebook.png";
import Instagram from "../../asset/redes/instagram.png";
import Twitter from "../../asset/redes/twitter.png";
import Youtube from "../../asset/redes/youtube.png";
import Tiktok from "../../asset/redes/tiktok.png";
import Udeg from "../../asset/universidad/udeg.png";
import Cucei from "../../asset/universidad/cucei.png";
import Leonesnegros from "../../asset/universidad/leonesnegros.png";
import Footer from '../Footer';


function PageNoticias() {
  const BlogEntry = ({ imageUrl, title, description, link }) => {

    const pStyle = "text-white  font-bold text-center ";
    const entryStyle = "text-center";
    const imageStyle = "w-full max-w-full md:max-w-md";

    return (
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} className={imageStyle} />
          <div className=' bg-slate-800 bg-opacity-40  px-5 py-3 rounded-bl-md rounded-br-md '>
             <h3  className="text-white text-2xl font-bold lg:text-lg text-justify ">{title}</h3>
          <p className="text-base text-gray-400">{description}</p>
          </div>
         
        </a>
      </div>
    );
  };

  return (
    <div style={{backgroundColor: "#020d2e"}}>
      <Header></Header>
      
      <div className="container mx-auto  md:block" >
        <div class="grid lg:grid-cols-4 lg:gap-6 grid-cols-1 gap-6">
          <div class="mt-48">
            <div class="py-7">
              <BlogEntry
                imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/neymar_brasil_1.jpg?itok=LZTGkWNa&changed=1698977873"
                title="Neymar fue operado con éxito y recibirá el alta médica en las próximas 48 horas."
                description="El extremo brasileño del Al Hilal se lesionó en las Eliminatorias CONMEBOL ante Uruguay."
                link="https://www.record.com.mx/futbol-futbol-internacional-internacionales/neymar-fue-operado-con-exito-y-recibira-el-alta-medica"
              />
            </div>
            <BlogEntry
              imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/hnchada_de_boca_1.jpg?itok=R4rJx-Hv&changed=1698979905"
              title="Líder de la hinchada de Boca Juniors amenaza con buscar a la barra del Fluminense tras su llegada."
              description="Uno de los líderes de La 12 aseguró que se enfrentarán a golpes con la hinchada brasileña."
              link="https://www.record.com.mx/futbol-futbol-internacional-internacionales/lider-de-la-hinchada-de-boca-juniors-amenaza-con-buscar"
            />
          </div>
          <div class="mt-48">
            <div class="py-7">
              <BlogEntry
                imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/ap23306077500234_1_1.jpg?itok=z0jPO1Tt&changed=1698976311"
                title="Jugadores de los Atlanta Hawks probaron el pan de muerto y sus reacciones fueron memorables."
                description="El equipo dirigido por Quin Snyder jugará por primera vez en México la próxima semana"
                link="https://www.record.com.mx/empelotados/jugadores-de-los-atlanta-hawks-probaron-el-pan-de-muerto-y-sus-reacciones-fueron"
              />
            </div>
            <BlogEntry
              imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/20231101_1050_1.jpg?itok=U80OvHvh&changed=1698968985"
              title="Liga MX: Fechas, horarios y canales para ver la Jornada 16 del Apertura 2023."
              description="En Bet Odds UdeG te damos todos los detalles para seguir de cerca la penúltima jornada del AP2023"
              link="https://www.record.com.mx/futbol-liga-mx-noticias/liga-mx-fechas-horarios-y-canales-para-ver-la-jornada-16-del-apertura-2023"
            />
          </div>
          <div class="mt-48">
            <div class="py-7">
              <BlogEntry
                imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/checo_principal_1.jpg?itok=N28wTwSa&changed=1698981834"
                title="Checo Pérez: ¿Cuándo y dónde ver el Gran Premio de Brasil de F1?"
                description="El Circuito de Interlagos será sede de la antepenúltima fecha de la temporada 2023 de Fórmula 1."
                link="https://www.record.com.mx/formula1/checo-perez-cuando-y-donde-ver-el-gran-premio-de-brasil-de-f1"
              />
            </div>
            <BlogEntry
              imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/randy.jpg?itok=7v3JDq13&changed=1698964849"
              title="Randy Arozarena tras recibir el Premio Nacional del Deporte: 'Nunca jugué con tanta pasión'."
              description="El jugador recordó con emoción lo vivido en el Clásico Mundial de Beisbol."
              link="https://www.record.com.mx/beisbol/randy-arozarena-tras-recibir-el-premio-nacional-del-deporte-nunca-jugue-con-tanta-pasion"
            />
          </div>
          <div class="mt-48">
            <div class="py-7">
              <BlogEntry
                imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/f99yqdvaaaafuds_1_0.jpg?itok=rgAyiUPG&changed=1698980952"
                title="¡Histórica plaza! La selección mexicana de gimnasia rítmica logró su boleto a los juegos olímpicos de París 2024."
                description="Será la primera vez que México participe en dicha disciplina en unos Juegos Olímpicos."
                link="https://www.record.com.mx/otros-deportes/historica-plaza-la-seleccion-mexicana-de-gimnasia-ritmica-logro-su-boleto-a-los"
              />
            </div>
            <BlogEntry
              imageUrl="https://www.record.com.mx/sites/default/files/styles/ecrop-horizontal-300x169/public/articulos/2023/11/02/snapinsta.app_382076029_18266165272087987_1124799524363327194_n_1080_1.jpg?itok=xGyd_g_-&changed=1698962892"
              title="Ofrecen un millón de pesos mexicanos por saber una pista por el padre de Luis Díaz."
              description="El padre del futbolista del Liverpool fue secuestrado por el Ejército de Liberación Nacional (ELN)."
              link="https://www.record.com.mx/futbol-futbol-internacional-internacionales/ofrecen-un-millon-de-pesos-mexicanos-por-saber-una-pista"
            />
          </div>
        </div>
      </div>
      <div className='mt-9'></div>
<Footer />
    </div>
 
    )
  }

export default PageNoticias
