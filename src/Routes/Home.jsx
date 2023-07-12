import Header from '../Component/Header';
import TodosLogic from '../Component/TodosLogic';
import '../Styles/app.css';

const Home = () => {
  return (
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
  );
};
export default Home;