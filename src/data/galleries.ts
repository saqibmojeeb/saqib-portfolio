
export type GalleryItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

export const galleries: Record<
  "travel" | "fitness" | "currency",
  GalleryItem[]
> = {
  travel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({
    src: `/images/travel/travel-${String(n).padStart(2, "0")}.jpeg`,
    alt: "Travel and adventure moments",
    type: "image",
  })),

  fitness: [
    {
      src: "/videos/fitness/fitness-01.mp4",
      alt: "Fitness video 1",
      type: "video",
    },
    {
      src: "/videos/fitness/fitness-02.mp4",
      alt: "Fitness video 2",
      type: "video",
    },
    {
      src: "/videos/fitness/fitness-03.mp4",
      alt: "Fitness video 3",
      type: "video",
    },
    {
      src: "/videos/fitness/fitness-04.mp4",
      alt: "Fitness video 4",
      type: "video",
    },
    {
      src: "/videos/fitness/fitness-05.mp4",
      alt: "Fitness video 5",
      type: "video",
    },
    {
      src: "/videos/fitness/fitness-06.mp4",
      alt: "Fitness video 6",
      type: "video",
    },
    {
      src: "/videos/fitness/fitness-07.mp4",
      alt: "Fitness video 7",
      type: "video",
    },
    {
      src: "/videos/fitness/fitness-08.mp4",
      alt: "Fitness video 8",
      type: "video",
    },
  ],

  currency: [1, 2, 3, 4].map((n) => ({
    src: `/images/currency/currency-0${n}.jpg`,
    alt: "Add a banknote or coin collection photograph",
    type: "image",
  })),
};
