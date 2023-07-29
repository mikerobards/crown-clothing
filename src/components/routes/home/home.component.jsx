import Directory from '../../directory/directory.component';
import categories from '../../directory/categories.jsx';

const Home = () => {

    return (
        <div className="App">
            <Directory categories={categories} />
        </div>
    );
}

export default Home;
