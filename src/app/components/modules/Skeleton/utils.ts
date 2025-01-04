export const random = () => Math.random();

export const randomOpacity = () => Math.random();

export const randomMove = () => Math.random() * 2 - 1;

export const scale = [1, 1.1, 1];

export const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

export const sequence = [
  [
    ".circle-1",
    {
      scale,
      transform,
    },
    { duration: 0.8 },
  ],
  [
    ".circle-2",
    {
      scale,
      transform,
    },
    { duration: 0.8 },
  ],
  [
    ".circle-3",
    {
      scale,
      transform,
    },
    { duration: 0.8 },
  ],
  [
    ".circle-4",
    {
      scale,
      transform,
    },
    { duration: 0.8 },
  ],
  [
    ".circle-5",
    {
      scale,
      transform,
    },
    { duration: 0.8 },
  ],
];

export const listClassNameIcon = ['h-4 w-4', 'h-6 w-6', 'h-10 w-10', 'h-8 w-8', 'h-4 w-4']
export const listClassName = ['h-10 w-10 circle-1', 'h-12 w-12 circle-2', 'circle-3', 'h-12 w-12 circle-4', 'h-10 w-10 circle-5']