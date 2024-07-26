import MaxWidthContainer from './MaxWidthContainer';

const Nav = () => {
  return (
    <div className="fixed w-full flex justify-center bg-background">
      <MaxWidthContainer>
        <nav className="flex justify-between items-center">
          <a href="/">Descubre Cordoba</a>
          <ul className="flex gap-x-3">
            <li>
              <a href="/login">Ingresar</a>
            </li>
            <li>
              <a href="/register">Crear cuenta</a>
            </li>
          </ul>
        </nav>
      </MaxWidthContainer>
    </div>
  );
};

export default Nav;
