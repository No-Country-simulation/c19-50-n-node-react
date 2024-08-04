import { Link } from 'react-router-dom';
import MaxWidthContainer from './MaxWidthContainer';
import { Separator } from './ui/separator';
import { FacebookIcon, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-foreground text-background">
      <MaxWidthContainer className="py-10">
        <div>
          <div className="grid grid-cols-4 gap-10 justify-between items-center max-md:grid-cols-2">
            <div>
              <Link className="font-bold text-xl" to="/">
                Descubre Cordoba
              </Link>
              <p>Lorem ipsum elit, officiis repellendus delectus adipisci.</p>
            </div>
            {[...Array(3)].map((_, i) => (
              <ul key={i}>
                <li className="font-bold">Lorem</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
                <li>Lorem ipsum dolor sit</li>
              </ul>
            ))}
          </div>

          <Separator className="my-6" />
          <div className="flex justify-end max-md:justify-center gap-3">
            <Instagram />
            <FacebookIcon />
            <Twitter />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Footer;
