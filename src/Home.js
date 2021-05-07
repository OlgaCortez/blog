import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('https://olga-blog.herokuapp.com/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Fetching the blogs...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}
 
export default Home;