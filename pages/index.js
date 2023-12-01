import BreadCrumb from "../components/BreadCrumb";
import CTABanner from "../components/CTABanner";
import CertificationsBanner from "../components/CertificationsBanner";
import EvaluationBanner from "../components/EvaluationBanner";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import LogoContainer from "../components/LogoContainer";
import Basic from "../layout/Basic";

const googleCards = [
  {
    title: "Isolation des combles",
    img: "/combles.png",
  },
  {
    title: "Isolation des rampants",
    img: "/toit.png",
  },
  {
    title: "Isolation des murs interieurs (ITI)",
    img: "/mur.png",
  },
  {
    title: "Isolation complete de votre bien",
    img: "/all.png",
  },
];

export default function Home() {
  return (
    <Basic
      title="Simulation aux aides de l'état pou votre projet d'isolation "
      metaDescription="Découvrez rapidement votre éligibilité au aides de l'état. Notre simulateur facile à utiliser vous aide à estimer votre prêt pour un projet d'isolation. Commencez dès maintenant !"
    >
      <Hero />
      {/* <CertificationsBanner /> */}
      <BreadCrumb list={["ACCUEIL", "ESTIMATION"]} />
      <EvaluationBanner />
      <div className="bg-gray-50 rounded-lg my-10">
        <LogoContainer data={googleCards} />
      </div>
      <Faq />
      <CTABanner />
    </Basic>
  );
}
