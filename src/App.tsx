import { useLayoutEffect, useRef } from "react";

const MAX_IMAGE_SHIFT = 50;
const YEARS_OF_EXPERIENCE = new Date().getUTCFullYear() - 2015;
const TECH_STACK_ICONS = [
  "PYTHON",
  "GIT",
  "GITHUB",
  "TYPESCRIPT",
  "HTML5",
  "TERRAFORM",
  "REACT",
  "NODE_JS",
  "GRAPHQL",
];
const TECH_STACK_ICONS_RADIUS = 200;

const getElementCenterCoordinates = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
};

const useMoveElementOnMouseMove = () => {
  const elementRef = useRef<HTMLImageElement>(null);
  const centerRef = useRef<{ x: number; y: number } | null>(null);

  useLayoutEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (elementRef.current == null) {
        return;
      }

      if (centerRef.current == null) {
        centerRef.current = getElementCenterCoordinates(elementRef.current);
      }

      const screenSize = { x: window.innerWidth, y: window.innerHeight };
      const imageCenter = centerRef.current;
      const mouseImageDistance = {
        x: e.x - imageCenter.x,
        y: e.y - imageCenter.y,
      };
      const minX = -imageCenter.x;
      const maxX = screenSize.x - imageCenter.x;
      const minY = -imageCenter.y;
      const maxY = screenSize.y - imageCenter.y;

      const mouseImageDistanceNormal = {
        x:
          mouseImageDistance.x > 0
            ? -mouseImageDistance.x / maxX
            : mouseImageDistance.x / minX,
        y:
          mouseImageDistance.y > 0
            ? -mouseImageDistance.y / maxY
            : mouseImageDistance.y / minY,
      };

      elementRef.current.style.transform = `translate(${
        MAX_IMAGE_SHIFT * mouseImageDistanceNormal.x
      }px, ${MAX_IMAGE_SHIFT * mouseImageDistanceNormal.y}px)`;
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return elementRef;
};

function App() {
  const hackerImageRef = useMoveElementOnMouseMove();

  let iconsAngle = 0;
  const angleIncrement = (2 * Math.PI) / TECH_STACK_ICONS.length;

  return (
    <div>
      <img
        src="/src/image/background.png"
        className="h-screen w-screen object-cover object-bottom fixed -z-10"
      />
      <section className="h-screen bg-transparent">
        <div className="container h-full columns-2">
          <div className="h-full flex flex-col justify-end pb-20">
            <img
              className="w-2/3 self-center"
              src="/src/image/hacker.png"
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
            <img src="/src/image/bagpack.png" className="w-1/2 mx-auto" />
            <div className="animate-spin-icons absolute top-1/2 left-1/2">
              {TECH_STACK_ICONS.map((name, i) => {
                const x = TECH_STACK_ICONS_RADIUS * Math.cos(iconsAngle) - 40;
                const y = TECH_STACK_ICONS_RADIUS * Math.sin(iconsAngle) - 40;
                iconsAngle += angleIncrement;

                return (
                  <img
                    key={name}
                    className={`absolute animate-spin-icons-rev w-20 max-w-none`}
                    src={`/src/image/icons/${name}.png`}
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
            <img src="/src/image/team.png" className="w-1/3" />
          </section>
        </div>
        <section className="container h-screen flex gap-32 items-center">
          <img src="/src/image/profile_transparent.png" className="w-1/3" />
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
