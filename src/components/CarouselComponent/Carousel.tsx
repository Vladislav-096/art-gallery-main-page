import { Artwork, URL, usePaintigListQuery } from "../../api/apiSlice";
import { Carousel, Pagination } from "antd";
import "antd/dist/reset.css";
import "./carousel.scss";
import { useRef } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Loader } from "../Loader/Loader";

export const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const theme = useAppSelector((state) => state.theme.theme);
  const text = useAppSelector((state) => state.search.searchedString);

  const { data: paintingListData = [], isLoading: isLoadingPaintingList } =
    usePaintigListQuery(text);

  function groupArray(array: Artwork[], groupSize: number) {
    return array.reduce((acc: Artwork[][], item: Artwork, index: number) => {
      const groupIndex = Math.floor(index / groupSize);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(item);
      return acc;
    }, []);
  }

  const groupedData = groupArray(paintingListData, 6);

  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      (carouselRef.current as any).goTo(index - 1);
    }
  };

  return (
    <div className="container">
      {isLoadingPaintingList ? (
        <div className="carousel-loader-wrapper">
          <Loader />
        </div>
      ) : (
        <>
          <Carousel
            arrows={false}
            fade={true}
            speed={200}
            infinite={true}
            ref={carouselRef}
            dots={false}
          >
            {groupedData.map((array, index) => (
              <div key={index}>
                <div className="row">
                  {array.map((item, itemIndex) => (
                    <div className="col-4 card-item" key={itemIndex}>
                      <div className="card-item__inner-wrapper">
                        <img
                          className="card-item__image"
                          src={URL + item.imageUrl}
                          alt={item.name}
                        />
                        <div className={`card-item__painting-descr ${theme}`}>
                          <h2 className={`card-item__painting-name ${theme}`}>
                            {item.name.toUpperCase()}
                          </h2>
                          <span
                            className={`card-item__painting-created ${theme}`}
                          >
                            {item.created}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>

          <Pagination
            align="center"
            total={groupedData.length}
            pageSize={1}
            onChange={goToSlide}
          />
        </>
      )}
    </div>
  );
};
