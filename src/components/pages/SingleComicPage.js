import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';
import LoadingSpinner from '../spinner/LoadingSpinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleComicPage.scss';

const SingleComicPage = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const {loading, error, getSingleMarvelData, clearError} = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [comicId]);

    const updateComic = () => {
        clearError();
        
        getSingleMarvelData('comics', comicId)
            .then(setComic);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const goBackBtn = error ? <ErrorButton/> : null
    const spinner = loading ? <LoadingSpinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;


    return (
        <>
            {errorMessage}
            {goBackBtn}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const {title, description, pageCount, language, price, thumbnail} = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to='/comics' className="single-comic__back">Back to all</Link>
        </div>
    )
}

const ErrorButton = () => {
    const history = useHistory();
    
    if (history.length <= 2) {
        return (
            <button className="button button__main button__long">
                <div className="inner">
                    <Link to='/comics'>
                        To comics list
                    </Link>
                </div>
            </button>
        )
    }

    return (
        <button className="button button__main button__long">
            <div className="inner" onClick={() => history.goBack()}>Go Back</div>
        </button>
    )
}

export default SingleComicPage;