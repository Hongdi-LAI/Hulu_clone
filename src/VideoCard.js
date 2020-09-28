import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { Movie } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster missing"
      />

      <p>
        <TextTruncate
          line={2}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
      </p>
      <div className="videoCard__info">
        <h2>{movie.title || movie.original_name}</h2>
        <p className="videoCard__stats">
          {movie.media_type && `${movie.media_type}  ·  `}
          {`${movie.release_date || movie.first_air_date}  ·  `}
          <ThumbUpIcon className="videoCard__statsIcon" />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
