import Image from "next/image";
import "./whatsapp.scss";

const Whatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=918830256985&text=Hi%20I%20am%20interested%20in%20buying%20apartment%20at%20Dhuni%20Constructions%20Pvt.%20Ltd."
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent fixed bottom-5 right-5 z-50"
    >
      <Image
        className="whatsapp"
        src={"/whatsapp.png"} // Use a proper public path or import the image
        alt="WhatsApp Icon"
        width={40}
        height={40}
      />
    </a>
  );
};

export default Whatsapp;
