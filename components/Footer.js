import { useEffect, useState } from "react";
import CertificationsBanner from "./CertificationsBanner";

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

const navigation = {
  legal: [
    { name: "Conditions d'utilisation", href: "/conditions-d-utilisation" },
    { name: "Mentions légales", href: "/mentions-legales" },
    {
      name: "Politique de confidentialité",
      href: "/politique-de-confidentialite",
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      setIsButtonActive(false);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, [notification]);

  const handleEmailChange = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    setIsButtonActive(isValidEmail(currentEmail));
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 lg:px-8">
        <div className="flex w-full justify-between items-center">
          <a href="/" className="">
            <span className="sr-only">Avenue-immo</span>
            <img className="w-auto h-14" src="/logo.png" alt="avenue-immo" />
          </a>
          <CertificationsBanner />
        </div>
        <div className="mt-10 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2023 isolation-par-terabois.fr, Inc. Tous droit réservé.
          </p>
          <a
            className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0"
            href="/mentions-legales"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
