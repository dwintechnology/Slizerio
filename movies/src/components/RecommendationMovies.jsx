import Movies from "./Movies";
import constants from "../utils/constants";

export default function RecommendationMovies({ moviesId }) {
    return (
        <Movies search={false} title='Recommended' path={`${constants.API_PATH}/movie/${moviesId}/recommendations?api_key=${constants.API_KEY}&page=`} setSearchParam={() => { }} />
    )
}