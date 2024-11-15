import logo from "/favicon.ico";
export default function Project({ live, image, author, projectName, goal }) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-0 border-opacity-60 rounded-3xl overflow-hidden bg-light-font">
        <img
          className="lg:h-56 md:h-36 w-full object-cover object-center"
          src={image}
          alt="project"
        />
        <div className="p-6">
          <h2 className="text-base title-font font-semibold text-main-font mb-1">
            {projectName}
          </h2>
          <div className="flex items-center gap-3">
            <img src={logo} alt="icp-logo" className="h-5" />
            <h1 className="title-font text-xs font-medium text-gray-900">
              {goal}
            </h1>
          </div>
          <p className="title-font text-xs font-medium text-gray-900 text-blue-500 mb-2">
            {live}
          </p>
          <p className="title-font text-xs text-gray-500 ">by{" " + author}</p>
        </div>
      </div>
    </div>
  );
}
