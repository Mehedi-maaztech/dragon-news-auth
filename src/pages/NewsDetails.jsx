import { useLoaderData, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {

    const data = useLoaderData();
    console.log("news details data", data.data[0]);
    //const { author } = data.data[0];
    //console.log("news data", author);
    const news = data.data[0];

    const Navigate = useNavigate();
    const handleGoToCategory = () => {
        if (news.category_id) {
            Navigate(`/category/${news.category_id}`);
        }
    }; // <-- Added missing closing brace here
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <section className="col-span-9 flex flex-col justify-center">
                    <h2 className="font-semibold pb-4">Drgon News</h2>
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
                        <img src={news.image_url} alt={news.title} className="w-full h-64 object-cover rounded mb-4" />
                        <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
                        <div className="text-sm text-gray-500 mb-2">
                            {news.author?.name && <span>By {news.author.name}</span>} {news.author?.published_date && <span> | {news.author.published_date}</span>}
                        </div>
                        <p className="text-gray-700 mb-4">{news.details}</p>
                        <div className="text-xs text-gray-400 mb-4">
                            {news.category && <span>Category: {news.category}</span>}
                        </div>
                        <button onClick={handleGoToCategory} className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition">All news in this category</button>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;