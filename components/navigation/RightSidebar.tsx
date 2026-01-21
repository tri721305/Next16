import ROUTES from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "How to create a custom hook in React ?",
  },
  {
    _id: "2",
    title: "What is the difference between let and var in JavaScript ?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "react",
    questions: 100,
  },

  {
    _id: "2",
    name: "javascript",
    questions: 80,
  },
  {
    _id: "3",
    name: "typescript",
    questions: 60,
  },
  {
    _id: "4",
    name: "nextjs",
    questions: 50,
  },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-1 p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              href={ROUTES.PROFILE(_id)}
              key={_id}
            >
              <p className="body-medium text-dark500_light7800">{title}</p>

              <Image src="/icons/chevron-right.svg" alt="Chevron" width={20} height={20} className="invert-colors" />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
