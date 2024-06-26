type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="z-50 flex items-center h-20 px-10 bg-primary shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
      <div className="flex items-center ml-auto"></div>
    </header>
  );
};

export default Header;
