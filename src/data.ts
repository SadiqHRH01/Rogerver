export type Project = {
  id: number
  title: string
  description: string
  image: string
  goal?: number
  raised?: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water — Nigeria',
    description: 'Boreholes & filtration systems for remote communities.',
    image: '/images/project1.svg',
    goal: 10000,
    raised: 7200
  },
  {
    id: 2,
    title: 'Scholarships — Ghana & Nigeria',
    description: 'Full scholarships and learning materials for bright youths.',
    image: '/images/project2.svg',
    goal: 15000,
    raised: 15000
  },
  {
    id: 3,
    title: 'Disaster Relief Fund',
    description: 'Immediate aid for natural disasters and displaced families.',
    image: '/images/project3.svg',
    goal: 20000,
    raised: 4500
  }
]

// data.ts

export const galleryImages = [
  "/public/images/img1.jpg",
  "/public/images/img2.jpg",
  "/public/images/img3.jpg",
  "/public/images/img4.jpg",
  "/public/images/img5.jpg",
  "/public/images/img6.jpg",
  "/public/images/img7.jpg",
  "/public/images/img8.jpg",
  "/public/images/img9.jpg",
  "/public/images/img10.jpg",
  "/public/images/img11.jpg",
  "/public/images/img12.jpg",
  
  

];
