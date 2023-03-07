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
const TECH_STACK_ICONS_RADIUS = 200;
const YEARS_OF_EXPERIENCE = new Date().getUTCFullYear() - 2015;

function App() {
  const hackerImageRef = useMoveElementOnMouseMove();

  let iconsAngle = 0;
  const angleIncrement = (2 * Math.PI) / TECH_STACK_ICONS.length;

  return (
    <div>
      <img
        src={imgBackground}
        className="h-screen w-screen object-cover object-bottom fixed -z-10"
      />
      <section className="h-screen bg-transparent">
        <div className="container h-full columns-2">
          <div className="h-full flex flex-col justify-end pb-20">
            <img
              className="w-2/3 self-center"
              src={imgHacker}
              ref={hackerImageRef}
              alt="Hacking Dave"
            />
          </div>
          <div className="h-full flex flex-col justify-center">
            <header className="self-center p-10 bg-slate-900">
              <h1 className="font-extrabold text-6xl">Hi! I'm Dave</h1>
              <p className="text-3xl">Welcome to my personal website!</p>
            </header>
          </div>
        </div>
      </section>
      <div className="bg-slate-900 drop-shadow-[0px_500px_0px_rgba(15,23,42,1)] shadow-slate-900">
        <section className="container h-screen flex gap-32 items-center">
          <div className="w-1/3 relative">
            <img src={imgBackpack} className="w-1/2 mx-auto" />
            <div className="animate-spin-icons absolute top-1/2 left-1/2">
              {TECH_STACK_ICONS.map((imgURL, i) => {
                const x = TECH_STACK_ICONS_RADIUS * Math.cos(iconsAngle) - 40;
                const y = TECH_STACK_ICONS_RADIUS * Math.sin(iconsAngle) - 40;
                iconsAngle += angleIncrement;

                return (
                  <img
                    key={imgURL}
                    className={`absolute animate-spin-icons-rev w-20 max-w-none`}
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
          <article className="w-2/3 py-10">
            <p className="text-xl">
              I am a versatile lead software developer with{" "}
              <strong>over {YEARS_OF_EXPERIENCE} years of experience</strong>{" "}
              across different stacks. Throughout my career, I've worked on a
              range of projects, from small business presentation websites to
              large-scale enterprise applications where not only functionality
              but also maintainability and scalability were critical. My skills
              and experience allow me to tackle complex problems and find
              creative solutions that drive business growth and success. I
              specialize in a variety of programming languages and tools,
              including{" "}
              <strong>
                Python, TypeScript, Solidity, Postgres, Docker, Terraform, AWS,
                REST and GraphQL APIs
              </strong>{" "}
              and more. I am always eager to learn new technologies and tools to
              stay ahead of the curve.
            </p>
          </article>
        </section>
        <div className="bg-fuchsia-900">
          <section className="container h-screen flex gap-32 items-center">
            <article className="w-2/3 py-10">
              <p className="text-xl">
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
            <img src={imgTeam} className="w-1/3" />
          </section>
        </div>
        <section className="container h-screen flex gap-32 items-center">
          <img src={imgProfile} className="w-1/3" />
          <article className="w-2/3 py-10">
            <p className="text-2xl">
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
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
