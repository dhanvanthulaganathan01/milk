import ResumeImg from "../assets/resume.png";

export default function Resume() {
  const config = {
    link: "https://drive.google.com/drive/folders/1jDDoqFngdsgEJsDUkqMlSNy4JQGDbfPO",
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5"
    >
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[200px]" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4  mb-5 w-[220px] font-bold">
            Achievement
          </h1>
          <p className="pb-5">
            You can view my Achievement{" "}
            <a className="btn" href={config.link} download>
              {" "}
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
