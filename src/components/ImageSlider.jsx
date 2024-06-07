import React, { useEffect, useState } from "react";

function ImageSlider() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  useEffect(() => {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const slider = document.querySelector(".slider");
    const sliderList = slider.querySelector(".slider .list");
    const thumbnail = document.querySelector(".slider .thumbnail");

    function moveSlider(direction) {
      const sliderItems = sliderList.querySelectorAll(".item");
      const thumbnailItems = thumbnail.querySelectorAll(".item");

      if (direction === "next") {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add("next");
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add("prev");
      }

      slider.addEventListener(
        "animationend",
        function () {
          if (direction === "next") {
            slider.classList.remove("next");
          } else {
            slider.classList.remove("prev");
          }
        },
        { once: true }
      );
    }

    nextBtn.onclick = function () {
      moveSlider("next");
      setExpandedIndex(-1); // Collapse all descriptions on slide change
    };

    prevBtn.onclick = function () {
      moveSlider("prev");
      setExpandedIndex(-1); // Collapse all descriptions on slide change
    };
  }, []);

  const slides = [
    {
      imgSrc: "./image/img1.jpg",
      title: "Nature's",
      type: "Silent Symphony",
      description:
        "Nature, with its awe-inspiring beauty and boundless wonders, is a symphony of silence, echoing the harmonious rhythm of life itself. In just three words, Nature's Silent Symphony encapsulates the essence of the natural world, inviting us to listen closely to its whispers and melodies.When we immerse ourselves in nature we are enveloped by a tranquil serenity that transcends the chaos of everyday life. The gentle rustle of leaves dancing in the wind, the melodious chirping of birds perched on branches, and the rhythmic flow of rivers weaving through the landscape compose this symphony of silence."
    },
    {
      imgSrc: "./image/img2.jpg",
      title: "Graceful",
      type: "Village Life",
      description:
        "The issue of water scarcity in rural villages is a pressing global concern, deeply affecting the daily lives of millions of people. This Rural Water Crisis manifests in various forms, from insufficient access to clean drinking water to the lack of reliable water sources for agriculture and sanitation. The consequences of this crisis are far-reaching, influencing health, economic stability, education, and overall quality of life in these communities."
    },
    {
      imgSrc: "./image/img3.jpg",
      title: "Plants",
      type: "Life's Foundation",
      description:
        "Plants are fundamental to life on Earth, serving as the cornerstone of ecosystems and human existence. They provide essential services such as oxygen production, food, medicine, and habitat for countless species. Understanding the diverse roles and incredible adaptations of plants reveals their significance and the urgent need to protect them."
    },
    {
      imgSrc: "./image/img4.jpg",
      title: "Nocturnal",
      type: "Artistic Wonders",
      description:
        "Night art, the creation and appreciation of art inspired by or depicting the night, offers a unique perspective on the world. The darkness, illuminated by the moon and stars, transforms ordinary scenes into mysterious and evocative landscapes. This artistic genre encompasses a wide range of mediums and styles, from painting and photography to literature and music, each capturing the essence of the night in distinct ways."
    },
    {
      imgSrc: "./image/img5.jpg",
      title: "Tranquil",
      type: "Hill Retreat",
      description:
        "Nestled amidst rolling green hills, a solitary hut stands as a serene retreat from the hustle and bustle of everyday life. This idyllic scene, where nature and simplicity coexist harmoniously, offers a picturesque view that captivates the heart and soul."
    },
    {
      imgSrc: "./image/img6.jpg",
      title: "Jungle",
      type: "Train Journey",
      description:
        "The train itself is a marvel, designed to blend comfort with the adventure of traversing wild terrains. Large windows allow passengers to fully immerse themselves in the panoramic views, making the journey as enjoyable as the destination. The rhythmic chug of the train, coupled with the occasional whistle, adds to the nostalgic charm of this mode of travel."
    }
  ];

  return (
    <div className="h-screen">
      <div className="slider">
        <div className="list">
          {slides.map((slide, index) => {
            const isExpanded = expandedIndex === index;
            const shortDescription = slide.description.slice(0, 245);
            return (
              <div className="item" key={index}>
                <img src={slide.imgSrc} alt="" />
                <div className="content">
                  <div className="type">{slide.type}</div>
                  <div className="title">{slide.title}</div>
                  <div
                    className={`description ${
                      isExpanded
                        ? "bg-[rgba(0,0,0,0.3)] p-2 text-sm font-semibold"
                        : "font-semibold"
                    } rounded-md`}
                  >
                    {isExpanded ? slide.description : shortDescription}
                    {!isExpanded && slide.description.length > 245 && "..."}
                  </div>
                  <div className="button text-black">
                    <button onClick={() => toggleDescription(index)}>
                      {isExpanded ? "SEE LESS" : "SEE MORE"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="thumbnail">
  {slides.map((slide, index) => {
    const nextIndex = (index + 1) % slides.length;
    return (
      <div className="item" key={index}>
        <img src={slides[nextIndex].imgSrc} alt="" />
      </div>
    );
  })}
</div>

        <div className="nextPrevArrows">
          <button title="prev" className="prev">
            {"<"}
          </button>
          <button title="next" className="next">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
