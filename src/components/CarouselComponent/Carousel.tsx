import { URL, usePaintigListQuery } from "../../api/apiSlice";
import { Carousel, Pagination } from "antd";
import "antd/dist/reset.css";
import "./style.css";
import { useRef } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Loader } from "../Loader/Loader";

export const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const text = useAppSelector((state) => {
    return state.search.searchedString;
  });

  const { data: paintingListData = [], isLoading: isLoadingPaintingList } =
    usePaintigListQuery(text);

  function groupArray(array: any[], groupSize: number) {
    return array.reduce((acc: any[][], item: any, index: number) => {
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
    console.log("index", index);
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
                          style={{ width: "100%", height: "260px" }}
                          src={URL + item.imageUrl}
                          alt={item.name}
                        />
                        <div className="painting-descr">
                          <h2 className="painting-name">
                            {item.name.toUpperCase()}
                          </h2>
                          <span className="painting-created">
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

// [
//   {
//     authorId: 1,
//     created: "1850",
//     id: 1,
//     imageUrl: "/images/The_ninth_wave.jpeg",
//     locationId: 1,
//     name: "The ninth wave",
//   },
//   {
//     authorId: 2,
//     created: "1747",
//     id: 2,
//     imageUrl: "/images/L_Enlevement_d_Europe.jpeg",
//     locationId: 2,
//     name: "L`Enlévement d`Europe",
//   },
// ];
