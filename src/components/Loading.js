import '../css/components/Loading.scss';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__spinner"></div>
            <span>Loading...</span>
        </div>
    );
};

export default Loading;