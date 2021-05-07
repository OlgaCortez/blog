import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://192.168.1.73:5000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Fetching the blogs...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;