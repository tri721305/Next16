const page = () => {
  throw new Error("Test error boundary");
  return <div>page</div>;
};

export default page;
