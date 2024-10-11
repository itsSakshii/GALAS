import FooterContent from '../ui/FooterContent';
import galas from "../../assets/image/logo/galas.webp";

const footerData = {
  logoText: galas,
  email: "info@galasitsolutions.com",
  phone: "+91 8178777874",
  // Update iconLabels to be an array of objects
  iconLabels: [
    { name: "whatsapp", url: "https://api.whatsapp.com/send/?phone=%2B918178777874&text&type=phone_number&app_absent=0" },
    { name: "linkedin", url: "https://www.linkedin.com/company/galas-it-solutions/mycompany/" },
    { name: "facebook", url: "https://www.facebook.com/profile.php?id=61562438966562" },
    { name: "instagram", url: "https://www.instagram.com/galas_it_solutions/" }
  ],
  copyrightText: "Galas Entertainment © 2024. All Rights Reserved. Site Design by Galas Enterprises",
};

const box1Content = [
  { id: 1,  link: "Home" },
  { id: 2,  link: "Events" },
  { id: 3,  link: "Discover" },
  { id: 4,  link: "Services" },
  { id: 5,  link: "Blog" }
];

const box2Content = [
  { id: 1,  link: "About" },
  { id: 2,  link: "menu7" },
  { id: 3,  link: "menu8" },
  { id: 4,  link: "menu9" }
];

export default function Footer() {
  return (
    <>
      <div className="section-space"></div>
      <footer className="footer flex flex-col justify-center items-center">
        <div className="footer-inner container mx-auto p-6">
          <div className="inner-content flex flex-col justify-between items-center gap-10 lg:gap-8 md:flex-row">
            <article className="box">
              <section className="box-1-content flex flex-col justify-between gap-8">
                <FooterContent 
                  logoSrc={footerData.logoText} 
                  contactEmail={footerData.email} 
                  contactNumber={footerData.phone} 
                  iconLabels={footerData.iconLabels} 
                />
              </section>
            </article>
            <article className="box">
              <section className="box-2-content">
                <div className="flex flex-col space-y-0 sm:space-y-5">
                  <div className="flex justify-evenly space-x-2 sm:space-x-5 flex-col sm:flex-row">
                    {box1Content.map((box) => (
                      <div key={box.id} className={`${box.size} flex justify-center items-center`}>
                        {box.link && (
                          <a href="#" className="text-white hover:text-teal-200 hover:underline">
                            {box.link}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-evenly space-x-2 sm:space-x-5 flex-col sm:flex-row">
                    {box2Content.map((box) => (
                      <div key={box.id} className={`${box.size} flex justify-center items-center`}>
                        {box.link && (
                          <a href="#" className="text-white hover:text-teal-200 hover:underline">
                            {box.link}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </footer>
      <div className="section-space-inner"></div>
      <div className="footer-bottom p-6 border-t border-t-gray-600">
        <p className="text text-center sm:text-left text-sm font-light">{footerData.copyrightText}</p>
      </div>
    </>
  );
}
