import useMoveElementOnMouseMove from "./hooks/useMoveElementOnMouseMove";
import imgBackground from "./image/background.png";
import imgHacker from "./image/hacker.png";
import imgBackpack from "./image/bagpack.png";
import imgTeam from "./image/team.jpeg";
import imgProfile from "./image/profile.png";
import imgPython from "./image/icons/PYTHON.png";
import imgGIT from "./image/icons/GIT.png";
import imgGithub from "./image/icons/GITHUB.png";
import imgTypeScript from "./image/icons/TYPESCRIPT.png";
import imgHTML5 from "./image/icons/HTML5.png";
import imgTerraform from "./image/icons/TERRAFORM.png";
import imgReact from "./image/icons/REACT.png";
import imgNodeJS from "./image/icons/NODE_JS.png";
import imgGraphQL from "./image/icons/GRAPHQL.png";
import imgPostgres from "./image/icons/postgres.png";
import getCatHtml from "./RainbowCat/getCatHtml";
import useRainbowCat from "./RainbowCat/useRainbowCat";
import useConsoleMessage from "./hooks/useConsoleMessage";
import imgLinkedIn from "./image/social/lin.png";
import imgEmail from "./image/social/email.png";
import imgGithubIcon from "./image/social/github.png";

const TECH_STACK_ICONS = [
  imgPython,
  imgGIT,
  imgGithub,
  imgTypeScript,
  imgHTML5,
  imgTerraform,
  imgReact,
  imgNodeJS,
  imgGraphQL,
  imgPostgres,
];
const YEARS_OF_EXPERIENCE = new Date().getUTCFullYear() - 2015;

function App() {
  useConsoleMessage();

  const hackerImageRef = useMoveElementOnMouseMove();
  const summonRainbowCat = useRainbowCat();

  let iconsAngle = 0;
  const angleIncrement = (2 * Math.PI) / TECH_STACK_ICONS.length;

  return (
    <div>
      <img
        src={imgBackground}
        className="min-h-screen h-[600px] w-screen object-cover object-bottom fixed -z-10"
      />
      <div className="bg-transparent">
        <section className="container min-h-screen h-[600px] flex flex-col md:flex-row-reverse gap-20 items-center">
          <div className="h-1/2 md:h-full md:w-2/3 flex flex-col justify-center">
            <header className="self-center p-10 bg-slate-900">
              <h1 className="font-extrabold text-3xl lg:text-6xl">
                Hi! I'm Dave
              </h1>
              <p className="text-xl lg:text-3xl">
                Welcome to my personal website!
              </p>
            </header>
          </div>
          <div className="md:h-full w-2/3 md:w-1/3 flex flex-col justify-end pb-20">
            <img
              className="self-center"
              src={imgHacker}
              ref={hackerImageRef}
              alt="Hacking Dave"
            />
          </div>
        </section>
      </div>
      <div className="bg-slate-900 drop-shadow-[0px_500px_0px_rgb(15,23,42)] shadow-slate-900">
        <div className="overflow-hidden">
          <section className="container min-h-screen md:h-[600px] flex flex-col md:flex-row-reverse gap-20 items-center py-20">
            <article className="md:w-2/3">
              <p className="md:text-xl md:py-20">
                I am a versatile lead software developer with{" "}
                <strong>over {YEARS_OF_EXPERIENCE} years of experience</strong>{" "}
                across different stacks. Throughout my career, I've worked on a
                range of projects, from small business presentation websites to
                large-scale enterprise applications where not only functionality
                but also maintainability and scalability were critical. My
                skills and experience allow me to tackle complex problems and
                find creative solutions that drive business growth and success.
                I specialize in a variety of programming languages and tools,
                including{" "}
                <strong>
                  Python, TypeScript, Solidity, Postgres, Docker, Terraform,
                  AWS, REST and GraphQL APIs
                </strong>{" "}
                and more. I am always eager to learn new technologies and tools
                to stay ahead of the curve.
              </p>
            </article>
            <div className="md:w-1/3 relative py-10">
              <img src={imgBackpack} className="w-1/3 md:w-1/2 mx-auto" />
              <div className="animate-spin-icons absolute top-1/2 left-1/2">
                {TECH_STACK_ICONS.map((imgURL, i) => {
                  const isMobile = window.innerWidth < 1024;
                  const TECH_STACK_ICONS_RADIUS = isMobile ? 100 : 160;
                  const iconOffset = isMobile ? 20 : 40;
                  const x =
                    TECH_STACK_ICONS_RADIUS * Math.cos(iconsAngle) - iconOffset;
                  const y =
                    TECH_STACK_ICONS_RADIUS * Math.sin(iconsAngle) - iconOffset;
                  iconsAngle += angleIncrement;

                  return (
                    <img
                      key={imgURL}
                      className={`absolute animate-spin-icons-rev w-10 lg:w-20 max-w-none`}
                      src={imgURL}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <div className="bg-fuchsia-900">
          <section className="container min-h-screen md:h-[600px] flex flex-col md:flex-row gap-20 items-center py-20">
            <article className="md:w-2/3">
              <p className="md:text-xl md:py-20">
                In addition to my development skills, I have experience{" "}
                <strong>
                  mentoring junior developers and managing small teams
                </strong>
                . As a mentor, I take a hands-on approach, providing guidance
                and support to help junior developers develop their skills and
                become successful contributors to the team. As a team leader, I
                understand the importance of setting clear goals, establishing
                processes, and maintaining open communication. I work closely
                with team members to ensure that everyone is aligned on the
                project goals and has the resources they need to be successful.
              </p>
            </article>
            <img src={imgTeam} className="md:w-1/3" />
          </section>
        </div>
        <section className="container min-h-screen md:h-[600px] flex flex-col md:flex-row gap-10 md:gap-20 items-center py-20">
          <img src={imgProfile} className="md:w-1/3" />
          <article className="md:w-2/3">
            <p className="md:text-2xl">
              Whether you're looking to build a new software application,
              improve an existing one, or troubleshoot a problem, I'm here to
              help.{" "}
              <strong>
                <a
                  href="mailto:dave.hrdlicka@gmail.com"
                  className="text-orange-600 hover:underline"
                >
                  Contact me
                </a>
              </strong>{" "}
              to discuss your project and how I can assist you in achieving your
              goals.
            </p>
            <div className="flex flex-row gap-5 justify-center pt-10">
              <a
                className="bg-rose-100 rounded-full p-1 hover:scale-110 transition-transform w-[40px]"
                href="https://www.linkedin.com/in/dave-hrdlicka-0a769894/"
                target="_blank"
              >
                <img src={imgLinkedIn} alt="Lin" />
              </a>
              <a
                className="bg-rose-100 rounded-full p-1 hover:scale-110 transition-transform w-[40px]"
                href="mailto:dave.hrdlicka@gmail.com"
              >
                <img src={imgEmail} alt="Email" />
              </a>
              <a
                className="bg-rose-100 rounded-full p-1 hover:scale-110 transition-transform w-[40px]"
                href="https://github.com/czechdave"
                target="_blank"
              >
                <div className="bg-white rounded-full">
                  <img src={imgGithubIcon} alt="Github" />
                </div>
              </a>
            </div>
          </article>
        </section>
        <p className="text-center py-10 md:text-xl">
          Or just play with some rainbow cats:&nbsp;&nbsp;
          <button
            className="w-12 h-8 rounded-full bg-fuchsia-900 relative overflow-hidden align-middle"
            onClick={summonRainbowCat}
          >
            <div
              className="scale-[20%] translate-x-[20px]"
              dangerouslySetInnerHTML={{ __html: getCatHtml() }}
            />
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
