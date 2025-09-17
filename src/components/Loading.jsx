
const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-[9999]">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    );
};

export default Loading;