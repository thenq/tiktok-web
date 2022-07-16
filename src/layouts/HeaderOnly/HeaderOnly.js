import Header from '../components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default HeaderOnly;
