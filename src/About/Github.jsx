import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-center pb-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">
            Days I <span className="text-purple-500">Code</span>
          </h1>
          <GitHubCalendar
            username="SuriyaPriyanS"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Github;