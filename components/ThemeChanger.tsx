
const Navbar = ({ theme }: { theme: string | undefined }) => {

  return (
    <div className="p-10 text-center w-full items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
      <div>
        The current theme is: <strong style={{textTransform: 'uppercase'}}>{theme}</strong>
      </div>
    </div>
  );
};

export default Navbar;
