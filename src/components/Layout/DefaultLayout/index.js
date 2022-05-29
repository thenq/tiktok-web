import Header from '../components/Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <SideBar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
