import QuestionCards from "@/components/cards/QuestionCards";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";
import React from "react";
const questions = [
  {
    _id: "1",
    title: "How to implement authentication in Next.js?",
    description:
      "I am looking for best practices to implement authentication in a Next.js application. Any suggestions?",
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "2",
        name: "Javascript",
      },
    ],
    author: { _id: "1", name: "Peter" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JS ?",
    description: "I am looking for best practices to learn JavaScript. Any suggestions?",
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "2",
        name: "Javascript",
      },
    ],
    author: { _id: "1", name: "Peter" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2021-12-05"),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filterdQuestions = questions.filter((question) => {
    const matchesQuery = question.title.toLowerCase().includes(query?.toLowerCase());
    const matchesFilter = filter ? question.tags[0].name.toLowerCase() : true;

    return matchesQuery && matchesFilter;
  });

  console.log("filterdQuestions", filterdQuestions);
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3" asChild>
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch route="/" imgSrc="/icons/search.svg" placeholder="Search questions ..." otherClasses="flex-1" />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filterdQuestions.map((question) => (
          <QuestionCards key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
