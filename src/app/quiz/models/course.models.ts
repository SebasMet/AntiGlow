export interface LearningMaterial {
  image: string;
  title: string;
  material: string;
}

export interface QuizOption {
  option: string;
  correctAnswer: boolean;
}

export interface QuizQuestions {
  question: string;
  options: Array<QuizOption>;
}

export interface EntireCourse {
  courseId: number;
  title: string;
  courseCoverImage: string;
  lessons: Array<LearningMaterial>;
  quiz: Array<QuizQuestions>;
}