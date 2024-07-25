import MaxWidthContainer from './MaxWidthContainer';

const Nav = () => {
  return (
    <div className="fixed w-full flex justify-center bg-background">
      <MaxWidthContainer>
        <nav className="flex justify-between items-center">
          <a href="/">Logo</a>
          <ul className="flex gap-x-3">
            <li>
              <a href="/">Link 1</a>
            </li>
            <li>
              <a href="/">Link 2</a>
            </li>
          </ul>
        </nav>
      </MaxWidthContainer>
    </div>
  );
};

export default Nav;
