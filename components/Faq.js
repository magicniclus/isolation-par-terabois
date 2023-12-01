import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    id: 1,
    question:
      "Pourquoi est-il crucial de simuler les aides à l'isolation sur notre site ?",
    answer:
      "Simuler les aides à l'isolation sur notre site vous aide à évaluer précisément les subventions et les prêts à taux zéro auxquels vous pouvez prétendre pour vos travaux d'isolation. Cette démarche optimise votre budget en prenant en compte les aides actuelles et les spécificités des travaux d'isolation.",
  },
  {
    id: 2,
    question:
      "Comment notre site garantit-il une simulation précise des aides à l'isolation ?",
    answer:
      "Notre site utilise des données à jour sur les programmes d'aide, incluant MaPrimeRénov', CEE, et éco-PTZ. Nos algorithmes tiennent compte de tous les critères nécessaires pour vous fournir une estimation précise des aides disponibles pour l'isolation de vos combles, murs intérieurs ou sous toiture. Il est cependant possible pour valider l'estimation de consulter un de nos expert en isolation.",
  },
  {
    id: 3,
    question:
      "Quels sont les avantages d'une simulation d'aides à l'isolation sur notre site ?",
    answer:
      "Notre simulation en ligne vous offre une vue personnalisée de vos possibilités de financement pour l'isolation de votre maison. Elle prend en compte les détails de vos travaux et vous guide sur les différentes aides disponibles.",
  },
  {
    id: 4,
    question:
      "Comment les informations sur les aides à l'isolation sont-elles actualisées sur notre site ?",
    answer:
      "Nous entretenons des relations étroites avec les organismes de financement et suivons les évolutions législatives pour maintenir nos simulateurs à jour avec les dernières informations disponibles sur les aides à l'isolation.",
  },
  {
    id: 5,
    question:
      "Les informations fournies pour la simulation des aides à l'isolation sont-elles sécurisées sur notre site ?",
    answer:
      "Absolument. Nous utilisons des protocoles de sécurité avancés pour garantir la confidentialité et la protection de vos données personnelles. Vos informations sont exclusivement utilisées pour la simulation des aides à l'isolation.",
  },
  {
    id: 6,
    question:
      "Combien de temps faut-il pour réaliser une simulation d'aides à l'isolation sur notre site ?",
    answer:
      "Notre simulateur d'aides à l'isolation est rapide et facile à utiliser. En quelques minutes, vous pouvez obtenir une estimation de votre éligibilité et du montant potentiel des aides.",
  },
  {
    id: 7,
    question:
      "En quoi notre simulateur d'aides à l'isolation se distingue-t-il des autres outils disponibles ?",
    answer:
      "Notre simulateur se démarque par sa précision, la mise à jour constante de ses données, et sa facilité d'utilisation. Nous visons à offrir une expérience utilisateur optimale, avec des résultats fiables et adaptés à votre projet d'isolation.",
  },
  {
    id: 8,
    question:
      "La simulation des aides à l'isolation est-elle gratuite sur notre site ?",
    answer:
      "Oui, la simulation des aides à l'isolation sur notre site est totalement gratuite. Elle vous offre toutes les informations nécessaires pour planifier vos travaux d'isolation.",
  },
  {
    id: 9,
    question:
      "Peut-on se fier aux résultats de la simulation d'aides à l'isolation proposée par notre site ?",
    answer:
      "L'estimation n'es pas contractuelle. Nos simulations s'appuient sur les données les plus récentes et sont régulièrement mises à jour pour assurer leur fiabilité. Cependant, une consultation avec un expert est recommandée pour une analyse détaillée de votre situation.",
  },
  {
    id: 10,
    question:
      "Quels avantages y a-t-il à utiliser notre site pour simuler des aides à l'isolation plutôt qu'un autre outil ?",
    answer:
      "Notre site est spécialement conçu pour faciliter la simulation de vos aides à l'isolation. Nous offrons une interface claire, des conseils personnalisés et des informations actualisées, vous permettant de prendre les meilleures décisions pour vos travaux d'isolation.",
  },
];

const Faq = () => {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-[1250px] px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-[1250px]  divide-y divide-gray-700/10">
          <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
            Questions fréquentes :
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-700">
                        <span className="text-base leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-xs leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
